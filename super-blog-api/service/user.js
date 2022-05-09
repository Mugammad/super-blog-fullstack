const userDAO = require('../dao/user')
const bcrypt = require('bcrypt')

class UserService {
    async createUser(userDto, next) {
        const {username, email, password} = userDto
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password, salt)

        return userDAO.createUser(username, email, hashedPassword, next)
    }
    async getUsers() {
        return userDAO.getUsers()
    }
}

module.exports = new UserService()