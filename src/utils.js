import axios from "axios"

const URL = "http://localhost:3000"

export const getTodos = async () => {
    const response = await axios.get(URL+"/todos")
    return response
}

export const delTodo = async (id) => {
    const response = await axios.delete(URL+"/todos/"+id)
    return response
}

export const updateStatus = async (id) => {
    const response = await axios.put(URL+"/todos/completed/"+id)
    return response
}

export const updateTask = async (id, data) => {
    const response = await axios.put(URL+"/todos/task/"+id, data)
    return response
}

export const addTodo = async (data) => {
    const response = await axios.post(URL+"/todos", data)
    return response
}