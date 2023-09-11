const Users = require("./users");
const Appointments = require("./appointments");
const Courses = require("./courses");
const Cart = require("./cart");


// exporting file


module.exports = {
  users: new Users(),
  appointments: new Appointments(),
  courses: new Courses(),
  cart: new Cart()
};