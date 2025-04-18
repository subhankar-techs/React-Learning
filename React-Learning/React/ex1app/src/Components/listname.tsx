import { Component } from "react";
import ShowList from "./showList";

export default class Listname extends Component{

    state:{
        name:string,
        info:string[]
    }={
        name:"",
        info:[]
    }
    addName=()=>{
        this.setState({info:[...this.state.info,this.state.name], name:""})
    }

    delName=(index:number)=>{
        this.state.info.splice(index,1);
        this.setState({info: this.state.info});
    }

    render(){ 
        return (
            <>
                <label htmlFor="name">Enter Name</label>
                <input type="text" id="name" name="name" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>this.setState({name:e.target.value})} />
                <br/><br/>
                
                <button type="button" onClick={this.addName}>Add</button>

                {
                    (this.state.info.length>0) ?<ShowList data={this.state.info} delitem={this.delName} /> : <h3>No Data Found</h3>
                }
            </>
        )
    }
}