import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Welcome"
        }

    }


    componentWillMount() {
        this.setState(
            {
                text: "3RI"
            }
        )

    } 

    render() {
        return (
            <div>
                <h1>Value of text is: {this.state.text}</h1>

            </div>
        );
    }
}


export default LifeCycle;