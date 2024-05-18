const { MongoClient } = require('mongodb');
const express = require('express');
const router = express.Router();

const uri = 'mongodb+srv://burak:burak123@suber.nqzo9fx.mongodb.net/stockmate?retryWrites=true&w=majority'; // Veritabanı adını ve parametreleri düzenledim
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
  try {
    await client.connect();
    console.log('MongoDB veritabanına başarıyla bağlandı');
  } catch (err) {
    console.error(err);
  }
}

run().catch(console.error);

router.post('/register', async (req, res) => {
  try {
    const newUser = req.body; // POST isteği ile gelen kullanıcı bilgilerini al
    await client.connect();
    
    const database = client.db('stockmate'); // Veritabanı adını düzenledim
    const usersCollection = database.collection('user'); // Kullanıcı koleksiyonunu seç
    
    const result = await usersCollection.insertOne(newUser); // Yeni kullanıcıyı ekle
    console.log(`Yeni kullanıcı eklendi with ID: ${result.insertedId}`);
    
    res.status(201).json({ message: 'Kullanıcı başarıyla kaydedildi' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Başarısız kayıt işlemi' });
  } finally {
    await client.close();
  }
});

module.exports = router;
