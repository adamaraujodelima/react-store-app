import React, { Component } from 'react';
import Input from '../atoms/Input'
import Button from '../atoms/Button'

export default class SearchForm extends Component {
    render() {
        return (
        <div className="row">
            <div className="columns medium-6">
                <div className="columns medium-9">
                <Input />
                </div>
                <div className="columns medium-3">
                <Button>OK</Button>
                </div>
            </div>
        </div>
        )
    }
}