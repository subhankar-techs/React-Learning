import { Component } from "react";

interface Emp {
    empId:number,
    empName:string,
    empAge:number
}

export default class Lifecycle1 extends Component<{}, Emp> {
    constructor(props:{}) {
        super(props);
        this.state = {
            empId: 20,
            empName: "Subhankar Manna",
            empAge: 60
        }
    }

    componentWillMount(): void {
        console.log("ComponenetWillMount is Called")
        alert("ComponentWillMount is loading...")
    }

    update() {
        this.setState({
            empAge: 25,
            empName: "Subhankar Dhal"
        });
    }

    render() {
        return (

            <>
                <ul>
                    <li>{this.state.empId}</li>
                    <li>{this.state.empName}</li>
                    <li>{this.state.empAge}</li>
                </ul><br /><br />
                <button onClick={this.update}>Update</button>
            </>
        )
    }

    componentDidMount(): void {
        console.log("ComponentDidMount is Called")
        alert("ComponentDidMount is loading...")
    }
    shouldComponentUpdate(): boolean {
        console.log("Should ComponentUpdate is Called");
        return true;
    }

    componentWillUpdate(): void {
        console.log("ComponentWillUpdate is Called");
        alert("ComponentWillUpdate is loading...")
    }

    componentDidUpdate(): void {
        console.log("ComponentDidUpdate is Called")
        alert("ComponentDidUpdate is done.")
    }

}
