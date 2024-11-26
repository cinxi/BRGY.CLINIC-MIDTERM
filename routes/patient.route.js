const express = require("express")
const userController = require("../controller/user.controller.js")
const addPatientController = require("../controller/addPatient.controller.js")
const appointmentController = require("../controller/appointment.controller.js"); 
const patientController = require("../controller/patient.controller.js"); 

const router = express.Router()

router.get("/patient/appointment", patientController.appointment_view); 
router.get("/patient/history", patientController.history_view);
router.get("/patient/logout", patientController.logout);


module.exports = router;