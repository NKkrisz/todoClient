import { useState } from 'react';
import './App.css'
import Header from './components/Header';
import Login from './components/Login';
import TodoList from './components/TodoList';
import Logout from './components/Logout';
import AddTodo from './components/AddTodo';
import {QueryClientProvider, QueryClient} from "@tanstack/react-query"

const queryClient = new QueryClient()

function App() {
  //Set to true when developing to avoid login requirement
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
  <QueryClientProvider client={queryClient}>
    <div className='app'>
      <Header/>
      {isLoggedIn ? <><AddTodo/><TodoList/><Logout setIsLoggedIn={setIsLoggedIn}/></> : <Login setIsLoggedIn={setIsLoggedIn}/>}
    </div>
  </QueryClientProvider>
  )
}

export default App
