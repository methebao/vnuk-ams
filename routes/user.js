const mongoose = require("mongoose");

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const validateLoginInput = require("../validation/login");
const validateRegisterInput = require("../validation/register");
const User = mongoose.model("user");
const UserRole = mongoose.model("userRole");

const createNewUser = async ({ fullName, email, username, password }) => {
  const studentUserRole = await UserRole.findOne({ name: "student" });

  return new User({
    _id: new mongoose.Types.ObjectId(),
    fullName,
    email,
    username,
    password,
    isActive: true,
    userRole: studentUserRole._id
  });
};

router.post("/register", async function(req, res) {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  let user = await User.findOne({
    email: req.body.email
  });
  if (user) {
    return res.status(400).json({
      message: "Email already exists"
    });
  } else {
    const newUser = await createNewUser(req.body);
    let salt = await bcrypt.genSalt(10);
    if (salt) {
      let hash = await bcrypt.hash(newUser.password, salt);
      if (hash) {
        newUser.password = hash;
        let user = await newUser.save();
        res.json(user);
      }
    }
  }
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      errors.message = "User not found";
      return res.status(404).json(errors);
    }
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {
          _id: user._id.toString(),
          username: user.username,
          email: user.email
        };
        jwt.sign(
          payload,
          "secret",
          {
            expiresIn: 3600
          },
          (err, token) => {
            if (err) console.error("There is some error in token", err);
            else {
              res.json({
                success: true,
                token: `Bearer ${token}`
              });
            }
          }
        );
      } else {
        errors.message = "Incorrect Password";
        return res.status(400).json(errors);
      }
    });
  });
});

router.get(
  "/me",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    return res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

router.get("/auth", passport.authenticate("google", { session: false }));
router.get(
  "/auth/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "/login"
  }),
  function(req, res) {
    let { accessToken, googleId } = req.user;
    req.session.access_token = accessToken;

    return res.json({
      id: req.user.id,
      googleId: req.user.googleId,
      name: req.user.fullName,
      email: req.user.email
    });
  }
);
module.exports = router;
