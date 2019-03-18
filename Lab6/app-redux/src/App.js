import React, {Component} from 'react'; 
import Count from './Count' 
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux'

export const add = () => {
  return {type: 'ADD'}
}

const numberReducer = (state=0,action)=>{
  switch(action.type){
    case 'ADD' : return state+1
    default : return state
  }
}

//const rootReducer = combineReducers({number: numberReducer})
export const store = createStore(numberReducer)

store.dispatch( add() )
console.log(store.getState());


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