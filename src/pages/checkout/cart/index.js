import React from 'react';
import { Route } from 'react-router-dom';
import CartComponent from './component';

export const router = <Route component={CartComponent} path="/checkout/cart" key="checkout-cart" />