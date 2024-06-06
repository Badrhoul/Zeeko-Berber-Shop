const schema = require("./model")

async function getAppointment(req, res) {
    try {
        const list = await schema.find();
        res.status(200).send(list);

    }
    catch (error) {
        console.error(error)
        res.status(500);
    }
}



async function postAppointment(req, res) {
    try {
        const { name, date} = await schema.create(req.body);
        if (!name || !date){
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



module.exports = { getAppointment, postAppointment, deleteAppointment }