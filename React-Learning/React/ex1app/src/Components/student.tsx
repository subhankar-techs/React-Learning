import { Component } from "react";
import Display from "./display";

export default class Student extends Component {

    state:{name:string,dept:string, status:boolean}={name:"",dept:"", status:false};    

    update=(e:React.ChangeEvent<HTMLInputElement>)=>{this.setState({[e.target.name]:e.target.value})}

    render() {
        return(
            <>
                <label htmlFor="name">Student Name:</label>
                <input type="text" id="name" name="name" onChange={this.update} /><br/><br/>

                <label htmlFor="dept">Depertment:</label>
                <input type="text" id="dept" name="dept" onChange={this.update} /><br/><br/>

                <input type="button" value={(this.state.status)?"Hide":"Show"} onClick={()=>this.setState({status:!this.state.status})} />
                {
                    (this.state.status)?<Display name={this.state.name} dept={this.state.dept} />:null
                }
            </>
        )
    }
}