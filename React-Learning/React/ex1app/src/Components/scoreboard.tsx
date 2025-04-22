import React,{Component} from "react";

export default class Scoreboard extends Component{

    state:{run:number,ball:number}={run:0,ball:0}
    ref1= React.createRef<HTMLHeadingElement>();

    componentDidMount(): void {
        setTimeout(() => {
            this.ref1.current!.innerText =`Runs: ${this.state.run} balls: ${this.state.ball}`
        }, 1);
    }

    componentDidUpdate(): void {
        setTimeout(() => {
            this.ref1.current!.innerText =`Runs: ${this.state.run} balls: ${this.state.ball}`
        }, 1);
    }

    update=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        this.setState({run: this.state.run + parseInt(e.target.value), ball: this.state.ball+1})
    }
    render(){
        return(
            <>
                <h2>Scoreboard</h2>
                <h3 ref={this.ref1}>Runs: {this.state.run} Balls: {this.state.ball}</h3>

                <label htmlFor="select">Select:</label>
                <select name="score" id="score" onChange={this.update} >
                    <option value="0">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="1">WD</option>
                    <option value="1">NB</option>
                    <option value="0">Out</option>
                </select><br /><br />

                <h4>
                    Dhoni scored {this.state.run} runs in {this.state.ball} balls
                </h4>

            </>
        )
    }
}