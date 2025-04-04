import { Component } from "react";

class Test1 extends Component {
    state = {
        length: 10,
        breadth: 20,
        height: 30,

    }

    render() {
        return (
            <>
                <ul>
                    <li>Area: {this.state.length * this.state.breadth}</li>
                    <li> Volume: {this.state.length * this.state.breadth * this.state.height}</li>
                </ul>
            </>
        )
    }
}

export default Test1;