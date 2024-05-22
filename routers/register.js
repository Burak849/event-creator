const { MongoClient } = require('mongodb');
const express = require('express');
const router = express.Router();

const uri = 'mongodb+srv://burak:belian123@suber.nqzo9fx.mongodb.net/stockmate?retryWrites=true&w=majority';
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

router.use(express.json()); // JSON parsing middleware ekledim

router.post('/register', async (req, res) => {
  try {
    const newUser = req.body;
    
    const database = client.db('stockmate');
    const userCollection = database.collection('user'); // Koleksiyon adını 'user' olarak değiştirdim
    
    const result = await userCollection.insertOne(newUser);
    console.log(`Yeni kullanıcı eklendi with ID: ${result.insertedId}`);
    
    res.status(201).json({ message: 'Kullanıcı başarıyla kaydedildi' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Başarısız kayıt işlemi' });
  }
});

module.exports = router;
