const express = require('express');
const router = express.Router();
const   { getAppointment, postAppointment, deleteAppointment, getAllAppointments } = require("./controller.js")

router.get('/appointments/:date',getAppointment);

router.get('/appointments', getAllAppointments)

router.post('/appointments',postAppointment);

router.delete('/appointments/:id',deleteAppointment);



module.exports = router;