import { TextField, Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { addTodo } from '../utils'

const AddTodo = () => {
    const [newTask, setNewTask] = useState("")
    const queryClient = useQueryClient()

    const handleAdd = async () => {
      await addTodo({task:newTask})
      queryClient.invalidateQueries("todos")
      setNewTask("")
    }
  return (
    <div>
      <TextField id='filled-basic' label="add new task" variant='filled' sx={{background:"white"}} value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
      <Button onClick={handleAdd} variant='contained' disabled={newTask ? false : true}>Add</Button>
    </div>
  )
}

export default AddTodo
