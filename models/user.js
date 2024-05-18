const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
    sparse: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirm_password: {
    type: String,
    required: true,
  },
});


//BURADA HER SEYE AYRI ACMAN LAZIM ADMIN'E DE BOYLE YAPARSIN
//UZERINE APP.USE REQUIRELERE EKLE ROTALARDA


if (mongoose.models.User) {
  User = mongoose.model('User');
} else {
  User = mongoose.model('User', userSchema);
}


module.exports = User;