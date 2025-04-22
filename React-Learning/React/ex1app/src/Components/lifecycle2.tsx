import React, { Component } from "react";

interface Emp{
    empName: string,
    empSkills: string[],
    empAge: number,
    empLocation: string
}

export default class Lifecycle2 extends Component{

    state: Emp = {
        empName: "Subhankar Manna",
        empSkills: ["Java", "Spring Boot", "React", "Angular"],
        empAge: 23,
        empLocation: "Kolkata"
    }

    ref1= React.createRef<HTMLInputElement>();

    componentDidMount(): void {
        setTimeout(() => {
            this.ref1.current!.innerText =`Name: ${this.state.empName}, Skills: ${this.state.empSkills}, Age: ${this.state.empAge}, Location: ${this.state.empLocation}`
        }, 5000);
    }

    render(){
        return(
            <>
                <h3 ref={this.ref1}>Wait for 5secs</h3>
            </>
        )
    }
}
