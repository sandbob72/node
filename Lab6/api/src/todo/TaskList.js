import React,{Component} from 'react'
import {connect} from 'react-redux'
class TaskList extends Component {
   render() {
       console.log("in TaskList1",this.props.activitie)
    //    console.log("in TaskList1",this.props.activitie.tasks)
           return (<ul > {
                   this.props.value.map((item) => (
                       <li key={item.id}> {item.value} </li>
                   ))
           
               }
           </ul>)
   }
}

const mapStateToProps = (state) => {
    return {
        value:state.task
    }
}

export default connect(mapStateToProps)(TaskList)