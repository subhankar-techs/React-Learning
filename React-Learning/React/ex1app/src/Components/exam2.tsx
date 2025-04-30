import { Component } from "react";

interface Data {
    name: string;
    location: string;
    designation: string;
}

interface State {
    name: string;
    location: string;
    designation: string;
    result: Data[];
}

const data: Data[] = [
    { name: "Subhankar", location: "Panskura", designation: "Manager" },
    {name: "Sourav", location: "Mecheda", designation: "Developer" },
    {name: "Rahul", location: "Kolkata", designation: "Designer" },
    {name: "Suman", location: "Panskura", designation: "Manager" },
];

export default class Exam2 extends Component<State> {
    state: State = {
        name: "",
        location: "",
        designation: "",
        result: [],
    };

    handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    showResult = () => {
        const { location, designation } = this.state;
        const filteredData = data.filter(
            (item) =>
                item.location.toLowerCase() === location.toLowerCase() &&
                item.designation.toLowerCase() === designation.toLowerCase()
        );
        this.setState({ result: filteredData });
    };

    render() {
        const { location, designation, result } = this.state;

        return (
            <>
                <label htmlFor="location">Enter Location:</label>
                <input type="text" id="location" name="location" value={location} onChange={this.handleInputChange} />
                <br /><br />

                <label htmlFor="designation">Enter Designation:</label>
                <input type="text" id="designation" name="designation" value={designation} onChange={this.handleInputChange}
                />
                <br /><br />

                <button onClick={this.showResult}>Show Result</button>

                <br /><br />
                {result.length > 0 ? (
                    <ul>
                        {result.map((item, index) => (
                            <li key={index}>
                                name: {item.name}, Location: {item.location}, Designation: {item.designation}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No data found</p>
                )}
            </>
        );
    }
}