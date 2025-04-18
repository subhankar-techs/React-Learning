import { Component } from "react";
import BiodataList from "./biodataList";

interface Test {
  name: string;
  age: number;
  dept: string;
}  

export default class Biodata extends Component{

    state:{
        info:Test, list:Test[]}={
        info:{ name: "", age: 0, dept: "" }, list: []
    }

    update=(e:React.ChangeEvent<HTMLInputElement>)=>{
    
            this.setState({info:{...this.state.info,[e.target.name]:e.target.value}})

    }

    add=()=>{
        this.setState({list:[...this.state.list, this.state.info], info:{name:"", age:0, dept:""}})
    }

    render() {
        return(
            <>
                <label htmlFor="name">Enter Name:</label>
                <input type="text" value={this.state.info.name} name="name" onChange={this.update} /><br/><br/>

                <label htmlFor="age">Enter Age:</label>
                <input type="number" value={this.state.info.age} name="age" onChange={this.update} /><br/><br/>

                <label htmlFor="dept">Enter Dept:</label>
                <input type="text" value={this.state.info.dept} name="dept" onChange={this.update} /><br/><br/>

                <button type="button" onClick={this.add}>Add</button><br/><br/>

                {
                    (
                        this.state.list.length>0 ? <BiodataList result={this.state.list} /> : <h3>No Data Found</h3>

                    )
                }
                
            </>
        )
    }
}