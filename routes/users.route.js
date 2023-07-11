const router = require('express').Router()
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} = require('../Controllers/users.controller')

router.get('/', getAllUsers)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router
