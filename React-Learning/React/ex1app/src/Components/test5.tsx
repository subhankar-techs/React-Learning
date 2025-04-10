import {Component} from "react";

export default class Test5 extends Component {

    state: {
        item: string,
        price: number,
        quantity: number,
        info: {item: string, price: number, quantity: number}[]
    } = {
        item: "",
        price: 0,
        quantity: 0,
        info: []
    }

    add = () => {
        this.setState({
            info: [...this.state.info, {item: this.state.item, price: this.state.price, quantity: this.state.quantity}]
        })
    }

    

    render() {
        return (
            <>
                <label htmlFor="item">Item:</label>
                <input type="text" id="item" name="item" placeholder="Enter Item" value={this.state.item} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({item: e.target.value})}></input>

                <label htmlFor="price">Price:</label>
                <input type="number" id="price" name="price" placeholder="Enter Price" onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({price: e.target.value })}></input>

                <label htmlFor="quantity">Quantity:</label>
                <select name="quantity" id="quantity" value={this.state.quantity} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => this.setState({quantity: e.target.value})}>
                    <option value="0">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <button onClick={this.add}>Add</button>         
                {
                    this.state.info.length > 0 ? <ol>
                        {
                            this.state.info.map((value) => {
                                return <li>{value.item} - {value.price*value.quantity}</li>
                            })
                        }
                    </ol> : <ol>
                        <li>No Data Available Yet</li>
                    </ol>
                }
            </>
        )
    }
}