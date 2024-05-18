const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

// .env dosyasından secret key alın
const JWT_SECRET = process.env.JWT_SECRET || 'secretKey'; // Güvenlik için ortam değişkenlerini kullanmak iyi bir uygulamadır.

router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'Kullanıcı bulunamadı.' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Geçersiz şifre.' });
    }

    // JWT token oluşturma
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: 'Başarılı giriş.', token });
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});

module.exports = router;
