import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class ProductGridHome extends Component {
    
    state = {
        products: []
    }
    
    componentDidMount() {
        axios.get('http://localhost/api/products/all', {
            headers: {
                Authorization: sessionStorage.getItem('myToken')
            }
        })
            .then(res => {
                const products = res.data;
                this.setState({ products });
            })
    }

    render() {
        return (
            <div className="productsGrid col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="row column text-center">
                    <h2>Produtos em Destaque</h2>
                    <hr />
                </div>
                <div className="row small-up-2 large-up-4">
                    {this.state.products.map(product => 
                        <div className="column image">
                            <Link to={`/product-details/${product.id}`}>
                                <img className="thumbnail" src={`http://localhost/storage/${product.imagem}`} />
                            </Link>
                            <h5>{ product.nome }</h5>
                            <p>R$ { product.preco }</p>
                            <Link to={`/product-details/${product.id}`} className="button expanded">Comprar</Link>
                        </div>
                    )}                    
                </div>
                <hr />
            </div>
        )
    }
}