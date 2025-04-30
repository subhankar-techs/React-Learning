import { Component } from "react";

interface Test {
    name: string;
    dept: string;
    chemistry: number;
    biology: number;
    physics: number;
    msg: string[];
}

export default class Exam1 extends Component<Test> {

    state: {
        name: string;
        dept: string;
        chemistry: number;
        biology: number;
        physics: number;
        msg: string[];
    } = {
        name: "",
        dept: "",
        chemistry: 0,
        biology: 0,
        physics: 0,
        msg: []
    }

    addResult = () => {
        if (this.state.name.trim() !== "") {
            const totalMarks = Number(this.state.chemistry) + Number(this.state.biology) + Number(this.state.physics);
            const result = `Name: ${this.state.name}, Department: ${this.state.dept}, Total Marks: ${totalMarks}`;
            this.setState({ 
                msg: [...this.state.msg, result], 
                name: "", 
                dept: "", 
                chemistry: 0, 
                biology: 0, 
                physics: 0 
            });
        }
    }

    valupdate = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    }

    deleteResult = (index: number) => {
        const updatedMsg = this.state.msg.filter((_, i) => i !== index);
        this.setState({ msg: updatedMsg });
    }

    render() {
        return(
            <>
                <label htmlFor="name">Student Name:</label>
                <input type="text" id="name" name="name" value={this.state.name} onChange={this.valupdate} /><br /><br />

                <label htmlFor="dept">Enter Department:</label>
                <input type="text" id="dept" name="dept" value={this.state.dept} onChange={this.valupdate} /><br /><br />

                <label htmlFor="chemistry">Chemistry:</label>
                <input type="text" id="chemistry" name="chemistry" value={this.state.chemistry} onChange={this.valupdate} /><br /><br />

                <label htmlFor="biology">Biology:</label>
                <input type="text" id="biology" name="biology" value={this.state.biology} onChange={this.valupdate} /><br /><br />

                <label htmlFor="physics">Physics:</label>
                <input type="text" id="physics" name="physics" value={this.state.physics} onChange={this.valupdate} /><br /><br />

                <button onClick={this.addResult}>Add Result</button><br /><br />

                <ol>
                    {this.state.msg.map((result, index) => (
                        <li key={index}>
                            {result} 
                            <button onClick={() => this.deleteResult(index)} style={{ marginLeft: "10px" }}>Delete</button>
                        </li>
                    ))}
                </ol>
            </>
        )
    }
}
