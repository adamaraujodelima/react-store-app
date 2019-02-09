import React, { Component } from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

export default class MainTemplate extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                { this.props.children }
                <Footer />
            </div>
        )
    }
}