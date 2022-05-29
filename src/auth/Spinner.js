import PropTypes from 'prop-types'
import React, { Component } from 'react';
import loading from "../Components/images/loading.gif"

export class Spinner extends Component {
    static propTypes = {}

    render() {
        return (
            <img src={loading} alt="loading" />
        )
    }
}

export default Spinner