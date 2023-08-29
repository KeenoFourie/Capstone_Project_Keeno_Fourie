const db = require("../config");
const { hash, compare, hashSync } = require("bcrypt");
const { createToken } = require("../middleware/AuthenticateUser");

class Appointments {
  fetchAppointments(req, res) {
  const query = `
  SELECT appointID, firstName, lastName, userAge, gender, maritalStatus, cellNumber, emailAdd, appointTime, appointPrice, userWeight, userHeight, userDisability, userInjury, userHealth, whyUs, userID, courseID
  FROM Appointments;
  `;
  
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json({
      status: res.statusCode,
      results
    });
  });
}


fetchAppointment(req, res) {
  const query = `
  SELECT appointID, firstName, lastName, userAge, gender, maritalStatus, cellNumber, emailAdd, appointTime, appointPrice, userWeight, userHeight, userDisability, userInjury, userHealth, whyUs, userID, courseID
  FROM Appointments
  WHERE userID = ${req.params.id};
  `;

  db.query(query, (err, result) => {
    if (err) throw err;
    res.join({
      status: res.statusCode,
      result
    });
  });
}


async addAppointment(req, res) {
  const data = req.body;
  const query = `
  INSERT INTO Appointments
  SET ?;
  `;

  db.query(query, [data], (err) => {
    if (err) throw err;
    let token = createToken(user);
    res.json({
      status: res.statusCode,
      token,
      msg: "An Appointment Has Been Added."
    });
  });
}


updateAppointment(req, res) {
  const data = req.body;
  const query = `
  UPDATE Appointments
  SET ?
  WHERE userID = ?;
  `;

  db.query(query, [data, req.params.id], (err) => {
    if (err) throw err;
    res.json({
      status: res.statusCode,
      msg: "An Appointment Has Been Updated."
    });
  });
}


deleteAppointment(req, res) {
  const query = `
  DELETE FROM Appointments
  WHERE userID = ${req.params.id};
  `;

  db.query(query, (err) => {
    if (err) throw err;
    res.json({
      status: res.statusCode,
      msg: "An Appointment Has Been Deleted."
    });
  });
}
}

module.exports = Appointments;