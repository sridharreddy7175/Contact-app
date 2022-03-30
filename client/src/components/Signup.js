import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Signup = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secret, setSecret] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false)
    let navigate = useNavigate();
    const submit = (e) => {
        e.preventDefault();
        var body = {
            email: email,
            password: password,
            secret: secret,
        };
        console.log("body", body);

        axios
            // .post(`${SERVER_URL}/api/signup`, body)
            .post("http://localhost:8000/api/signup", body)

            .then((res) => {
                // console.log("res", res);

                if (res?.data?.status === true) {
                    // toast.success("Register successfully,please Login!");
                    //   router.push("/");
                    navigate("/signin");
                    setLoading(true)
                }
            })
            .catch((err) => {
                // console.log("err", err.response);
                // alert("Please enter the all details");
                Swal.fire("Please enter the all details");
            });
    };

    const passwordCheck = () => {
        setShowPassword(!showPassword);
    };

    if (loading === true) {
        return <h3>Loading ...............</h3>
    }
    return (
        <div className="bg-signin">
            <div className="container signin1 mb-5">
                <div>
                    <div className="text-center mb-5">
                        <h3>Signup</h3>
                        <span>
                            Already have an account?

                            <Link to="/signin">
                                Signin
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
                            placeholder="Email"
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
                            placeholder="password"
                        />
                        <br />
                        <label for="psw">
                            <b>Secret</b>
                        </label>

                        <input
                            name={secret}
                            type="password"
                            value={secret}
                            onChange={(e) => setSecret(e.target.value)}
                            placeholder="Secret"
                        />
                        <br />




                        <button type="submit" onClick={submit} className="btn mt-2">
                            Signup
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
