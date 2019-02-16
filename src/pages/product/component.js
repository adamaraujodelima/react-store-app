import React, { Component } from 'react';
import axios from 'axios';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

export default class ProductComponet extends Component {
    state = {
        product_info: []
    }

    componentDidMount() {
        axios.get('http://localhost/api/products/info/2', {
            headers: {
                Authorization: sessionStorage.getItem('myToken')
            }
        })
            .then(res => {
                const product_info = res.data;
                this.setState({ product_info });
            })
    }
    
    render(){
        return(
            <div className="product-page-details" style={{ marginTop: 30 }}>
                <div class="row">
                    <div class="medium-6 columns">
                        <img className="thumbnail" src={`http://localhost/storage/${this.state.product_info.imagem}`} />
                    </div>
                    <div class="medium-6 large-5 columns">
                        <h3>{this.state.product_info.nome} - R$ { this.state.product_info.preco }</h3>
                        <p>{this.state.product_info.descricao}</p>
                        <label>Size
    <                       select>
                                <option value="husker">Small</option>
                                <option value="starbuck">Medium</option>
                                <option value="hotdog">Large</option>
                                <option value="apollo">Yeti</option>
                            </select>
                        </label>
                        <div class="row">
                            <div class="small-3 columns">
                                <label for="middle-label" class="middle">Quantity</label>
                            </div>
                            <div class="small-9 columns">
                                <input type="text" id="middle-label" placeholder="One fish two fish" />
                                <Input />
                            </div>
                        </div>
                        <a href="#" class="button large expanded">Buy Now</a>
                        <Button>COMPRAR</Button>
                        <div class="small secondary expanded button-group">
                            <a class="button">Facebook</a>
                            <a class="button">Twitter</a>
                            <a class="button">Yo</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}