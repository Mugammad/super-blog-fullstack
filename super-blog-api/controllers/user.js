const userService = require('../service/user')

class UserController {
    async createUser(req, res, next)  {
        try {
            const id = await userService.createUser(req.body, next)
            res.status(201).json(id)
        } catch (error) {
            console.error(error)
        }
    }
    async getUsers(req, res)  {
        try {
            const id = await userService.getUsers()
            res.status(201).json(id)
        } catch (error) {
            res.status(401).json({message: error})
        }
    }
}

module.exports = new UserController()