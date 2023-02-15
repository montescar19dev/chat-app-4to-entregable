const userServices = require('./users.services')

const router = require('express').Router()

router.get('/', userServices.getAllUsers)

router.post('/', userServices.postNewUser)

router.get('/:id', userServices.getUserById)

router.patch('/:id', userServices.patchUser)

router.put('/:id', userServices.putUser)

router.delete('/:id', userServices.deleteUser)

module.exports = router

