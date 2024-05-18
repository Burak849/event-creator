const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');  // bcryptjs modülünü kullanabilirsiniz
const app = express();
const port = process.env.PORT || 3000;

// MongoDB bağlantısı
mongoose.connect('mongodb+srv://burak:burak123.@suber.nqzo9fx.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('MongoDB bağlantısı başarılı.');
  })
  .catch((err) => {
    console.error('MongoDB bağlantı hatası:', err);
  });

// JSON verileri için body-parser kullanımı
app.use(bodyParser.json());
app.use(express.json());

// Rotalar
app.use('/api/login', require('./routers/login'));
app.use('/api/register', require('./routers/register'));

// User modelini kontrol ederek tanımla
let User;
try {
  User = mongoose.model('User');
} catch (error) {
  // Model henüz tanımlanmamışsa tanımla
  User = mongoose.model('User', {
    //name: String,
    //lastName: String,
    email: String,
    password: String,
    confirm_password: String
  });
}

// api/user endpoint'i
app.get('/api/user', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Sunucu hatası');
  }
});

app.get('/api/user/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send('Kullanıcı bulunamadı');
    }
    res.json(user);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Sunucu hatası');
  }
});

app.delete('/api/user/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).send('Kullanıcı bulunamadı');
    }
    res.json({ message: 'Hesap başarıyla silindi' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Sunucu hatası');
  }
});

app.put('/api/user/:id', async (req, res) => {
  const id = req.params.id;
  const updatedUser = req.body;
  try {
    const user = await User.findByIdAndUpdate(id, updatedUser, { new: true });
    if (!user) {
      return res.status(404).send('Kullanıcı bulunamadı');
    }
    res.json(user);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Sunucu hatası');
  }
});

// POST isteğini dinleyen yol
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Geçersiz kullanıcı adı veya şifre' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Geçersiz kullanıcı adı veya şifre' });
    }

    res.json({ userId: user._id });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Sunucu hatası' });
  }
});

// Statik dosyalar
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});
