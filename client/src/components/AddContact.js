import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactList from "./ContactList";
import { connect } from "react-redux";


const AddContact = (props) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [contacts, setContacts] = useState([]);

    const getContacts = async () => {
        // try {
        //     var resContacts = await fetch("http://localhost:8000/api/contactlist");
        //     var response = await resContacts.json();
        //     // console.log("response123", response);
        //     setContacts(response);
        // } catch (err) {
        //     console.log(err);
        // }
        var body = {
            userEmail: props?.details?.user?.details?.email,


        };
        // console.log("body", body);

        axios
            .post("http://localhost:8000/api/contactlist", body)

            .then((res) => {
                // setContacts(contacts);
                setContacts(res.data);

            })
            .catch((err) => {
                // console.log("err", err.response);
                alert("Please enter the all details");
            });
    };
    useEffect(() => {
        getContacts();
    }, [contacts]);

    const submit = (e) => {
        e.preventDefault();
        var body = {
            name: name,
            phone: phone,
            contactEmail: email,
            userEmail: props?.details?.user?.details?.email,


        };
        // console.log("body", body);

        axios
            .post("http://localhost:8000/api/createcontact", body)

            .then((res) => {
                // setContacts(contacts);
            })
            .catch((err) => {
                console.log("err", err.response);
                alert("Please enter the all details");
            });
        setName("")
        setEmail("")
        setPhone("")
    };
    // console.log("gggggggggg", props?.details?.user?.details?.email)

    return (
        <div className="container">
            <div>
                <div className="text-center mb-2 mt-2">
                    <h3 className="contacth3">Contact Form and Contact List Page </h3>
                </div>

                <div className="text-center mb-2 mt-5">
                    <h3 className="contacth3">Add Contacts</h3>
                </div>

                <div style={{ display: "block", textAlign: "center" }}>
                    <label id="email">Name
                    </label>
                    <input
                        name={name}
                        type="text"
                        value={name}
                        className="mb-3 w-50 p-2 mt-2 ml-5"
                        onChange={(e) => setName(e.target.value)}
                    />

                    <br />
                    <label id="email">Ph No</label>
                    <input
                        name={phone}
                        type="number"
                        value={phone}
                        className="mb-3 w-50 p-2 mt-2 ml-5"
                        onChange={(e) => setPhone(e.target.value)}
                    />

                    <br />
                    <label id="email">Email</label>
                    <input
                        name={email}
                        type="email"
                        value={email}
                        className="mb-3 w-50 p-2 mt-2 ml-5"
                        onChange={(e) => setEmail(e.target.value)}


                    />

                    <br />

                    <button
                        onClick={submit}
                        className="mb-3 w-25 p-2 mt-2 btn btn-primary ml-5"
                    >
                        Save
                    </button>

                    <br />
                </div>
                <ContactList contacts={contacts} />
            </div>
        </div>
    );
};

export default connect(
    (state) => ({
        details: state.user,
    }),

    {}
)(AddContact);
