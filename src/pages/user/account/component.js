import React, { Component } from 'react';
import Account from '../../../organisms/Account';
import Button from '../../../atoms/Button';
import { Redirect } from 'react-router-dom';

export default class AccountComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { isLogged: sessionStorage.getItem('myToken') };
    }
    render() {
        const isLogged = this.state.isLogged;
        if (isLogged == null) {
            return <Redirect to="/login" />
        }
        return (
            <div className="row">
                <div className="row columns large-12">
                    <div className="columns large-12">
                        <Account></Account>
                    </div>
                </div>
                <div className="row" style={{ marginTop: 30 }}>
                    <div className="columns large-12 text-right">
                        <Button>CONTINUAR</Button>
                    </div>
                </div>
            </div>
        )
    }
}