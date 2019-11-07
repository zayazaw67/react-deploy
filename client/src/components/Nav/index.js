import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                Add Student
      </Link>

            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/studentslist"
                            className={
                                window.location.pathname === "/studentslist" || window.location.pathname === "/about"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Students List
            </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
