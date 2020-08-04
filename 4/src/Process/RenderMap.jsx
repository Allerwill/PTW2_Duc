import React from 'react'

export default class RenderMap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            locations: [
                {
                    id: 1,
                    position: {
                        top: '42%',
                        left: '12.6%'
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
                }
            ],
            tempObj: null
        }
    }

    _onShowInfo = (item) => {
        console.log(item)
        this.setState({ tempObj: item })
    }

    render() {
        return (
            <div>
                <section id="objects" className="objects section">
                    <div className="container">
                        <header className="section-header">
                            <h2 className="section-title">We are <span className="text-primary">worldwide</span></h2>
                        </header>
                        <div className="section-content">
                            <div className="objects">
                                <img alt="" className="img-responsive" src="./img/map.png" />
                                {this.state.locations.map(item => {
                                    return (
                                        <div className="object-label" style={{ left: item.position.left, top: item.position.top }}
                                            onClick={() => this._onShowInfo(item)}
                                        >
                                            {this.state.tempObj ? (this.state.tempObj.id == item.id ?
                                                <div className="object-info">
                                                    <h3 className="object-title">{item.info.name}</h3>
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
                </section>
            </div>
        )
    }
}