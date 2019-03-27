import React, { Component } from 'react'
import { getData } from '../index'
import { connect } from 'react-redux'

class ShowData extends Component {

    componentDidMount() {
        console.log('props2', this.props)
        this.props.getData();
    }

    renderData = () => {
        if (this.props.student) {
            return this.props.student.map((student, index) => {
                return (<li key={index}> {student.name} </li>
                )
            })
        }
    }

    render() {
        return (
            <div>
                <h1>ShowData</h1>
                <ul>
                    {this.renderData()}
                </ul>
                <a href="/"><button>Home</button></a>
            </div>
        )
    }
}

const mapStateToProps = ({ student }) => {
    return { student }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(getData())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShowData);