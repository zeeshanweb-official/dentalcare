import React, { useState } from 'react'
import "../styles/styles.css"

export default function Header() {
    const [links, setLinks] = useState([
        {
            link: "www.facebook.com",
            icon: "fa-facebook"
        },
        {
            link: "www.twitter.com",
            icon: "fa-twitter"
        },
        {
            link: "www.linkedin.com",
            icon: "fa-linkedin"
        },
        {
            link: "www.google.com",
            icon: "fa-google-plus"
        },
    ])
    return (
        <header className="App-header text-light">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-11 mx-auto px-4">
                        <div className=" row">
                            <div className="col-md-2 h-100">
                                <p className="ml-2 mb-0 py-2"
                                >
                                    <span className="fa fa-phone"></span>
                            &nbsp; <a href="tel:1234567890" data-action="call" className="link">+123456789</a></p>
                            </div>
                            <div className="col-md-4 h-100">
                                <p className="mb-0 py-2">
                                    <span className="fa fa-envelope"></span>
                            &nbsp;&nbsp;<a href="mailto:advocate@gmail.com"
                                        data-action="mail" className="link">advocate@gmail.com</a>
                                </p>
                            </div>
                            <div className="col-12 col-md-3 col-sm-12 h-100 text-center text-md-right">
                                <p className="mb-0 py-2">
                                    {links.map((item) => {
                                        return (
                                            <a href={item.link}
                                                key={item.icon}
                                                data-action="mail" className="link">
                                                <i className={"fa mr-3 " + item.icon}></i>
                                            </a>
                                        )
                                    })}
                                </p>
                            </div>
                            <div className="col-12 col-md-3 col-sm-12 h-100 text-center text-md-right">
                                <a href="#" data-action="popup"
                                    data-popup-id="7" className="btn btn-light-link h-100 mr-3 px-4">
                                    <span className="moto-widget-button-label">Free Consultation</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </header >
    )
}
