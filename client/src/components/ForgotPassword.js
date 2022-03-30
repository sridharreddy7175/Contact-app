import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { forgetPassword } from "../redux/modules/signin/Forgotpassword/forgotpassword_action";


const ForgotPassword = (props) => {
    const [email, setEmail] = useState("");
    const [secret, setSecret] = useState("");
    let navigate = useNavigate()

    useEffect(() => {

        if (props?.details?.user?.msg === "success") {
            navigate("/account/password/reset/edit");

        }

    }, [props?.details?.user?.msg, props?.details?.error?.msg]);

    const submit = async (e) => {

        e.preventDefault();
        var body = {
            email: email,
            secret: secret,
        };
        // console.log("body", body);


        await props.forgetPassword(body);

    };

    return (
        <div className="container">
            <div>
                <div className="text-center mt-5">
                    <h6>Change Password</h6>
                    <span>
                        Enter your email address below and we'll send you a link to reset
                        your password.
                    </span>
                </div>

                <div style={{ display: "block", textAlign: "center" }}>
                    <input
                        name={email}
                        type="email"
                        value={email}
                        className="mb-3 w-50 p-2 mt-2"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                    <br />
                    <input
                        name={secret}
                        type="email"
                        value={secret}
                        className="mb-3 w-50 p-2 mt-2"
                        onChange={(e) => setSecret(e.target.value)}
                        placeholder="Enter your Secret"
                    />

                    <br />

                    <button onClick={submit} className="mb-3 w-50 p-2 mt-2 ">
                        Reset Password
                    </button>

                    <br />
                </div>
            </div>
        </div>
    );
};
export default connect(
    (state) => ({
        details: state.password,
    }),

    { forgetPassword }
)(ForgotPassword);
