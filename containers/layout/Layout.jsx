import React from 'react';
import { Component } from 'react';

export default class Layout extends Component {
    render() {
        return (
            <div>
                <h3>React simple starter</h3>
                {this.props.children}
            </div>
        );
    }
}