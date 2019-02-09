import React, { Component } from 'react';
import ProductGridHome from '../../molecules/ProductGridHome';

export default class HomeComponent extends Component {
    render() {
        return (
            <div className="main">
                <ProductGridHome></ProductGridHome>
            </div>
        )
    }
}