import { Component } from "react";
import Cart from "./cart";

interface Item {
  id: number;
  name: string;
  price: number;
}

export default class Items extends Component {
  state = {
    itemList: [
      { id: 1, name: "TSHIRT", price: 500 },
      { id: 2, name: "jeans", price: 800 },
      { id: 3, name: "shoes", price: 1000 },
      { id: 4, name: "jacket", price: 2000 },
      {id: 5, name: "socks", price: 200 },
    ],
    cartItems: [] as { name: string; price: number }[],
  };

  addToCart = (item: Item) => {
    this.setState({ cartItems: [...this.state.cartItems, { name: item.name, price: item.price }] });
  };

  render() {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h3>Items List</h3>
        <table border={1} cellPadding={10}>
          <thead>
            <tr>
              <th>SL NO.</th>
              <th>ITEM NAME</th>
              <th>Item Price(per item)</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {this.state.itemList.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button onClick={() => this.addToCart(item)} > ADD CART </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Cart cartItems={this.state.cartItems} />
      </div>
    );
  }
}
