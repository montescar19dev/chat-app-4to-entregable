const userControllers = require('./users.controllers')

const getAllUsers = (req, res) => {
    userControllers.findAllUsers()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const getUserById = (req, res) => {

    const id = Number(req.params.id)

    userControllers.findUserById(id)
        .then(data => {
            if(data){
                res.status(200).json(data)
            } else {
                res.status(404).json({message: 'User not found'})
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const postNewUser = (req, res) => {
    const userInfo = req.body 
    userControllers.createNewUser(userInfo)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const deleteUser = (req, res) => {
    const id = req.params.id 

    userControllers.deleteUser(id)
        .then(data => {
            if(data){
                res.status(204).json()
            } else {
                res.status(404).json({message: 'User not found'})
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const patchUser = (req, res) => {
    const id = req.params.id 
    const userInfo = req.body 
    userControllers.updateUser(id, userInfo)
        .then(data => {
            if(data){
                res.status(200).json({message: `User with id: ${id} updated succesfully`})
            } else {
                res.status(404).json({message: 'User not found'})
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const putUser = (req, res) => {
    const id = req.params.id 
    const userInfo = req.body 

    if(!userInfo.first_name || !userInfo.last_name || !userInfo.email || !userInfo.password || !userInfo.profile_image || !userInfo.is_active || !userInfo.phone){
        return res.status(400).json({
            message: 'Missing Data',
            example_fields: {
                first_name: 'String',
                last_name: 'String',
                email: 'String',
                password: 'String',
                profile_image: 'https:/google.com/image.png',
                is_active: 'Boolean',
                price: 123.123467
            }
        })
    }

    userControllers.updateUser(id, userInfo)
        .then(data => {
            if(data){
                res.status(200).json({message: `User with id: ${id} updated succesfully`})
            } else {
                res.status(404).json({message: 'User not found'})
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

module.exports = {
    getAllUsers,
    getUserById,
    postNewUser,
    deleteUser,
    patchUser,
    putUser
}

