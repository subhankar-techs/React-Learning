import React, { Component } from "react";

export default class Lifecycle3 extends Component {
    state:{count:number} = {count:0}
    ref1= React.createRef<HTMLHeadingElement>();

    componentDidMount(): void {
        setTimeout(() => {
            this.ref1.current!.innerText =`Count status: ${this.state.count}`
        }, 1);
    }

    componentDidUpdate(): void {
        setTimeout(() => {
            this.ref1.current!.innerText =`Count status: ${this.state.count}`
        }, 1);
    }

    render() {
        return (
            <>
                <h3 ref={this.ref1}>Count status: {this.state.count}</h3>
                <button onClick={() => this.setState({count:this.state.count+1})}>Increment</button>
                <button onClick={() => this.setState({count:this.state.count-1})}>Decrement</button>
            </>
        )
    }
}