// user do something ->  ?isUser if yes -> next()
const isUser = (req, res, next) => {
    const {email, name, password} = req.body
    if (req.path === "/register") {
        if (![email, name, password].every(Boolean)){
            return res.json("Missing Credentials")

        } else if (req.path === "/login"){
            if (![email, password].every(Boolean)){
                return res.json("Missing Credentials")
                
            }
        }
    }
    next()
}
module.exports = isUser