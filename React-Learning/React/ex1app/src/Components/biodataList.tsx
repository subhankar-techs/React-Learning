import { Component } from "react";

interface Test {
    result: {
        name:string,
        age:number,
        dept:string
    }[]
}

export default class BiodataList extends Component<Test>{

    constructor(props:Test){
        super(props);
    }

    render() {
        return (
            <>
                <ol>
                    {
                        this.props.result.map((val, index) => {
                            return <li key={index}>
                                <h3>Name: {val.name}</h3>
                                <h3>Age: {val.age}</h3>
                                <h3>Dept: {val.dept}</h3>
                            </li>
                        })
                    }
                </ol>
            </>
        )
    }
}