import {} from 'react';
import Items, { CartProvider } from './Items';
import Cart from './Cart';

const Rules = () => (
  <CartProvider>
    <h1>Shop</h1>
    <Items />
    <h2>Cart</h2>
    <Cart />
  </CartProvider>
);

export default Rules;