import { Component } from "react";

export default class Test4 extends Component {
    state:{
       name:string,
       info:string[] 
    }={
        name:"",
        info:[]
    }

    add=()=>{
        this.setState({
            info: [...this.state.info, this.state.name]
        })
    }

    render(){
        return(
            <>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name"value={this.state.name} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>this.setState({name:e.target.value})}></input>

                <button onClick={this.add}>Add</button>
                {
                    this.state.info.length>0?<ol>
                        {
                           this.state.info.map((value)=>{
                            return <li>{value}</li>
                           })
                        }
                    </ol>:<ol>
                        <li>No Data</li>
                    </ol>
                }
            </>
        )
    }
    
}