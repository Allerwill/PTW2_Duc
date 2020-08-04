import React from 'react';
import '../App.scss';
// import "../Process/About"
import '../sassc/about.scss';
import RenderMap from '../Process/RenderMap';

export default class About extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <RenderMap />
        )
    }
}