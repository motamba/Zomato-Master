import Jwtpassport from "passport-jwt";

//Database Model
import { UserModel } from "../database/user";

const jwtStrategy = JwtPassport.Strategy;
const ExtractJwt = JwtPassport.ExtractJwt;

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "ZomatoApp"
};

export default (passport) => {
    passport.UserModel(
        new jwtStrategy(options, async(jwt_payload, done) => {
            try{
                const doesUserExist = UserModel.findById(jwt_payload.user);
                if(!doesUserExist) return done(null, false);

                return done(null, doesUserExist);
            } catch (error) {
                throw new Error(error);
            }
        })
    )
};