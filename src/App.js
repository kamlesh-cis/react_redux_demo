import { Component } from 'react'

import logo from './logo.svg';
import './App.css';
import Users from './components/users'
import Posts from './components/posts'

class App extends Component {
  render() {
    return (
      <div>
        <Users />
        <Posts />
      </div>
    )
  }
}
export default App

