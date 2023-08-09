// nodemon basically solves the problem which was if u change any file that will not show on server so we  have to terminate and we have to start it again so with the help of nodemon we can eliminate this problem

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 3000

// coz to use json format data bassically paras the json fromat data
// it's a middle ware basically middel me vo data ko json convert karega
app.use(bodyParser.json())

// Sample in-memory todo list
let todos = []

// Create a new todo
app.post('/todos', (req, res) => {
  const newTodo = req.body
  todos.push(newTodo)
  res.json(newTodo)
})

// Read all todos
app.get('/todos', (req, res) => {
  res.json(todos)
})

// Update a todo
app.put('/todos/:id', (req, res) => {
  const id = req.params.id
  const updatedTodo = req.body
  todos[id] = updatedTodo
  res.json(updatedTodo)
})

// Delete a todo
app.delete('/todos/:id', (req, res) => {
  const id = req.params.id
  const deletedTodo = todos.splice(id, 1)
  res.json(deletedTodo[0])
})

// for  start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
