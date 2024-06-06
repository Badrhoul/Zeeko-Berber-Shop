// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/BarberShop');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const expressSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
});

const NewSchema = mongoose.model('Appointments', expressSchema);

module.exports = NewSchema 