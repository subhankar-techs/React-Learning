import { Component } from "react";


interface Exam{
    name:string;
    dept:string;
}

export default class Display extends Component<Exam>{

    constructor(props:Exam){
        super(props);
    }
    render(){
        return(
            <div>
                <h1>Student Details</h1>
                <h2>Name: {this.props.name}</h2>
                <h2>Department: {this.props.dept}</h2>
            </div>
        )
    }
    
}