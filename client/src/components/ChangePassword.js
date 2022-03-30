import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
const ChangePassword = (props) => {
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    // console.log("props", props?.details?.user?.email)
    let navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault();
        let body = {
            email: props?.details?.user?.email,
            id: props?.details?.user?.id,
            password: password,
            newPassword: newPassword,

        };
        // console.log("password", password)
        // console.log("body", body);

        if (password !== newPassword) {
            alert("please enter same password")
        }




        else {
            axios

                .put("http://localhost:8000/api/changepasword", body)

                .then((res) => {
                    // console.log("res", res);
                    if (res?.data?.status === true) {
                        // toast.success("Register successfully,please Login!");
                        //   router.push("/");
                        navigate("/signin");
                    }
                })
                .catch((err) => {
                    // console.log("err", err.response);
                    // alert("Please enter the all details");
                    // Swal.fire("Please enter the all details");
                });
        }



    };

    return (
        <div className="container">
            <div>
                <div className="text-center mt-5">
                    <h6>Reset Password</h6>

                </div>

                <div style={{ display: "block", textAlign: "center" }}>
                    <input
                        name={password}
                        type="password"
                        value={password}
                        className="mb-3 w-50 p-2 mt-2"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="New password"
                    />
                    <br />
                    <input
                        name={newPassword}
                        type="email"
                        value={newPassword}
                        className="mb-3 w-50 p-2 mt-2"
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Confirm  new password"
                    />

                    <br />

                    <button onClick={submit} className="mb-3 w-50 p-2 mt-2 ">
                        Submit
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

    {}
)(ChangePassword);
