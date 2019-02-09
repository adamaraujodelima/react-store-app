import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class ProductGridHome extends Component {
    render() {
        return (
            <div className="productsGrid col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="row column text-center">
                    <h2>Produtos em Destaque</h2>
                    <hr />
                </div>
                <div className="row small-up-2 large-up-4">
                    <div className="column">
                        <Link to="/product-details">
                            <img className="thumbnail" src="https://placehold.it/300x400" />
                        </Link>
                        <h5>Nulla At Nulla Justo, Eget</h5>
                        <p>$400</p>
                        <Link to="/product-details" className="button expanded">Buy</Link>
                        
                    </div>
                    <div className="column">
                        <img className="thumbnail" src="https://placehold.it/300x400" />
                        <h5>Nulla At Nulla Justo, Eget</h5>
                        <p>$400</p>
                        <Link to="#" className="button expanded">Buy</Link>
                    </div>
                    <div className="column">
                        <img className="thumbnail" src="https://placehold.it/300x400" />
                        <h5>Nulla At Nulla Justo, Eget</h5>
                        <p>$400</p>
                        <Link to="#" className="button expanded">Buy</Link>
                    </div>
                    <div className="column">
                        <img className="thumbnail" src="https://placehold.it/300x400" />
                        <h5>Nulla At Nulla Justo, Eget</h5>
                        <p>$400</p>
                        <Link to="#" className="button expanded">Buy</Link>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}