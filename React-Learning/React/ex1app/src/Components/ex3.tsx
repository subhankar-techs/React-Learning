import { Component } from "react";

interface Test {
    name: string;
    age: number;
    location: string;
    dept: string;
}

class Ex3 extends Component {

    state: Test = {
        name: "Subhankar",
        age: 23,
        location: "Kolkata",
        dept: "CSE"
    }

    update=()=>{
        this.setState({
            name: "Sourav",
            age: 24,
            location: "Kolkata",
            dept: "CSE"
        })
    }

    render() {
        return (
            <>
                <ul>
                    <li>Name: {this.state.name}</li>
                    <li>Age: {this.state.age}</li>
                    <li>Location: {this.state.location}</li>
                    <li>Department: {this.state.dept}</li>
                </ul>

                <br /><br />
                <button onClick={this.update}>Update</button>
            </>
            
        )
    }
}

export default Ex3;