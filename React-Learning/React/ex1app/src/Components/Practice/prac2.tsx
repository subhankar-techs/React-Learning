import {Component} from "react";

interface Props {
    name: string;
    age: number;
}

export default class Prac2 extends Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <>
                <tr>
                    <td>{this.props.name}</td>
                    <td>{this.props.age}</td>
                </tr>
            </>
        );
    }
}