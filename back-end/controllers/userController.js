const connection = require("../db");

const signup = (req, res) => {
  console.log("SIGNUP: ");
  const { name, userName, email, password } = req.body;
  const queryCommand = `INSERT INTO users(name,userName, email, password)
    VALUES("${req.body.name}",${req.body.userName}","${req.body.email}","${req.body.password}")`;
  connection.query(queryCommand, (err, result) => {
    if (err) throw err;
    // result are the data returned by mysql server
    console.log("RESULT: ", result);

    //we should have a condition that send a respons
    //  that said true when we have a user than signingup else
    // we should have a fakse response

    res.send(true);
  });
};

const login = (req, res) => {
  console.log("LOGIN: ");
  const { userName, password } = req.body;
  const queryCommand = `SELECT * FROM users WHERE  
  (userName='${req.body.userName}' AND password="${req.body.password}")`;
  connection.query(queryCommand, (err, result) => {
    if (err) throw err;
    // result are the data returned by mysql server
    console.log("RESULT: ", result);
    if ((result.length == 0)) {
      // array.length
      res.send(false);
    } else {
      res.send(true);
    }
  });
};

module.exports = {
  signup,
  login,
};
