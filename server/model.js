const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/BarberShop');
}
const expressSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  time: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        // Time format validation (HH:MM)
        return /^([01]\d|2[0-3]):([0-5]\d)$/.test(v);
      },
      message: props => `${props.value} is not a valid time format!`
    }
  }
});

const NewSchema = mongoose.model('Appointments', expressSchema);

module.exports = NewSchema 