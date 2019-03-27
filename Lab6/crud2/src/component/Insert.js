import React,{Component} from 'react'
import {insertData} from '../index'
import { connect } from 'react-redux'

class Insert extends Component{

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
           <div><h1>Insert</h1><br></br>
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
           <button onClick={() => this.props.insertData(this.state)}>Insert</button>
           <a href="/"><button>Home</button></a>
           <a href="/ShowData"><button>ShowData</button></a><br></br>

           </div>
       )
    }
}

const mapStateToProps =  ({student}) => {
    return {student}
 }
 
 const mapDispatchToProps = (dispatch) => {
    return {
        insertData: (data) => dispatch(insertData(data))
    }
 }
 

export default connect(mapStateToProps,mapDispatchToProps) (Insert);