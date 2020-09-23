import React, { Component } from 'react'
import "../styles/styles.css"
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid navigation">
                    <div className="row">
                        <div className="col-md-11 mx-auto px-4 py-2">
                            <nav className="navbar navbar-expand-lg navbar-light ">
                                <a className="navbar-brand" href="/">
                                    <img src={"https://www.opencare.com/images/brand/opencare-logo-cross-and-text-charcoal.svg"} alt="logo" />
                                </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-5 mr-auto">
                                        <li className="nav-item active dropdown">
                                            <a className="nav-link dropdown-toggle nav-link link text-uppercase colorPink font-weight-bold" href="#" id="navbarDropdown" role="button" data-hover="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Dentists
        </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a className="dropdown-item" href="#">COVID-19, Guidance</a>
                                                <a className="dropdown-item" href="#">Patient Acquisition</a>
                                                <a className="dropdown-item" href="#">Super Practice</a>
                                                <a className="dropdown-item" href="#">Revenue Cycle Management</a>
                                            </div>
                                        </li>
                                        <li className="nav-item  dropdown ml-3">
                                            <a className="nav-link dropdown-toggle nav-link link text-uppercase font-weight-bold" href="#" id="navbarDropdown" role="button" data-hover="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Company
        </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a className="dropdown-item" href="#">About us</a>
                                                <a className="dropdown-item" href="#">Careers , we,r hiring!</a>
                                                <a className="dropdown-item" href="#">Support</a>
                                            </div>
                                        </li>

                                    </ul>
                                    <ul className="ml-auto navbar-nav">
                                        <li className="nav-item ">
                                            <div className="btn btn-lg btn-login font-weight-bold font14px nav-link px-4 text-light">
                                                <span className="px-2">
                                                    Log In
                                                </span>
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                            </nav>

                        </div>
                    </div>
                </div>





            </div>
        )
    }
}
