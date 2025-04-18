import { Component } from "react";

interface props{
    data: string[];
    delitem: (index: number) => void;
}

export default class ShowList extends Component<props>{

    constructor(props:props){
        super(props);
    }
    render() {
        return (
            <>
                <ol>
                    {
                        this.props.data.map((val,index)=>{
                            return <li>{val}
                            <button onClick={()=>this.props.delitem(index)}>Delete</button>
                            </li> 
                        })
                    }
                    
                </ol>
            </>
        )
    }
}