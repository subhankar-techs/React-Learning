import {} from 'react';
import { useCart } from './Items';

const Cart = () => {
  const { cart } = useCart();

  return (
    <table border={1} cellPadding={5}>
      <thead>
        <tr>
          <th>ITEM NAME</th>
          <th>QUANTITY ORDER</th>
          <th>TOTAL PRICE</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.quantity * item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Cart;