// cart
const db = require("../config");
const { hash, compare, hashSync } = require("bcrypt");
const { createToken } = require("../middleware/AuthenticateUser");

class Cart {

fetchCarts(req, res) {
  const query = `
  SELECT courseID, courseName, coursePurpose, courseDesc, discountPrice, coursePrice, courseImage
  FROM Cart;
  `;

  db.query(query, (err, results) => {
    if (err) throw err;
    res.json({
      status: res.statusCode,
      results
    });
  });
}


async addToCart(req, res) {
  const data = req.body;
  const query = `
  INSERT INTO Cart
  SET ?;
  `;

  db.query(query, [data], (err) => {
    if (err) throw err;
    res.json({
      status: res.statusCode,
      msg: "A Course Has Been Added To Cart.",
    });
  });
}



deleteFromCart(req, res) {
  const query = `
  DELETE FROM Cart
  WHERE courseID = ${req.params.id};
  `;

  db.query(query, (err) => {
    if (err) throw err;
    res.json({
      status: res.statusCode,
      msg: "A Course Has Been Deleted From Cart.",
    });
  });
}
}


module.exports = Cart;