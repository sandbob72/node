import React, {Component} from 'react'; 
import Count from './Count' 
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux'

export const add = () => ({type: 'ADD'})
export const minus = () => ({ type: 'MINUS'})

export const numberReducer = (state = 0, action) => {
  switch (action.type) {
      case 'ADD':
          return state + 1
      case 'MINUS':
          return state - 1
      default:
          return state
  }
}
export const rootReducer = combineReducers({number: numberReducer})
export const store = createStore(rootReducer)


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