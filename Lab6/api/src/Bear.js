import React, { Component } from 'react';
import { getBears } from './App'
import { connect } from 'react-redux'

class Bear extends Component {

    state = {
        name: ""
    }
    // componentDidMount() {
    //     console.log('props', this.props)
    //     this.props.getBears()
    // }

    renderBears = () => {
        if (this.props.bears) {
            return (<div>{this.props.bears.id}: {this.props.bears.name} <img src={this.props.bears.avatar_url} alt="avatar" width="50px" /> </div>)
        }
    }

    render() {
        return ( 
            <div style={{ margin: '20px' }}>
                <h3>Render Student</h3>
                <input type="text" name="name" onChange={(e) => {
                    this.setState({
                        [e.target.name]: e.target.value
                    })
                }} />
                <button onClick={() => this.props.getBears(this.state.name)}>submit</button>
                <ul>
                    {this.renderBears()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = ({ bears }) => {
    return { bears }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBears: (name) => dispatch(getBears(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bear);