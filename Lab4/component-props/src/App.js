import React, {Component} from 'react';
import './App.css';
import TaskList from './todo/TaskList'
import InputTask from "./todo/InputTask";
import Github from './todo/Github'

class App extends Component {

   state = {
    //    tasks: [{id: 1, task: 'Do homework'},
    //            {id: 2, task: 'Read book'}],
       code:[{Name : 'Sakul Somkerwwhan', codeNumber : '5935512039', User : 'sandbob72'}]        
    //    id:3
   }

//    addTask = (task) => {
//        this.setState({
//                 tasks: [...this.state.tasks, {id: this.state.id,task } ],
//                 id: this.state.id+1  })
//    }
   addCode = (Name, codeNumber, User) => {
       this.setState({
                code: [...this.state.code, {Name, codeNumber, User}]
       })
   }

   render() {   
    console.log('code',this.state.code);

       return (
           <div className="App">
               <h1>Todo</h1>
               <TaskList code={this.state.code}
                         tasks={this.state.tasks}/>
               <InputTask addCode={this.addCode}  />
               {/* <InputTask addTask={this.addTask} addCode={this.addCode} id={this.state.id} /> */}
               <br/>
               <Github code={this.state.code}/>
           </div>
       );
   }
}

export default App;