import React from "react";

function Navbar({ toggleSidebar }) {
    const handleSignIn = (event) => {
        // Prevent default anchor behavior if using #
        event.preventDefault();
        // Logic for sign-in goes here
    };

    return (
        <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="false">
            <div className="container-fluid py-1 px-3">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                        <li className="breadcrumb-item text-sm">
                            <a className="opacity-5 text-white" href="#">Pages</a> {/* Placeholder */}
                        </li>
                        <li className="breadcrumb-item text-sm text-white active" aria-current="page">Dashboard</li>
                    </ol>
                    <h6 className="font-weight-bolder text-white mb-0">Dashboard</h6>
                </nav>
                <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                    <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                        <ul className="navbar-nav justify-content-end">
                            <li className="nav-item d-flex align-items-center">
                                <a href="#" onClick={handleSignIn} className="nav-link text-white font-weight-bold px-0" style={{ cursor: "pointer" }}>
                                    <i class="fa fa-user me-sm-1"></i>
                                    <span className="d-sm-inline d-none">Sign Out</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
