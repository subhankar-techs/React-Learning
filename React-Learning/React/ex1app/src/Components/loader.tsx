import { Component } from "react";
import Lifecycle3 from "./lifecycle3";

export default class Loader extends Component {
    state:{load:boolean}={load:false}

    render(){
        return(
            <>
                <input type="button" value={(this.state.load)?'Hide':'Show'} onClick={()=>this.setState({load:!this.state.load})} /> <br /><br />
                {
                    (this.state.load)?<Lifecycle3 />:null
                }
            </>
        )
    }
}