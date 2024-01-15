
const { users } = require('./user.data')

const getAllUsers = () => {
    let notEmptyUsers = users.filter(user => Boolean(user))
    return notEmptyUsers
}

const getUserById = (id) => {
    let foundUser = users.find(user => user.id == id)
    return foundUser
}

const deleteUser = (id) => {
    let foundUser = users.findIndex(user => user.id == id)
    if (foundUser === -1)
        throw "User not found"
    delete users[foundUser]
    return "User deleted"
}

const updateUser = (id, data) => {
    try {

        let userIndex = users.findIndex(user => user.id == id)
        if (userIndex === -1) throw 'User does not exist'

        const validKeys = [
            "firstName",
            "lastName",
            "dateOfBirth",
            "email"]
        const areKeysValid = Object.keys(data).every(key => validKeys.includes(key));
        console.log(areKeysValid);
        if (!areKeysValid) throw 'Invalid data inputted'

        users[userIndex] = { ...users[userIndex], ...data }
    } catch (error) {
        throw error
    }
}

const createUser = (data) => {
    const validKeys = [
        "firstName",
        "lastName",
        "dateOfBirth",
        "email"]
    if (Object.keys(data).length !== 4) throw "Missing Data"
    const areKeysValid = Object.keys(data).every(key => validKeys.includes(key))

    if (!areKeysValid) throw "Invalid data input"
    if (users.find(user => user.email === data.email)) throw "User already exists"

    let newUser = { ...data, id: generateId(data.email) }
    users.push(newUser)
    return "New User Created"



}

const generateId = (email) => {
    return email + 34276574258
}

module.exports = { getAllUsers, getUserById, deleteUser, updateUser, createUser }

