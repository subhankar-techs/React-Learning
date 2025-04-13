import {Component} from "react";
import { Calculate } from "./Calculate";

export default class Dimensic extends Component{
    state:{len:number,bred:number,hgt:number}= {
        len:10,
        bred:15,
        hgt:20
    }

    render(){
        return(
            <>
             <h3>props passing Example</h3>
             <Calculate l={this.state.len} b={this.state.bred} h={this.state.hgt}></Calculate>
            </>
        )
    }
}