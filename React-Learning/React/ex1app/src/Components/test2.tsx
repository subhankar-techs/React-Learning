import  { Component } from "react";

interface Test2State {
    length: number;
    breadth: number;
    height: number;
    msg: string;
}

export default class Test2 extends Component {
    state: Test2State = {
        length: 10,
        breadth: 20,
        height: 30,
        msg:""
    }

    show=()=>{
        let area= this.state.length * this.state.breadth;
        let volume= this.state.length * this.state.breadth * this.state.height;
        this.setState({msg:`Area: ${area} Volume: ${volume}`});
        }

    render() {
        return (
            <>

                <ul>
                    <li>Length: {this.state.length}</li>
                    <li> Breadth: {this.state.breadth}</li>
                    <li> Height: {this.state.height}</li>
                </ul>

                <button onClick={this.show}> Show</button><br /><br />
                <h3>{this.state.msg}</h3>
            </>
        )
    }
}
