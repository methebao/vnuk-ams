const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const mongoose = require('mongoose');
const User = mongoose.model('user');
const UserRole = mongoose.model('userRole');

const opts = {};

opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';

module.exports = passport => {
    passport.use(
        new JWTStrategy(opts, (jwt_payload, done) => {
            User.findById(jwt_payload.id)
                .then(user => {
                    if (user) {
                        return done(null, user);
                    }
                    return done(null, false);
                })
                .catch(err => console.error(err));
        }),
    );
    passport.use(
        new GoogleStrategy(
            {
                clientID: '564110521914-7v0kehptulrjms4kug0h3tem2tqic3li.apps.googleusercontent.com',
                clientSecret: 'YsEiZr9JjU3KZ8sxt3lF_FiW',
                callbackURL: 'http://localhost:5000/api/users/auth/callback',
                scope: ['openid', 'email', 'https://www.googleapis.com/auth/calendar'],
            },
            async (accessToken, refreshToken, profile, done) => {
                const profileJSON = profile._json;
                const { email } = profileJSON;
                const existingUser = await User.findOne({ email });
                if (existingUser) {
                    existingUser.accessToken = accessToken;
                    existingUser.googleId = profile.id;
                    return done(null, existingUser);
                }
                const studentUserRole = await UserRole.findOne({ name: 'student' });
                const user = User({
                    _id: new mongoose.Types.ObjectId(),
                    googleId: profile.id,
                    fullName: profile.displayName,
                    email,
                    username: email,
                    isActive: true,
                    userRole: studentUserRole._id,
                }).save();
                user.accessToken = accessToken;
                return done(null, user);
            },
        ),
    );
};
