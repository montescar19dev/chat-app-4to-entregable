const Users = require('../models/users.models')


const findAllUsers = async () => {

    const data = await Users.findAll({
        attributes: ['id', 'first_name', 'last_name', 'email', 'password', 'profile_image', 'is_active', 'phone']
    })

    return data
}

const findUserById = async (id) => {


    const data = await Users.findOne({
        where: {
            id : id

        }
    })
    return data
}


const createNewUser = async (userData) => {

    const newUser = {
        first_name: userData.first_name,
        last_name: userData.last_name,
        email: userData.email,
        password: userData.password,
        profile_image: userData.profile_image,
        is_active: userData.is_active,
        phone: userData.phone
    }

    const data = await Users.create(newUser)
    return data
}


const updateUser = async (id, userInfo) => { //? pendiente donde hay otro elemento similar a productObj en demas archivos
    const data = await Users.update(userInfo, {
        where: {
            id : id
        }
    })
    return data

}

const deleteUser = async (id) => {
    const data = await Users.destroy({
        where: {
            id: id
        }
    })
    return data
}

module.exports = {
    findAllUsers,
    findUserById,
    createNewUser,
    updateUser,
    deleteUser
}

