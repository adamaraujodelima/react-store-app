import React, { Component } from 'react';
import Cart from '../../../organisms/Cart';
import Account from '../../../organisms/Account';
import Button from '../../../atoms/Button';
import { Redirect } from 'react-router-dom';

export default class CheckoutComponent extends Component {
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
            <div className="row" style={{ marginTop: 30 }}>
                <div className="row columns large-12">
                    <div className="columns large-6">
                        <h5>Informações do cliente</h5>
                        <div className="callout primary">
                            <Account></Account>
                        </div>
                    </div>
                    <div className="columns large-6">
                        <h5>Meu carrinho</h5>
                        <div className="callout primary">
                            <Cart></Cart>
                        </div>
                    </div>
                    <div className="columns large-6">
                        <h5>Forma de entrega</h5>
                        <div className="callout primary">
                            <fieldset className="fieldset">
                                <legend>Selecione</legend>
                                <input id="checkbox12" type="radio" name="shipping_method" value="Retirada na loja R$ 0,00" /><label htmlFor="checkbox12">Retirada na loja R$ 0,00</label>
                                <input id="checkbox22" type="radio" name="shipping_method" value="SEDEX R$ 23,50" /><label htmlFor="checkbox22">SEDEX R$ 23,50</label>
                                <input id="checkbox23" type="radio" name="shipping_method" value="PAC R$ 15,50" /><label htmlFor="checkbox23">PAC R$ 15,50</label>
                                <input id="checkbox32" type="radio" name="shipping_method" value="Transportadora R$ 16,50" /><label htmlFor="checkbox32">Transportadora R$ 16,50</label>
                            </fieldset>
                        </div>
                    </div>
                    <div className="columns large-6">
                        <h5>Forma de pagamento</h5>
                        <div className="callout primary">
                            <fieldset className="fieldset">
                                <legend>Selecione</legend>
                                <input id="checkbox13" type="radio"  name = "payment_method" value="Boleto bancário" /><label htmlFor="checkbox13">Boleto bancário</label>
                                <input id="checkbox123" type="radio" name = "payment_method" value="Cartão de crédito" /><label htmlFor="checkbox123">Cartão de crédito</label>
                                <input id="checkbox323" type="radio" name = "payment_method" value="Transferência bancária" /><label htmlFor="checkbox323">Transferência bancária</label>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: 30 }}>
                    <div className="columns large-12 text-right">
                        <Button>FINALIZAR PEDIDO</Button>
                    </div>
                </div>
            </div>
        )
    }
}