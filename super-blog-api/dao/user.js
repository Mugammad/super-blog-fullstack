const db = require('../db/db')

class UserDAO {
    async createUser(username, email, password, next) {
        try {
            const [id] = await db('user')
                .insert({
                    username,
                    email,
                    password
                })
                .returning('id')

            return id

        } catch (error) {
            return next(error)
        }
    }
    async getUsers() {
        const [id] = await db('user')
            .select(
                'username'
            )
            .returning('id')

        return id
    }
}

module.exports = new UserDAO()