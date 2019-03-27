import React,{Component} from 'react'
import {deleteData} from '../index'
import { connect } from 'react-redux'

class Delete extends Component{

    state={
        id:0
    }

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    }

    render(){
       return(
           <div><h1>Delete</h1><br></br>
           <input type="number" name="id" onChange={this.handleChange}/><br></br>
           <button onClick={() => this.props.deleteData(this.state.id)}>Delete</button>
           <a href="/"><button>Home</button></a>
           <a href="/ShowData"><button>ShowData</button></a>

           </div>
       )
    }
}

const mapStateToProps =  ({student}) => {
    return {student}
 }
 
 const mapDispatchToProps = (dispatch) => {
    return {
        deleteData: (data) => dispatch(deleteData(data))
    }
 }
export default connect(mapStateToProps,mapDispatchToProps)(Delete);