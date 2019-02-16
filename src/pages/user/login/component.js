import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { isLogged: sessionStorage.getItem('myToken') };
    }
    render() {
        const isLogged = this.state.isLogged;
        if(isLogged) {
            return <Redirect to="/account" />
        }
        return (
            <div className="row">
                <div className="columns large-12">LOGIN</div>
            </div>
        )
    }
}