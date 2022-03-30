const db = require("../models/user");
var bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  try {
    let { email, password, secret } = req.body;
    const salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, salt);
    // register
    let newUser = new db.User({
      email,
      password: hashedPassword,
      secret,
    });
    newUser = await newUser.save();
    res.status(200).json({
      msg: "Registration is Success",
      status: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: [{ msg: error.message, status: false }] });
  }
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;


  db.User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        msg: "USER email does not exists",
      });
    }


    var passwordIsValid = bcrypt.compareSync(password, user.password);
    console.log("password", passwordIsValid);
    if (!passwordIsValid)
      return res.status(401).json({
        msg: "Password is wrong",
      });

    if (user.email && user.password) {
      return res.status(200).json({
        msg: "success",
        details: user,
      });
    }
  });
};
exports.forgotpassword = async (req, res) => {
  console.log("hello");
  const email = req.body.email;
  const secret = req.body.secret;
  db.User.findOne({ email }, (err, user) => {
    // console.log("user", user);
    if (user.email && user.secret == secret) {
      return res.status(200).json({
        msg: "success",
        email: user.email,
        id: user._id,
      });
    }
  });
};

exports.changepassword = async (req, res) => {
  var userEmail = req.body.id;

  const salt = await bcrypt.genSalt(10);
  let password = await bcrypt.hash(req.body.password, salt);

  db.User.findOneAndUpdate(
    userEmail,
    {
      $set: {
        password,
      },
    },
    { new: true }
  )
    .then((post) => {
      res.status(200).json({
        msg: "Successfully updated password",
        status: true,
        details: post
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
