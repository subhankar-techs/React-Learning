import { Component } from "react";

export default class Test5 extends Component {

    state: {
        item: string,
        price: number,
        quantity: number,
        info: { item: string, price: number, quantity: number }[]
    } = {
        item: "",
        price: 0,
        quantity: 0,
        info: []
    }

    add = () => {
        this.setState({
            info: [...this.state.info, { item: this.state.item, price: this.state.price, quantity: this.state.quantity }]
        })
    }

    render() {
        return (
            <>
                <label htmlFor="item">Item:</label>
                <input type="text" id="item" name="item" placeholder="Enter Item" value={this.state.item} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ item: e.target.value })} />

                <label htmlFor="price">Price:</label>
                <input type="number" id="price" name="price" placeholder="Enter Price" onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ price: Number(e.target.value) })} />

                <label htmlFor="quantity">Quantity:</label>
                <select name="quantity" id="quantity" value={this.state.quantity} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => this.setState({ quantity: Number(e.target.value) })}>
                    <option value="0">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <button onClick={this.add}>Add</button>

                {
                    this.state.info.length > 0 ? (
                        <table border={1} style={{ marginTop: "20px" }}>
                            <thead>
                                <tr>
                                    <th>Item Name</th>
                                    <th>Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.info.map((value, index) => (
                                        <tr key={index}>
                                            <td>{value.item}</td>
                                            <td>{value.price * value.quantity}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    ) : (
                        <p>No Data Available Yet</p>
                    )
                }
            </>
        )
    }
}