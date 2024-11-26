
const models = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


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




module.exports = {
    appointment_view,
    history_view,
    logout

};
