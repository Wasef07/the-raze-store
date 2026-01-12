import jwt from "jsonwebtoken";
const secretKey =process.env.JWT_SECRET
class JwtProvider{
    constructor(secrertKey){
        this.secrertKey=secrertKey;
    }
    createJwt(payload){
        return jwt.sign(payload, this.secrertKey,{expiresIn:"24h"})
    }
    getEmailFromJwt(token){
        try{
            const decodedToken = jwt.verify(token,this.secrertKey)
            return decodedToken.email
        }catch(err){
            throw new Error("Invalid Token");
        }
    }

    verifyJwt(token){
        try{
            return jwt.verify(token,this.secrertKey)
        }catch(err){
            throw new Error("Invalid Token");
        }
    }
}

export default new JwtProvider(secretKey);