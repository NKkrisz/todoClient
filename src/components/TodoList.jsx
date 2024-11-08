import { List } from '@mui/material'
import React from 'react'
import Todo from './Todo'
import TodoFooter from './TodoFooter'
import { useQuery } from '@tanstack/react-query'
import { getTodos } from '../utils'

const TodoList = () => {
  const {data, isLoading, isError, error} = useQuery({queryKey:["todos"], queryFn:getTodos})
  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error: {error.message}</div>
  console.log(data.data);
  return (
    <div>
      <List>
        {data.data.map(obj => 
          <Todo key={obj.id} {...obj}/>
        )}
      </List>
      <TodoFooter todoCount={data.data.filter(todo=>!todo.completed).length}/>
    </div>
  )
}

export default TodoList
