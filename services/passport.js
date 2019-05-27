const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const mongoose = require('mongoose');
const User = mongoose.model('user');
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
                clientSecret: 'cYsEiZr9JjU3KZ8sxt3lF_FiW',
                callbackURL: 'http://localhost:8082/auth/callback',
                scope: ['openid', 'email', 'https://www.googleapis.com/auth/calendar'],
            },
            function(accessToken, refreshToken, profile, done) {
                profile.accessToken = accessToken;
                return done(null, profile);
            },
        ),
    );
};
