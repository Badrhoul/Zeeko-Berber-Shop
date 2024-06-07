const schema = require("./model")

async function getAppointment(req, res) {
    try {
        const date = req.params.date;
        const parsedDate = new Date(date);
    
        if (isNaN(parsedDate)) {
          return res.status(400).send('Invalid date format');
        }
    
        const appointments = await schema.find({ date: parsedDate });
        res.status(200).json(appointments);
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
    };



async function postAppointment(req, res) {
    try {
        const { name, date, time } = await schema.create(req.body);
        if (!name || !date || !time) {
            res.status(400)
        }
        res.status(201).send({ name, date })
    }
    catch (error) {
        console.error(error)
        res.status(500)
    }
}

async function deleteAppointment(req, res) {
    try {
        const ID = req.params.id
        await schema.findOneAndDelete(ID);
        res.status(201).send('deleted!')
    }
    catch (error) {
        console.error(error)
        res.status(500)
    }
}

async function getAllAppointments(req, res) {
    try {
        const list = await schema.find();
        res.status(200).send(list);

    }
    catch (error) {
        console.error(error)
        res.status(500);
    }
}


module.exports = { getAppointment, postAppointment, deleteAppointment, getAllAppointments }