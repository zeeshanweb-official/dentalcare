import React, { useState } from 'react'
import "../styles/aboutstyles.css"
export default function About() {
    const [checks, setchecks] = useState([
        "Work With Expert Attorneys",
        "Innovative Legal Adviso",
        "Partner Led - Services",
        "Great Discount On Cases",
        "Revize All Cases Equally",
        "Best Case Strategy"
    ])
    return (
        <div>
            <div className="title text-center">
                <h2 className="atitle">All About Us</h2>
                <div className="divider">
                    <hr />
                </div>
                <div className="row no-gutters">
                    <div className="col-md-8 offset-md-2 px-5">
                        <div className="atext px-4">
                            <p className="para lineheight14 font17px">
                                We value justice, honesty and time. We are always at your service as we
                                are in charge of your defense. Any detail will be noticed and it can be
                                essential for your case. During our work, we gathered a team of devoted
                                experts with rich experience in juridical help.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-5"></div>'
            <div className="row no-gutters">
                <div className="col-md-7 pl-md-5 mt-md-5">
                    <div className="textsection pl-md-4 mt-md-5">
                        <p className="para textdark lineheight14 font15px px-3 pt-md-5">
                            We value justice, honesty and time. We are always at your
                            service as we are in charge of your defense. Any detail will
                            be noticed and it can be essential for your case. During our work,
                            we gathered a team of devoted experts with rich experience in juridical
                            help.
                        </p>
                        <div className="my-5">
                            <div className="no-gutters row">
                                <div className="col-6 px-4">
                                    {checks.map((item, index) => {
                                        return (
                                            index < 3 ?
                                                <div className="d-block w-100">
                                                    <i className="fa fa-check"></i>
                                        &nbsp;
                                                <span className="link textdark pointer">
                                                        {item}
                                                    </span>
                                                </div> : ""
                                        )
                                    })}
                                </div>
                                <div className="col-6 px-4">
                                    {checks.map((item, index) => {
                                        return (
                                            index > 2 ?
                                                <div className="d-block w-100">
                                                    <i className="fa fa-check"></i>
                                        &nbsp;
                                                <span className="link textdark pointer">
                                                        {item}
                                                    </span>
                                                </div> : ""
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="ownertexts">

                            <p>
                                <div className="row">
                                    <div className="col-1">
                                        <i class="fa fa-quote-right ml-3"></i>
                                    </div>
                                    <div className="col-11 col-11 pl-4 pr-5">
                                        <em><span className="para lineheight12 font-Merriweather font20px">Our experience allows us to be confident and stand by our words. We always claim to justice.</span></em>
                                    </div>
                                </div>
                            </p>
                        </div>
                        <div className="no-gutters row">
                            <div className="col-md-6 mt-2 offset-md-3 pt-4">
                                <p className="font-weight-bold">
                                    Founder and CEO of Abdullah Firm
                               </p>
                            </div>
                            <div className="col-md-3">
                                <img src={"https://template83629.motopreview.com/mt-demo/83600/83629/mt-content/uploads/2019/07/mt-1855-text-img.png"} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-5">
                    <div className="imagesection pr-md-5 text-center">
                        <div className="imageborder pr-md-5">
                            <img src={"https://template83629.motopreview.com/mt-demo/83600/83629/mt-content/uploads/2019/07/mt-1855-img01.jpg"} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}