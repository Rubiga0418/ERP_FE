import React from "react";
import { Link } from 'react-router-dom';

function Navbar({ toggleSidebar }) {
    const handleSignIn = (event) => {
        event.preventDefault();
        // Logic for sign-in goes here
    };

    return (
        <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="false">
            <div className="container-fluid py-1 px-3">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                        <li className="breadcrumb-item text-sm">
                            <Link className="opacity-5 text-white" to="/master">Master</Link>
                        </li>
                        <li className="breadcrumb-item text-sm text-white active" aria-current="page">Dashboard</li>
                    </ol>
                </nav>
                <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                    <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                        <div className="input-group">
                            <span className="input-group-text text-body">
                                <i className="fas fa-search" aria-hidden="true"></i>
                            </span>
                            <input type="text" className="form-control" placeholder="Type here..." />
                        </div>
                    </div>
                    <ul className="navbar-nav justify-content-end">
                        <li className="nav-item d-flex align-items-center">
                            <a onClick={handleSignIn} className="nav-link text-white font-weight-bold px-0" aria-label="Sign In">
                                <i className="fa fa-user me-sm-1"></i>
                                <span className="d-sm-inline d-none ml-4">Sign In</span>
                            </a>
                        </li>
                        {/* Toggler for Sidebar in Mobile View */}
                        <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                            <a onClick={toggleSidebar} className="nav-link text-white p-0" aria-label="Toggle Sidebar" style={{ cursor: "pointer" }}>
                                <div className="sidenav-toggler-inner">
                                    <i className="sidenav-toggler-line bg-white"></i>
                                    <i className="sidenav-toggler-line bg-white"></i>
                                    <i className="sidenav-toggler-line bg-white"></i>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
