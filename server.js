const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const app = express();
const port = process.env.PORT || 3000;

// MongoDB bağlantı dizesi
const dbURI = 'mongodb+srv://burak:belian123@suber.nqzo9fx.mongodb.net/stockmate?retryWrites=true&w=majority';

// Bağlantı parametreleri
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// MongoDB'ye bağlan
mongoose.connect(dbURI, options)
  .then(() => {
    console.log('MongoDB bağlantısı başarılı.');
  })
  .catch((err) => {
    console.error('MongoDB bağlantı hatası:', err);
  });

// JSON verileri için body-parser kullanımı
app.use(bodyParser.json());

// User modelini tanımla

const User = mongoose.model('User', {
  email: String,
  password: String
});

// Rotalar
app.use('/api/login', require('./routers/login'));
app.use('/api/register', require('./routers/register'));

// api/user endpoint'i
app.get('/api/user', async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
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
app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    res.json({ userId: newUser._id });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Sunucu hatası' });
  }
});

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

// Tüm yolları yönlendir
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// Sunucuyu dinlemeye başla
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});
