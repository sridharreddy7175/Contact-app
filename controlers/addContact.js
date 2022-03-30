const db = require("../models/addContact");

exports.createcontact = async (req, res) => {
    try {
        let { name, phone, contactEmail, userEmail } = req.body;
        // add
        let newUser = new db.Contact({
            name,
            phone,
            contactEmail,
            userEmail

        });
        newUser = await newUser.save();
        res.status(200).json({
            msg: "Add Contact is created",
            status: true,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ errors: [{ msg: error.message, status: false }] });
    }
};

exports.contactlist = (req, res) => {
    // console.log("req", req)
    var uEmail = req.body.userEmail
    // console.log("email", uEmail)

    db.Contact.find({ userEmail: uEmail })
        .then((users) => {
            // console.log("user", users)
            res.status(200).send(users);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};


