const userDAO = require('../dao/user')
const bcrypt = require('bcrypt')

class UserService {
    async createUser(userDto, next) {
        const { username, email, password } = userDto
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password, salt)

        return userDAO.createUser(username, email, hashedPassword, next)
    }
    async getUsers() {
        return userDAO.getUsers()
    }
    async signIn(userDto, next) {
        const { email, password } = userDto
        try {
            const user = await userDAO.signIn(email, next)
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) throw "password is invalid"
            return userDAO.signIn(email, next)
        } catch (error) {
            return next(error)
        }
    }
}

module.exports = new UserService()