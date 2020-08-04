import React from 'react'
import '../sassc/style.css'
export default class Blog extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <div
                    className="mainContent main-inner"
                >
                    blog
                </div>
                <div>
                    <div
                        style={{
                            width: "38.6vmin",
                            height: "36.7vmin",
                            backgroundColor: "white",
                            padding: "4.8vmin 2em",
                            fontSize: "4vmin",
                            color: "#3d3d3d",
                            fontWeight: "700",
                            textAlign: "center",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: 2
                        }}
                    >
                        go<span
                            style={{
                                color: '#c5a47e '
                            }}
                        >.</span>arch
                    </div>
                    <div className="list"
                        style={{
                            position: "absolute",
                            top: 0,
                            right: "25px",
                            zIndex: 2,
                            paddingTop: "40px"
                        }}
                    >
                        <ul>
                            <li>home</li>
                            <li>about us</li>
                            <li>projects</li>
                            <li 
                                style={{
                                    color: "#b99770"
                                }}
                            >blog</li>
                            <li
                                style={{
                                    paddingRight: 0
                                }} 
                            >contacts</li>
                        </ul>
                    </div>
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            zIndex: 1,
                            width: "100%"
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                padding: "0 25px"
                            }}
                        >
                            <div className="col-xs-4">

                            </div>
                            <div className="col-xs-4">

                            </div>
                            <div className="col-xs-4">

                            </div>
                            <div className="col-xs-4">

                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}