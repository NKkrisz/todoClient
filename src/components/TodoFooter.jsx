import React from 'react'

const TodoFooter = ({todoCount}) => {
  console.log(todoCount);
  
  return (
    <div id='leftTodos'>
      TASKS LEFT: {todoCount}
    </div>
  )
}

export default TodoFooter
