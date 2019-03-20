import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {createStore, combineReducers, applyMiddleware } from 'redux'
import Bear from './Bear'
import logger from 'redux-logger'
import axios from 'axios'
import thunk from 'redux-thunk'

// ========  action (As Dispatcher) ==========

export const getBearsSuccess = bears => ({
   type: 'GET_BEARS_SUCCESS',
   bears 
});
export const getBearsFailed = () => ({ type: 'GET_BEARS_FAILED'});

export const getBears = () => async (dispatch) => {
   try {
       console.log('get bear new')
       const response = await axios.get(`http://localhost:8000/api/students`)
    //    const responseBody = await response.data;
    //    console.log('response: ', responseBody)
       dispatch(getBearsSuccess(response.data));
   } catch (error) {
       console.error(error);
       dispatch(getBearsFailed());
   }
}


// ========  reducer (As Controller) =========

export const bearReducer = (state = 0, action) => {
   switch (action.type) {
       case 'GET_BEARS_SUCCESS':
               console.log('action: ' , action.bears)
           return action.bears
       case 'GET_BEARS_FAILED':
               console.log('action: Failed')
           return action.bears
       default:
           return state
   }
}


export const rootReducer = combineReducers({bears: bearReducer})
export const store = createStore(rootReducer, applyMiddleware(logger,thunk))


// ======== wrap root element by Provider with Store ========
class App extends Component {
   render() {
       return <Provider store={store}><Bear/></Provider>
   }
}

export default App