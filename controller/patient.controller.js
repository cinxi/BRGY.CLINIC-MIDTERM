
const models = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const register_view = (req, res) => {
    res.render("patient/register");
};


const profile_view = (req, res) => {
    res.render("patient/profile");
};


const appointment_view = (req, res) => {
    res.render("patient/appointment");
};

const history_view = (req, res) => {
    res.render("patient/history");
};

const logout = (req, res) => {
    res.cookie("token", "", { maxAge: 1000 });
    res.render("login");
};


const registerPatient = async (req, res) => {
    try {
        const { firstName_data, lastName_data, birthdate_data, gender_data, contactNumber_data, Username_data, Password_data, ConfirmPassword_data } = req.body;

        // Check if passwords match
        if (Password_data !== ConfirmPassword_data) {
            return res.render('patient/register', { message: 'Passwords do not match!' });
        }

        // Check if username already exists
        const existingUser = await models.Patient.findOne({ where: { Username: Username_data } });
        if (existingUser) {
            return res.render('patient/register', { message: 'Username is already taken!' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(Password_data, 10);

        // Save new patient to the database
        await models.Patient.create({
            Patient_FirstName: firstName_data,
            Patient_LastName: lastName_data,
            DateofBirth: birthdate_data,
            Patient_Gender: gender_data,
            Patient_ContactNumber: contactNumber_data,
            Username: Username_data,
            Password: hashedPassword,
            Patient_Status: 'active', // Set initial status
            Patient_Address: 'Unknown', // Set default address
        });

        // Redirect to login or profile page
        res.redirect('/login');  // Or any other route you'd like to redirect to

    } catch (error) {
        console.error(error);
        res.render('patient/register', { message: 'An error occurred. Please try again later.' });
    }
};


module.exports = {
    register_view,
    profile_view,
    appointment_view,
    history_view,
    registerPatient,
    logout

};
