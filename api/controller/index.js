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

routes.post("/register", bodyParser.json(), (req, res) => {
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
  appointments.fetchAppointment(req, res);
});

routes.post("/appointment", bodyParser.json(), (req, res) => {
  appointments.addAppointment(req, res);
});

routes.patch("/appointment/:id", bodyParser.json(), (req, res) => {
  appointments.updateAppointment(req, res);
});

routes.delete("/appointment/:id", (req, res) => {
  appointments.deleteAppointment(req, res);
});

// Courses

routes.get("/courses", (req, res) => {
  courses.fetchCourses(req, res);
});

routes.get("/course/:id", (req, res) => {
  courses.fetchCourse(req, res);
});

routes.post("/course", bodyParser.json(), (req, res) => {
  courses.addCourse(req, res);
});

routes.patch("/course/:id", bodyParser.json(), (req, res) => {
  courses.updateCourse(req, res);
});

routes.delete("/course/:id", (req, res) => {
  courses.deleteCourse(req, res);
});

// cart 

routes.get("/carts", (req, res) => {
  courses.fetchCarts(req, res);
});

routes.post("/cart", bodyParser.json(), (req, res) => {
  courses.addToCart(req, res);
});

routes.delete("/cart/:id", (req, res) => {
  courses.deleteFromCart(req, res);
});

// export
module.exports = {express, routes};