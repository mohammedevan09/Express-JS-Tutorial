const users = require('../models/users.model')
const { v4: uuid4 } = require('uuid')

const getAllUsers = (req, res) => {
  res.status(200).json({ users })
  res.send()
}

const createUser = (req, res) => {
  const newUser = {
    id: uuid4(),
    username: req.body.username,
    email: req.body.email,
  }
  users.push(newUser)
  res.status(200).json(users)
}

const updateUser = (req, res) => {
  const id = req.params.id
  const { username, email } = req.body
  users
    .filter((user) => user.id === id)
    .map((selectedUser) => {
      selectedUser.username = username
      selectedUser.email = email
    })
  res.status(201).json(users)
}

const deleteUser = (req, res) => {
  const id = req.params.id
  const newUsers = users.filter((user) => user.id !== id)
  res.status(200).json(newUsers)
}

module.exports = { getAllUsers, createUser, updateUser, deleteUser }
