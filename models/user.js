const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  collection: 'user', // Koleksiyon adı olarak 'user' kullanılacak
  timestamps: true,   // Oluşturma ve güncelleme zaman damgası alanlarını otomatik oluştur
});

const UserModel = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = UserModel;
