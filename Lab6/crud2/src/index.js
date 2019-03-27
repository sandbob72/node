import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ShowData from './component/ShowData'
import Insert from './component/Insert'
import Update from './component/Update'
import Delete from './component/Delete'
import {Router,Route,Link,browserHistory} from 'react-router'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import axios from 'axios'

//action
export const getDataSuccess = Data => ({
    type: 'GET_DATA_SUCCESS',
    Data
  })
  
  export const getDataFailed = () => ({
    type: 'GET_DATA_FAILED'
  })

  export const insertDataSuccess = Data => ({
    type: 'INSERT_DATA_SUCCESS',
    Data
  })
  export const updateDataSuccess = Data => ({
    type: 'UPDATE_DATA_SUCCESS',
    Data
  })
  export const deleteDataSuccess = Data => ({
    type: 'DELETE_DATA_SUCCESS',
    Data
  })
  
  
  //getData
  export const getData = () => async (dispatch) => {
    try {
      console.log('getData');
      const respones = await axios.get(`http://localhost:8000/api/students`)
      console.log('response: ', respones.data)
      dispatch(getDataSuccess(respones.data));
    }
    catch (error) {
      console.error(error);
      dispatch(getDataFailed());
    }
  }
  //insertData
  export const insertData = (data) => async (dispatch) =>{
    try {
      console.log('insertData');
      const respones = await axios.post(`http://localhost:8000/api/students/`,data)
      console.log('response: ', respones.data)
      dispatch(insertDataSuccess(respones.data));
    }
    catch (error) {
      console.error(error);
      dispatch(getDataFailed());
    }
  }
  //Update
  export const updateData = (id,data) => async (dispatch) =>{
    try {
      console.log('updatatData');
      const respones = await axios.put(`http://localhost:8000/api/students/${id}`,data)
      console.log('response: ', respones.data)
      dispatch(updateDataSuccess(respones.data));
    }
    catch (error) {
      console.error(error);
      dispatch(getDataFailed());
    }
  }
  //Delete
  export const deleteData = (id,data) => async (dispatch) =>{
    try {
      console.log('updatatData');
      const respones = await axios.delete(`http://localhost:8000/api/students/${id}`,data)
      console.log('response: ', respones.data)
      dispatch(deleteDataSuccess(respones.data));
    }
    catch (error) {
      console.error(error);
      dispatch(getDataFailed());
    }
  }

  
  //reducer
  export const studentReducer = (state = [], action) => {
    switch (action.type) {
      case 'GET_DATA_SUCCESS':
        console.log('action:', action.Data)
        return action.Data
      case 'GET_DATA_FAILED':
        console.log('action: Failed');
        return action.Data
      case 'INSERT_DATA_SUCCESS':
        return action.Data  
      case 'UPDATE_DATA_SUCCESS':
        return action.Data
      case 'DELETE_DATA_SUCCESS':
        return action.Data  
      default:
        return state
  
  
    }
  }
  
  
export const rootReducer = combineReducers(
    { student: studentReducer }
  )

export const store = createStore(rootReducer, applyMiddleware(logger, thunk))


ReactDOM.render(<Provider store={store}>
    <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/ShowData" component={ShowData}/>
    <Route path="/Insert" component={Insert}/>
    <Route path="/Update" component={Update}/>
    <Route path="/Delete" component={Delete}/>
 
    </Router></Provider>,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
