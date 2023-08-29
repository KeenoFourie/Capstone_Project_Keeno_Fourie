const db = require("../config");
const { hash, compare, hashSync } = require("bcrypt");
const { createToken } = require("../middleware/AuthenticateUser");

class Users {
  fetchUsers(req, res) {
  const query = `
  SELECT userID, firstName, lastName, userAge, gender, maritalStatus, cellNumber, emailAdd, userProfile
  FROM Users;
  `;
  
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json({
      status: res.statusCode,
      results
    });
  });
}


fetchUser(req, res) {
  const query = `
  SELECT userID, firstName, lastName, userAge, gender, maritalStatus, cellNumber, emailAdd, userProfile
  FROM Users
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


login(req, res) {
  const { emailAdd, userPassword } = req.body;
  const query = `
  SELECT userID, firstName, lastName, userAge, gender, maritalStatus, cellNumber, emailAdd, userProfile, userPassword
  FROM Users
  WHERE emailAdd = '${emailAdd}';
  `;

  db.query(query, async (err, result) => {
    if (err) throw err;
    if (!result?.length) {
      res.json({
        status: res.statusCode,
        msg: "Please Insert Correct Email Address.."
      });
    } 
    else {
      await compare(userPassword, result[0].userPassword, (compareErr, compareResult) => {
        if (compareErr) throw compareErr;
        const token = createToken({
          emailAdd,
          userPassword,
        });
        if (compareResult) {
          res.json({
            msg: "You Are Logged In",
            token,
            result: result[0]
          });
        } else {
          res.json({
            status: res.statusCode,
            msg: "Please Check Your Password Or Register."
          });
        }
      });
    }
  });
}


async register(req, res) {
  const data = req.body;
  data.userPassword = await hash(data.userPassword, 10);  // 10 is going to add extra random letters to password so it stays encrypted.
  const user = {
    emailAdd: data.emailAdd,
    userPassword: data.userPassword,
  };
  const query = `
  INSERT INTO Users
  SET ?;
  `;

  db.query(query, [data], (err) => {
    if (err) throw err;
    let token = createToken(user);
    res.json({
      status: res.statusCode,
      token,
      msg: "You Are Now Registered.",
    });
  });
}


updateUser(req, res) {
  const data = req.body;
  //encrypt edited password
  if (data.userPassword) {
    data.userPassword = hashSync(data.userPassword, 10);
  }
  const query = `
  UPDATE Users
  SET ?
  WHERE userID = ?;
  `;

  db.query(query, [data, req.params.id], (err) => {
    if (err) throw err;
    res.json({
      status: res.statusCode,
      msg: "The User Has Been Updated.",
    });
  });
}


deleteUser(req, res) {
  const query = `
  DELETE FROM Users
  WHERE userID = ${req.params.id};
  `;

  db.query(query, (err) => {
    if (err) throw err;
    res.json({
      status: res.statusCode,
      msg: "A User Has Been Deleted.",
    });
  });
}
}

module.exports = Users;