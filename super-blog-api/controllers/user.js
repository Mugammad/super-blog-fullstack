const userService = require('../service/user')
const jwt = require('jsonwebtoken')

class UserController {
    async createUser(req, res, next) {
        try {
            const id = await userService.createUser(req.body, next)
            res.status(201).json(id)
        } catch (error) {
            console.error(error)
        }
    }
    async getUsers(req, res) {
        try {
            const id = await userService.getUsers()
            res.status(201).json(id)
        } catch (error) {
            res.status(401).json({ message: error })
        }
    }
    async signIn(req, res, next) {
        try {
            const user = await userService.signIn(req.body, next)
            let payload = null
            if (user) {
                payload = { // This is what will be returned if have correct token (User id get's returned so that we can search user within our database)
                    user: {
                        id: user.id,
                    },
                };
            }

            if (payload) {
                jwt.sign(
                    payload,
                    process.env.SECRET, // Gets secret in default.json (config handles the functionality to fetch secret)
                    {
                        expiresIn: '2d', // 2 days
                    },
                    (err, token) => {
                        if (err) return next(err);
                        res.status(200).json({ id: user.id, token }); // Returna user's ID and access token
                    }
                );
            }
        } catch (error) {
            return next(error)
        }
    }
}

module.exports = new UserController()