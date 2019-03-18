import React, {Component} from 'react'; 
import Count from './Count' 
import {Provider} from 'react-redux'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import logger from 'redux-logger'

export const add = () => ({type: 'ADD'})
export const add2 = (number) => ({type: 'ADD2', number})
export const minus = () => ({ type: 'MINUS'})

export const numberReducer = (state = 0, action) => {
  switch (action.type) {
      case 'ADD':
          return state + 1
      case 'ADD2':
          return state + action.number
      case 'MINUS':
          return state - 1
      default:
          return state
  }
}
export const rootReducer = combineReducers({number: numberReducer})
export const store = createStore(rootReducer, applyMiddleware(logger))


class App extends Component { 
   render() { 

       return(
       <Provider store={store}>
       <Count />
       </Provider>
       );
   }
} 
export default App