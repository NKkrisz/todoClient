import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { updateTask } from '../utils';
import { useQueryClient } from '@tanstack/react-query';

export const EditTodo = ({open, setOpen, task, id}) => {
    const handleClose = () => {
        setOpen(false);
    };
    const [updatedTask, setUpdatedTask] = useState(task)
    const queryClient = useQueryClient()
    const handleUpdate = async () => {
        await updateTask(id, {task:updatedTask})
        queryClient.invalidateQueries("todos")
        handleClose()
    }
  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Edit " + task + " ?"}</DialogTitle>
        <DialogContent>
          <TextField multiline value={updatedTask} onChange={(e)=>{setUpdatedTask(e.target.value)}} id="filled-basic" label="Filled" variant="filled" autoFocus/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleUpdate}>Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
