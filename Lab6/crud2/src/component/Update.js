import React,{Component} from 'react'
import {updateData} from '../index'
import { connect } from 'react-redux'

class Update extends Component{

    state={
        id:0,
        name:" ",
        surname:" ",
        Major:" ",
        GPA:0.0
    }

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    }

    render(){
       return(
           <div><h1>Update</h1><br></br>
           <p>id</p>
           <input type="number" name="id" onChange={this.handleChange}/><br></br>
           <p>name</p>
           <input type="text" name="name" onChange={this.handleChange}/><br></br>
           <p>surname</p>
           <input type="text" name="surname" onChange={this.handleChange}/><br></br>
           <p>Major</p>
           <input type="text" name="Major" onChange={this.handleChange}/><br></br>
           <p>GPA</p>
           <input type="number" name="GPA" onChange={this.handleChange}/><br></br>
           <button onClick={() => this.props.updateData(this.state.id,this.state)}>Insert</button>
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
        updateData: (id,data) => dispatch(updateData(id,data))
    }
 }
export default connect(mapStateToProps,mapDispatchToProps)(Update);