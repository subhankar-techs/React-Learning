import { Component } from "react";

interface CartProps {
  cartItems: { name: string; price: number }[];
}

export default class Cart extends Component<CartProps> {
  render() {
    const total = this.props.cartItems.reduce((sum, item) => sum + item.price, 0);
    return (
      <>
        <h3>Cart</h3>
        <table border={1} cellPadding={10}>
          <thead>
            <tr>
              <th>ITEM NAME</th>
              <th>ITEM PRICE</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
            {this.props.cartItems.length === 0 && (
              <tr>
                <td >No items in cart</td>
              </tr>
            )}
          </tbody>
        </table>
        <h4>TOTAL PRICE ADDED: {total}</h4>
      </>
    );
  }
}
