import React, { Component } from 'react';

export default class Cart extends Component {
    render() {
        return (
            <div className="row" style={{ marginTop: 30 }}>
                <div className="columns large-12">
                    <div className="row columns large-12">
                        <div className="medium-3 columns text-center">Imagem</div>
                        <div className="medium-3 columns text-left">Produto</div>
                        <div className="medium-3 columns text-center">Quantidade</div>
                        <div className="medium-3 columns text-center">Total</div>
                    </div>
                    <div className="row columns large-12">
                        <div className="medium-3 columns text-center">Foto</div>
                        <div className="medium-3 columns text-left">Iphone 8 Plus</div>
                        <div className="medium-3 columns text-center">1</div>
                        <div className="medium-3 columns text-center">R$ 3.500,00</div>
                    </div>
                    <div className="row columns large-12">
                        <div className="medium-3 columns text-center">Foto</div>
                        <div className="medium-3 columns text-left">Iphone 8 Plus</div>
                        <div className="medium-3 columns text-center">1</div>
                        <div className="medium-3 columns text-center">R$ 3.500,00</div>
                    </div>
                    <div className="row columns large-12">
                        <div className="medium-3 columns text-center">Foto</div>
                        <div className="medium-3 columns text-left">Iphone 8 Plus</div>
                        <div className="medium-3 columns text-center">1</div>
                        <div className="medium-3 columns text-center">R$ 3.500,00</div>
                    </div>
                    <div className="row columns large-12">
                        <div className="medium-3 columns text-center">Total</div>
                        <div className="medium-3 columns text-center">&nbsp;</div>
                        <div className="medium-3 columns text-center">5</div>
                        <div className="medium-3 columns text-center">R$ 3.500,00</div>
                    </div>
                </div>
            </div>
        )
    }
}