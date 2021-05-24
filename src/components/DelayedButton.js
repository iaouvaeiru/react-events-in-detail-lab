import React, { Component } from 'react'

export default class DelayedButton extends Component {
    timeoutClick = (event) => {
        event.persist()
        setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
    }

    render() {
        return (
            <div>
                <button onClick={this.timeoutClick}>Time Out</button>
            </div>
        )
    }
}

