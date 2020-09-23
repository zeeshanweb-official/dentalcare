import React, { useState } from 'react'
export default function Hero() {

    return (
        <div className="container-fluid overflow-hidden">
            <div className="bg-circles">
                <img width="118%" src="https://www.opencare.com/images/home/blobs.png" alt="background circles" />

            </div>
            <div className="row">
                <div className="col-12 position-absolute">
                    <div className="bg-man">
                        <img width="100%" className="w-sm-100" src="https://www.opencare.com/images/home/hero-person.png" alt="" />
                    </div>
                </div>
                <div className="col-md-1 d-sm-none d-md-block"></div>
                <div className="col-md-5 position-relative mt-4 pt-5">
                    <h1 className="hero-heading-large text-xs-center mb-3">Level up your oral wellness.</h1>
                    <div className="smaller-heading w-75">
                        <h2 class="hero-heading-small text-xs-center mt-20 mb-30">Find a new dentist that perfectly matches your needs, is nearby, and ready to deliver a great experience.</h2>
                    </div>
                </div>
                <div className="col-md-6 text-left">

                </div>
            </div>

        </div>
    )
}
