import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SigninUser } from "../redux/modules/signin/signin_actions";
import Swal from "sweetalert2";

const Signin = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    // console.log(props?.details?.error, "Msg")

    useEffect(() => {
        if (props?.details?.user?.msg === "success") {
            navigate("/addcontact");
        }
        if (props?.details?.user?.msg === "success") {
            navigate("/addcontact");
        }
        if (props?.details?.error?.msg === "Password is wrong") {
            Swal.fire("Please enter the correct password");
        }
        // if (props?.details?.error?.msg === "USER email does not exists") {
        //     Swal.fire("User email does not exists");
        // }
    }, [props?.details?.user?.msg, props?.details?.error?.msg]);

    const submit = async (e) => {
        e.preventDefault();
        var body = {
            email: email,
            password: password,
        };
        // console.log("body", body);

        await props.SigninUser(body);
        setEmail("");
        setPassword("");
    };

    return (
        <div className="bg-signin">
            <div className="container signin1 mb-5">
                <div>
                    <div className="text-center mb-5">
                        <h3>Signin</h3>
                        <span>
                            Don't  Already have an account?{" "}
                            <Link id="signup" to="/signup">
                                Signup
                            </Link>
                        </span>
                    </div>

                    <div>
                        <label for="email">
                            <b>Email</b>
                        </label>

                        <input
                            name={email}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />

                        <br />
                        <label for="psw">
                            <b>Password</b>
                        </label>

                        <input
                            name={password}
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />
                        <br />


                        <p style={{ textAlign: "right" }} className="pb-2">

                            <Link id="signup" to="/account/password/reset">
                                Forgot Password
                            </Link>
                        </p>

                        <button type="submit" onClick={submit} className="btn mt-2">
                            Signin
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(
    (state) => ({
        details: state.user,
    }),

    { SigninUser }
)(Signin);
