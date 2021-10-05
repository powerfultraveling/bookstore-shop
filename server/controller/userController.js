const db = require("../models");
const User = db.User;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const secret = "hXSId1g37f"; //secret for jwt

const userController = {
  register: (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;

    bcrypt.hash(password, saltRounds, function (err, hash) {
      if (err) {
        req.json({ ok: 0, message: "something wrong" });
        return;
      }

      User.create({
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: hash,
        role: role,
      })
        .then((user) => {
          const token = jwt.sign({ id: user.id, role: user.role }, secret);
          res.json({
            ok: 1,
            token: token,
          });
        })
        .catch((err) => {
          res.send(err);
          return;
        });
    });
  },

  logIn: (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({
      where: {
        email: email,
      },
    })
      .then((user) => {
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) {
            res.json({
              ok: 0,
              message: err,
            });
            return;
          } else if (!result) {
            res.json({
              ok: 0,
              message: "The password is not correct !",
            });
            return;
          }
          const token = jwt.sign({ id: user.id, role: user.role }, secret);
          res.json({
            ok: 1,
            token: token,
          });
        });
      })
      .catch((err) => {
        res.json({ ok: 0, message: err.toString() });
        return;
      });
  },

  authorize: (req, res) => {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];
    jwt.verify(token, secret, function (err, decoded) {
      if (err) {
        res.json({ ok: 0, message: "bad" });
        return;
      }
      console.log(decoded);
      res.json({ ok: 1, data: { id: decoded.id, role: decoded.role } });
    });
  },
};

module.exports = userController;
