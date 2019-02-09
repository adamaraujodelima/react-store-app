import React, { Component } from 'react';
import Cart from '../../../molecules/Cart';
import Account from '../../../molecules/Account';
import Button from '../../../atoms/Button';

export default class CheckoutComponent extends Component {
    render() {
        return (
            <div className="row">
                <div className="row columns large-12">
                    <div className="columns large-6">
                        <h3>Meus dados</h3>
                        <Account></Account>
                    </div>
                    <div className="columns large-6">
                        <h3>Meu carrinho</h3>
                        <Cart></Cart>
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