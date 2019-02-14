import React, {Component}  from 'react';

class InputTask extends Component {

   state = {Name:'', codeNumber:''}

   handleChange = (e) => {
       this.setState({ [e.target.name] : e.target.value });
   }

   render() {
       return (
           <div>
               {/* <input type="hidden" name="id" value={this.props.id} /><br/> */}
               <p>Your name:</p>
               <input type="text" name="Name" onChange={this.handleChange} /> <br/>
               <p>Student code</p>
               <input type="text" name="codeNumber" onChange={this.handleChange} /> <br/>
               <button onClick={() => this.props.addCode(this.state.Name, this.state.codeNumber)}>Add</button>
           </div>
       )
   }
}

export default InputTask