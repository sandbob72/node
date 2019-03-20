import React, { Component } from 'react';
import './App.css';
import TaskList from './todo/TaskList'
import InputTask from "./todo/InputTask";
import Github from './todo/Github'
import axios from 'axios';
import Weather from './todo/Weather'

class App extends Component {

    state = {
        //    tasks: [{id: 1, task: 'Do homework'},
        //            {id: 2, task: 'Read book'}],
        code: [{ Name: 'Sakul Somkerwwhan', codeNumber: '5935512039', User: 'sandbob72' }],
        user: '',
        data: ''
        //    id:3
    }
    addUser = (user) => {
        this.fetchUser(user)
        this.setState({
            user: user
        })

    }

    fetchUser = (USER) => {
        axios.get(`https://api.github.com/users/${USER}`)
            .then(res => {
                this.setState({ data: res.data })
                console.log('data',res.data)
            })
    }


    //    addTask = (task) => {
    //        this.setState({
    //                 tasks: [...this.state.tasks, {id: this.state.id,task } ],
    //                 id: this.state.id+1  })
    //    }
    addCode = (Name, codeNumber, User) => {
        this.setState({
            code: [...this.state.code, { Name, codeNumber, User }]
        })
    }

    render() {
        console.log('code', this.state.code);

        return (
            <div className="App">
                <h1>Todo</h1>
                <TaskList code={this.state.code}
                    tasks={this.state.tasks} />
                <InputTask addCode={this.addCode} user= {this.state.user} addUser={this.addUser}/>
                {/* <InputTask addTask={this.addTask} addCode={this.addCode} id={this.state.id} /> */}
                <br />
                <Github data={this.state.data} />
                {/* <Weather/> */}
            </div>
        );
    }
}

export default App;