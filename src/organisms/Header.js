import React, { Component } from 'react';
import SearchForm  from '../molecules/SearchForm';
import MenuTopBar  from '../molecules/MenuTopBar';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="top-bar">
                    <div className="top-bar-left">
                        <ul className="menu">
                            <li className="menu-text">Atendimento:</li>
                            <li><Link to="/">(XX) X XXXX-XXXX</Link></li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                        <MenuTopBar />
                    </div>
                </div>
                <div className="row" style={{ marginTop: 30 }}>
                    <div className="medium-4 columns">
                        <Link to="/">
                            <img src="https://placehold.it/450x183&amp;text=LOGO" alt="company logo" />
                        </Link>
                    </div>
                    <div className="medium-8 columns">
                        <SearchForm />
                    </div>
                </div>
            </header>
        )
    }
}