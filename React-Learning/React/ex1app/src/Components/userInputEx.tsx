import { Component } from "react";

export default class Test2 extends Component {
    state:{
        name:string,
        age: number,
        dept: string,
    } = {
        name:"",
        age:0,
        dept:""
    }

    update=(e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render() {
        return (
            <>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" onChange={this.update}/><br /><br />

                <label htmlFor="age">Age:</label>        
                <input type="number" id="age" name="age" onChange={this.update}/><br /><br />

                <label htmlFor="dept">Department:</label>
                <select name="dept" id="dept" onChange={this.update}>
                    <option value="">Select Department</option>
                    <option value="CSE">CSE</option>
                    <option value="IT">IT</option>
                    <option value="ECE">ECE</option>
                    <option value="EEE">EEE</option>
                    <option value="ME">ME</option>
                </select><br /><br />

                <ul>
                    <li>Name: {this.state.name}</li>
                    <li>Age: {this.state.age}</li>
                    <li>Department: {this.state.dept}</li>
                </ul>

            </>
        )
    }
}