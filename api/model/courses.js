const db = require("../config");
const { hash, compare, hashSync } = require("bcrypt");
const { createToken } = require("../middleware/AuthenticateUser");

class Courses {
  fetchCourses(req, res) {
  const query = `
  SELECT courseID, courseName, coursePurpose, courseDesc, discountPrice, coursePrice, courseImage
  FROM Courses;
  `;

  db.query(query, (err, results) => {
    if (err) throw err;
    res.json({
      status: res.statusCode,
      results
    });
  });
}


fetchCourse(req, res) {
  const query = `
  SELECT courseID, courseName, coursePurpose, courseDesc, discountPrice, coursePrice, courseImage
  FROM Courses
  WHERE courseID = ${req.params.id};
  `;

  db.query(query, (err, result) => {
    if (err) throw err;
    res.json({
      status: res.statusCode,
      result
    });
  });
}


async addCourse(req, res) {
  const data = req.body;
  const query = `
  INSERT INTO Courses
  SET ?;
  `;

  db.query(query, [data], (err) => {
    if (err) throw err;
    res.json({
      status: res.statusCode,
      msg: "A Course Has Been Added.",
    });
  });
}


updateCourse(req, res) {
  const data = req.body;
  const query = `
  UPDATE Courses
  SET ?
  WHERE courseID = ?;
  `;

  db.query(query, [data, req.params.id], (err) => {
    if (err) throw err;
    res.json({
      status: res.statusCode,
      msg: "A Course Has Been Updated.",
    });
  });
}


deleteCourse(req, res) {
  const query = `
  DELETE FROM Courses
  WHERE courseID = ${req.params.id};
  `;

  db.query(query, (err) => {
    if (err) throw err;
    res.json({
      status: res.statusCode,
      msg: "A Course Has Been Deleted.",
    });
  });
}


sortAlphabetically(req, res) {
  const query = `
      SELECT courseID, courseName, coursePurpose, courseDesc, discountPrice, coursePrice, courseImage
      FROM Courses
      ORDER BY courseName;
      `;

  db.query(query, (err, results) => {
    if (err) throw err;
    res.json({
      status: res.statusCode,
      results,
      msg: "Courses Are Sorted In Ascending Order By Name.",
    });
  });
}


sortPriceLowToHigh(req, res) {
  const query = `
    SELECT courseID, courseName, coursePurpose, courseDesc, discountPrice, coursePrice, courseImage
    FROM Courses
    ORDER BY discountPrice;
      `;
      
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json({
      status: res.statusCode,
      results,
      msg: "Courses Are Sorted From Lowest To Highest",
    });
  });
}


sortPriceHighToLow(req, res) {
  const query = `
    SELECT courseID, courseName, coursePurpose, courseDesc, discountPrice, coursePrice, courseImage
    FROM Courses
    ORDER BY discountPrice DESC;
      `;

  db.query(query, (err, results) => {
    if (err) throw err;
    res.json({
      status: res.statusCode,
      results,
      msg: "Courses Are Sorted From Highest To Lowest",
    });
  });
}


}

module.exports = Courses;