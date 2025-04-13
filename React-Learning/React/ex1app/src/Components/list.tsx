import {Component} from "react";
import Listings from "./listings";

export default class List extends Component{

    state:{name:string[], msg:string}={name:[], msg:""};

    update=(e:React.ChangeEvent<HTMLInputElement>)=>{this.setState({[e.target.name]:e.target.value})}

    add=()=>{
        let res=[...this.state.name];
        res.push(this.state.msg);
        this.setState({name:res, msg:""});
    }
    render(){
        return(
            <>
                <label htmlFor="name">Subject Name:</label>
                <input type="text" id="name" name="msg" value={this.state.msg} onChange={this.update} /><br/><br/>

                <button type="button" onClick={this.add}>Add</button>
                {
                    this.state.name.map((item,index)=><Listings key={index} name={item} />)
                }
            </>
        )
    }
}