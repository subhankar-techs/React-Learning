import {Component} from 'react';

export default class Test3 extends Component {
    state:{
        item:string,
        price:number,
        description : string,
        msg:string
    }={
        item:"",
        price:0,
        description:"",
        msg:""

    }
    update=(e:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({
           [e.target.name]:e.target.value
        })
    }

    show = () => {
        this.setState({ msg: `Item: ${this.state.item}, Price: ${this.state.price}, Description: ${this.state.description}` });
    }

    render() {
        return (
            <>
                <label htmlFor="item">Item:</label>
                <input type="text" id="item" name="item" onChange={this.update}/><br /><br />

                <label htmlFor="price">Price:</label>        
                <input type="number" id="price" name="price" onChange={this.update}/><br /><br />
            
                <label htmlFor="description">Description:</label>
                <input type="text" id="description" name="description" onChange={this.update}/><br /><br />

                <button onClick={this.show}>Update</button>

                <h3>{this.state.msg}</h3>

            </>
        )
    }
}