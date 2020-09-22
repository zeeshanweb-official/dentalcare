import React, { useState } from 'react'
import HeroContent from "./Hero-content"
export default function Hero() {
    const [content, setContent] = useState([
        {
            image: "/mt-demo/83600/83629/mt-content/uploads/2019/07/mt-1855-icon01.png",
            title: "We Have Best Attorneys Team",
            text: "With our legal principles being our first and foremost value, we always try to diversify the range of cases..."
        },
        {
            image: "/mt-demo/83600/83629/mt-content/uploads/2019/07/mt-1855-icon02.png",
            title: "Tax & Business Law",
            text: "On par with our passion for justice and excellence, the third work ethic which we stand by is the fair pricing."
        },
        {
            image: "/mt-demo/83600/83629/mt-content/uploads/2019/07/mt-1855-icon03.png",
            title: "Review Your Case Documents",
            text: "While the yearly number of cases which we take totals to an insurmountable number!"
        }
    ])
    return (
        // <div className="container">
        //     <div className="header-variant-container hero-container text-xs-center">
        //         <div className="hero-content">
        //             <h1 className="hero-heading-large hero-heading-large--hero text-xs-center">Level up your oral wellness.</h1>
        //             <h2 className="hero-heading-small hero-heading-small--hero text-xs-center mt-20 mb-30">Find a new dentist that perfectly matches your needs, is nearby, and ready to deliver a great experience.</h2>
        //             <div className="address-container mr-0 ml-0">
        //                 <div className="address-input-unit address-input-unit--no-button">
        //                     <i className="fa fa-map-marker" aria-hidden="true"></i>
        //                     <input type="text" className="form-control input-lg sensitive-data ng-pristine ng-valid pac-target-input" data-ng-className="{'has-error': hasErrors()}" data-ng-disabled="waitingGeolocation" id="js-location-autocomplete" data-ng-model="location.formattedAddress" placeholder="Enter your address" aria-label="Enter your address" autocomplete="off" />
        //                     <a href="" className="btn btn-blue btn-pill btn-md start-quiz-btn ng-isolate-scope" data-ng-click-async="next('search-bar', 'start-the-quiz', null, pageName)">
        //                         Find a dentist
        //           </a>
        //                 </div>
        //                 <div className="mt-10 alert alert-danger ng-hide" data-ng-show="hasErrors()">
        //                     <span data-ng-show="errors.required &amp;&amp; !location.formattedAddress" className="ng-hide">Please enter your address or postal code.</span>
        //                     <span data-ng-show="errors.locality" className="ng-hide">Please enter a more precise location.</span>
        //                     <span data-ng-show="errors.country" className="ng-hide">Please enter a location in the United States or Canada.</span>
        //                     <span data-ng-show="errors.geocoding" className="ng-hide">Couldn't find the location you specified.</span>
        //                 </div>
        //             </div>
        //         </div>
        //         <img className="hero-images hero-person visible-xs" src="https://www.opencare.com/images/home/hero-person-mobile.png" alt="" role="presentation" />
        //     </div>
        //     <img className="hero-images blobs hidden-xs" src="https://www.opencare.com/images/home/blobs.png" alt="" role="presentation" />
        //     <img className="hero-images blobs visible-xs" src="https://www.opencare.com/images/home/blobs-mobile.png" alt="" role="presentation" />
        //     <img className="hero-images hero-person hidden-xs" src="https://www.opencare.com/images/home/hero-person.png" alt="" role="presentation" />
        // </div>
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
