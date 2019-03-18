import React, {Component} from 'react';


class Count extends Component {
    state = {number: 0}
    add = () => this.setState({number: this.state.number + 1})
    minus = () => this.setState({number: this.state.number - 1})
 
    render() {
        return (
                <div style={{margin: '20px'}}>
                    Counter: {this.state.number} <br/>
                    <button onClick={this.add} > +</button>
                    <button onClick={this.minus}> -</button>
                </div>
        );
    }
 }
 
 export default Count