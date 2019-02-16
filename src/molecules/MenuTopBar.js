import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MenuTopBar extends Component{
    constructor(props) {
        super(props);
        this.state = { isLogged: sessionStorage.getItem('myToken') };
    }
    
    render(){
        const isLogged = this.state.isLogged;
        if(isLogged){
            return(
                <ul className="menu">
                    <li><Link to="/checkout/checkout">Finalizar pedido</Link></li>
                    <li><Link to="/checkout/cart">Meu carrinho</Link></li>
                    <li><Link to="/account">Minha conta</Link></li>
                    <li><Link to="/logout">Sair</Link></li>
                </ul>
            );
        }else{
            return (
                <ul className="menu">
                    <li><Link to="/checkout/checkout">Finalizar pedido</Link></li>
                    <li><Link to="/checkout/cart">Meu carrinho</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Nova conta</Link></li>
                </ul>
            );
        }
    }
}