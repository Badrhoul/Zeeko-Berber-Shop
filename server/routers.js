const express = require('express');
const router = express.Router();
const   { getAppointment, postAppointment, deleteAppointment } = require("./controller.js")

router.get('/appointments',getAppointment);

router.post('/appointments',postAppointment);

router.delete('/appointments/:id',deleteAppointment);

module.exports = router;