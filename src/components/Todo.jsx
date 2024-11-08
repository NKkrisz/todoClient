import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import CheckIcon from "@mui/icons-material/Check"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { useState } from 'react'
import { EditTodo } from "./EditTodo"
import { QueryClient, useQueryClient } from '@tanstack/react-query'
import { delTodo, updateStatus } from '../utils'

const Todo = ({id, task, completed}) => {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient()
  
  const handleDelete = async () => {
    await delTodo(id)
    queryClient.invalidateQueries("todos")
  }

  const handleDone = async () => {
    await updateStatus(id)
    queryClient.invalidateQueries("todos")
  }

  const handleEdit = () => {
    setOpen(true);
  };

  return (
    <ListItem sx={{background:"white"}}>
        <ListItemButton>
            <ListItemIcon sx={{color : completed ? "green" : "red"}}>
              <CheckIcon onClick={handleDone}/>
            </ListItemIcon>
            <ListItemText primary={task} sx={{textDecoration : completed ? "line-through" : "none"}}/>
            <ListItemIcon sx={{color:"red"}}>
              <DeleteIcon onClick={handleDelete} />
            </ListItemIcon>
            <ListItemIcon sx={{color:"blue"}}>
              <EditIcon onClick={handleEdit}/>
           </ListItemIcon>
        </ListItemButton>
        {open && <EditTodo open={open} setOpen={setOpen} task={task} id={id}/>}
    </ListItem>
  )
}

export default Todo
