import React, { useEffect } from 'react'

export default function HeroContent(props) {
    useEffect(() => {
        console.log(props)
    })
    return (
        <div className="col-md-4">
            <div className="row content no-gutters mx-3 bordertop  py-4 my-3">
                <div className="col-2 col-md-3">
                    <div className="imagecontainer">
                        <img src={'https://template83629.motopreview.com/' + props.item.image} alt="" />
                    </div>
                </div>
                <div className="col-10 col-md-9">
                    <div className={props.index === 1 ? "text text-left text-light w-60" : "text text-left text-light w-75"}>
                        <h3 className="link customlink">{props.item.title}</h3>
                    </div>
                    <div className="para text-left" style={{ width: "94%" }}>
                        <p className="paragraph">
                            {props.item.text}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
