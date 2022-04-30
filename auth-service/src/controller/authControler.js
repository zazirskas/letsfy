var jwt = require('jsonwebtoken');

class UserAuthController {
    static async store(req, res) {   
        console.log('chegou')
        console.log(req.headers)     
        try{
            const { headers } = req;
            const token = headers['authorization'].split(' ')[1];
            const { id, role } = jwt.verify(token, process.env.SECRET_KEY);
            console.log('id', role )
            const responser = { ...headers, id, role };
            res.status(200).json(responser)
        } catch (error) {
            res.status(401).json({ error, error });
        }
    }

}

module.exports = UserAuthController;

