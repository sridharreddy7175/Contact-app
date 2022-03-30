import React, { useState, useEffect } from "react";

const ContactList = (props) => {


    return (
        <div className="mb-5">
            <div className="text-center mb-2 mt-4">
                <h5 className="contacth3">My Contacts </h5>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>

                    {props.contacts.map((c) => {
                        return (
                            <tr key={c._id}>
                                <td>{c.name}</td>
                                <td>{c.phone}</td>
                                <td>{c.contactEmail
                                }</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ContactList;
