import React from 'react';
import '../App.scss';
// import "../Process/About"
import '../sassc/M10.scss';
import RenderMap from '../Process/RenderMap';

export default class M10 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            locations: [
                {
                    id: 1,
                    position: {
                        top: '42%',
                        left: '12.6%',
                    },
                    info: {
                        code: "+0 595-510-1352",
                        mail: " flatley.don@weissnat.me",
                        addr: "713 Dibbert Bridge",
                        name: "New York"
                    },
                },
                {
                    id: 2,
                    position: {
                        top: '39.1%',
                        left: '25.7%',
                    },
                    info: {
                        code: "+0 595-510-1352",
                        mail: " flatley.don@weissnat.me",
                        addr: "713 Dibbert Bridge",
                        name: "Paris"
                    },
                },
                {
                    id: 3,
                    position: {
                        top: '39.1%',
                        left: '60.7%',
                    },
                    info: {
                        code: "+0 595-510-1352",
                        mail: " flatley.don@weissnat.me",
                        addr: "713 Dibbert Bridge",
                        name: "ASS"
                    },
                }
            ],
            tempObj: null
        }
    }

    _onShowInfo = (item) => {
        if (this.state.tempObj)
            if (this.state.tempObj.id == item.id) {
                console.log("asf")
                this.setState({ tempObj: null })
            } else {
                this.setState({ tempObj: item })
            }
        else {
            this.setState({ tempObj: item })
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div
                        style={{
                            margin: "90px"
                        }}
                    >
                        <h2 className="section-title"
                            style={{
                                textTransform: "uppercase",
                                textAlign: "center"
                            }}
                        >We are <span style={{
                            color: "#c5a47e"
                        }}>worldwide</span></h2>
                    </div>      
                    <div
                        style={{
                            position: "relative"
                        }}
                    >
                        <img src={"./img/map.png"} />
                        {this.state.locations.map(item => {
                            return (
                                <div className="object-label" style={{ left: item.position.left, top: item.position.top }}
                                    onClick={() => this._onShowInfo(item)}
                                >
                                    {this.state.tempObj ? (this.state.tempObj.id === item.id ?

                                        <div
                                            style={{
                                                width: "195px",
                                                position: "absolute",
                                                bottom: "30px",
                                                backgroundColor: "rgba(102, 102, 102,0.5)",
                                                borderRadius: "4px",
                                                padding: "10px",
                                                right: "-94px",
                                            }}
                                        >
                                            <h3>{item.info.name}</h3>
                                            <div className="object-content">
                                                {item.info.code}<br />
                                                {item.info.mail}<br />
                                                {item.info.code.addr}
                                            </div>
                                        </div>
                                        : null) : null}
                                </div>
                            )
                        })}
                    </div>
                
                </div>
            </div>
        )
    }
}