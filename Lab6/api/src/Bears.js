import React, {Component} from 'react';
import {getBear} from './App4'
import { connect } from 'react-redux'

class Bears extends Component {

   componentDidMount() {
       this.props.getBears()
   }

   renderBears = () => {
       if (this.props.bears) {
           return this.props.bears.map( (bear, index) => {
               console.log( bear.name)
               return (<li key={index}> {bear.name} </li>
           )})
       }
   }

   render() {
       return (
           <div style={{margin: '20px'}}>
               <h3>Render Bear</h3>
               <ul>
                   {this.renderBears()}
                
               </ul>
           </div>
       );
   }
}

const mapStateToProps =  ({bears}) => {
   return {bears}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBears: () => dispatch(getBear())
    }
 }
 
 export default connect(mapStateToProps,mapDispatchToProps)(Bears);