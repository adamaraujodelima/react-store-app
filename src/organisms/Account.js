import React, { Component } from 'react';
import Input from '../atoms/Input'

export default class Account extends Component {
    render() {
        return (
            <div className="row" style={{ marginTop: 30 }}>
                <div className="columns medium-6 text-left">
                    <h5>Meus dados</h5>
                    <div className="columns medium-12">
                        <label>Nome completo</label>
                        <Input />
                    </div>
                    <div className="columns medium-12">
                        <label>CPF/CNPJ:</label>
                        <Input />
                    </div>
                    <div className="columns medium-12">
                        <label>Data de nascimento:</label>
                        <Input />
                    </div>
                    <div className="columns medium-12">
                        <label>E-mail:</label>
                        <Input />
                    </div>
                    <div className="columns medium-12">
                        <label>Telefone:</label>
                        <Input />
                    </div>                    
                </div>
                <div className="columns medium-6 text-left">
                    <h5>Endereço</h5>
                    <div className="columns medium-12">
                        <label>CEP:</label>
                        <Input />
                    </div>
                    <div className="columns medium-12">
                        <label>Logradouro:</label>
                        <Input />
                    </div>
                    <div className="columns medium-12">
                        <label>Número:</label>
                        <Input />
                    </div>
                    <div className="columns medium-12">
                        <label>Complemento:</label>
                        <Input />
                    </div>
                    <div className="columns medium-12">
                        <label>Bairro:</label>
                        <Input />
                    </div>
                    <div className="columns medium-12">
                        <label>Cidade:</label>
                        <Input />
                    </div>
                    <div className="columns medium-12">
                        <label>UF:</label>
                        <Input />
                    </div>
                </div>
            </div>
        )
    }
}