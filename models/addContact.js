var mongoose = require("mongoose");

const addContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    contactEmail: {
        type: String,
    },
    userEmail: {
        type: String,
        required: true,
    },

});

exports.Contact = mongoose.model("Contact", addContactSchema);
