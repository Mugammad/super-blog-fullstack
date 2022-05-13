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
    async signIn(email, next){
        try {
            const [user] = await db('user')
                .from('user')
                .where('email', email)
                .returning('user')

            return user
        } catch (error) {
            next(error)
        }
    }
    async getUsers() {
        const users = await db('user')
            .select(
                'username'
            )
            .returning('id')

        return users
    }
}

module.exports = new UserDAO()