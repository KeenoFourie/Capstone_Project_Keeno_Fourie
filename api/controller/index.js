const express = require("express");
const bodyParser = require("body-parser");
const routes = express.Router();

const { users, appointments, courses } = require("../model");

// Users

routes.get("/users", (req, res) => {
  users.fetchUsers(req, res);
});

routes.get("/user/:id", (req, res) => {
  users.fetchUser(req, res);
});

routes.post("/user", bodyParser.json(), (req, res) => {
  users.register(req, res);
});

routes.post("/login" ,bodyParser.json(), (req, res) => {
  users.login(req, res);
});

routes.patch("/user/:id", bodyParser.json(), (req, res) => {
  users.updateUser(req, res);
});

routes.delete("/user/:id", (req, res) => {
  users.deleteUser(req, res);
});

//  Appointments

routes.get("/appointments", (req, res) => {
  appointments.fetchAppointments(req, res);
});

routes.get("/appointment/:id", (req, res) => {
  appointments.fetchAppointments(req, res);
});

routes.post("/appointment", bodyParser.json(), (req, res) => {
  appointments.addAppointments(req, res);
});

routes.patch("/appointment/:id", bodyParser.json(), (req, res) => {
  appointments.updateAppointments(req, res);
});

routes.delete("/appointment/:id", (req, res) => {
  appointments.deleteAppointments(req, res);
});

// Courses

routes.get("/courses", (req, res) => {
  courses.fetchCourses(req, res);
});

routes.get("/course/:id", (req, res) => {
  courses.fetchCourses(req, res);
});

routes.post("/course", bodyParser.json(), (req, res) => {
  courses.addCourses(req, res);
});

routes.patch("/course/:id", bodyParser.json(), (req, res) => {
  courses.updateCourses(req, res);
});

routes.delete("/course/:id", (req, res) => {
  courses.deleteCourses(req, res);
});

// export
module.exports = {express, routes};