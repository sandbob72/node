import React, {Component} from 'react';
// import './App.css';
import TaskList from './todo/TaskList'
import InputTask from "./todo/InputTask";
import {createStore,combineReducers,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import axios from 'axios'
import thunk from 'redux-thunk'
import Github from './Github/IndexGithub'

let nextTodoId = 0
export const addtask = (value) => ({
  type:"ADDTASK",
  id: nextTodoId++,
  value
})

export const getGitFail = () => ({
  type : 'GET_GIT_FAIL'
})

export const getGitsuccess = (value) => ({
  type:'GET_GIT_SUCCESS',
  value
})


var name = 'sandbob72'

export const getGit = () => async (dispatch) => {
  try { 
      const res = await axios.get(`http://api.github.com/users/${name}`)
      const resbody = await res.data
      dispatch(getGitsuccess(resbody))
  }
  catch (error) {
    console.error(error)
    dispatch(getGitFail())
  }
}

export const gitReducer = (state = 0, action) => {
  switch (action.type) {
    case 'GET_GIT_FAIL' :
        console.log('action:failed')
        return action.value

    case 'GET_GIT_SUCCESS' :
        console.log('action:',action.value)
        return action.value

    default:
        return state
  }
    
    
}


//==========================================================

export const taskReducer = (state = [] , action) => {
  console.log(state)
  switch(action.type){
    case "ADDTASK":
      return [      
           ...state,
           {
               id: action.id,
               value: action.value
           }
        ] 
                  
    default:
  }
  return state
}
const rootReducer = combineReducers({
  task : taskReducer,
  git : gitReducer
  
})
export const store = createStore(rootReducer,applyMiddleware(thunk))


class App1 extends Component {

   render() {   
       return (
         <Provider store={store}>
              <div align="center">
                  <h1>Todo</h1>
                  <TaskList/>
                  <InputTask/>
                  <br/>
                  <hr/>
                  <Github />
              </div>
         </Provider>
           
       );
   }
}

export default App1;