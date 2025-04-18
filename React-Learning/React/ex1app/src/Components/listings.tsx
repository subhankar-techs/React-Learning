import { Component } from "react";

interface Listing{
    name: string;
}

export default class Listings extends Component<Listing>{

    constructor(props:Listing){
        super(props);
    }

    render(){
        return(
            <>
                
                    <li>{this.props.name}</li>
                
            </>
        )
    }
    
}