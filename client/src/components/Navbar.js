import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signoutUser } from "../redux/modules/signin/signin_actions";



const Navbar = (props) => {
    // console.log("props", props?.details?.user?.msg)

    const signOut = () => {
        props.signoutUser()
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">
                    <Link className="navbar-brand text-white" to="/">
                        Home
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">


                        {
                            props?.details?.user?.msg === "success"
                                ?
                                <ul className="navbar-nav">

                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/addcontact">
                                            addContact
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/" onClick={() => signOut()}>
                                            SignOut
                                        </Link>
                                    </li>

                                </ul>
                                :

                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/signup">
                                            Signup
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/signin">
                                            Signin
                                        </Link>
                                    </li>
                                </ul>

                        }


                    </div>
                </div>
            </nav>
        </div>
    );
};

export default connect(
    (state) => ({
        details: state.user,
    }),

    { signoutUser }
)(Navbar);
