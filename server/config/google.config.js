import googleOAuth from "Passport-google-oauth20";

import {UserModel} from "../database/allModels"

const GoogleStrategy = googleOAuth.Strategy;

export default (passport) => {
    passport.use(
        new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:4000/auth/google/callback"
        }),
        async(accessToken, refreshToken, profile, done) => {


           //creating a new user
            const newUser = {
                fullname: profile.displayName,
                email: profile.email[0].value,
                profilePic: profile.photos[0].value
            };
            try{

                //check whether user exist
                constuser = await UserModel.findOne({email:newUser.email});

                //generating jwt token
                const token = user.generateJwtToken();
                if(user) {
                    done(null, {user, token});
                } else {

                    //creating a new user
                    const user = await UserModel.create(newUser);

                    //generating jwt token
                const token = user.generateJwtToken();

                    //return user
                    done(null, {user, token});
                }
            } catch(error) {
                done(error, null);
            }
        
        }
    )
    passport.serializiUser((userData,Done) => done(null, {...useData}));
    passport.deserializeUser((id, done) => done(null, id));
}
