import {Component} from "react";
interface Exam
{
    l:number,
    b:number,
    h:number

}
export class Calculate extends Component<Exam>
{
    constructor(props:Exam)
    {
        super(props);
    }
    render()
    {
      return(
        <>
       <h3>Area:{this.props.l*this.props.b}</h3> 
        <br></br>
        <h3>Volume:{this.props.l*this.props.b*this.props.h}</h3><br></br>
        </>

      )  
    }
}