import React, { Component } from 'react';

class Wrapper extends Component {
    render () {
        const {children} = this.props;

        return (
            <ul>
                {children}
            </ul>
        );
    }
}

export default Wrapper;