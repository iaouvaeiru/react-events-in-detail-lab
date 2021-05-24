import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    
    createCoordinates = (event) => {
        const xCoord = event.clientX
        const yCoord = event.clientY
        const coordArr = [xCoord, yCoord]
        this.props.onReceiveCoordinates(coordArr)
    }
    render() {
        return (
            <div>
                <button onClick={this.createCoordinates}>Log Coordinates</button>
            </div>
        )
    }
}
