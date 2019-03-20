import React,{Component} from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../reducers'


const store = createStore(rootReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AddTodo />
        <VisibleTodoList />
        {/* <Footer /> */}
      </Provider>
    );
  }
}

export default App
