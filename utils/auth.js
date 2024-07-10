const auth = async(req, res, next) => {
    if(req.method === "GET"){
        return next()
    }
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbmFtaUBlbWFpbC5jb20iLCJpYXQiOjE3MjA1ODExOTMsImV4cCI6MTcyMDY2Mzk5M30.fSA_tfubSZ_jAwA28d3-PcziKPySCU2jg4m5M8uRMG8"
    //await req.headers.authorization.split("")[1]
    if(!token){
        return res.status(400).json({message:"トークンがありません"})
    }
    try{
        const decoded = jwt.verify(token, secret_key)
        req.body.email = decoded.email
        return next()
    }catch(err){
        return res.status(400).json({message:"トークンが正しくないので、ログインしてください"})
    }
}
const jwt = require("jsonwebtoken")
const secret_key = "mern-market"
module.exports = auth
