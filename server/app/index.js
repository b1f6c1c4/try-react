const express = require('express');
const cors = require('cors');
const nocache = require('nocache');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportJWT = require('passport-jwt');

const router = express.Router();

const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;
const jwtOptions = {
  issuer: 'try-react',
  audience: 'try-react',
  expiresIn: '2h',
};
const pjwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 's3cReT',
  ignoreExpiration: false,
  maxAge: '2h',
  jsonWebTokenOptions: jwtOptions,
};

passport.use(new JwtStrategy(pjwtOptions, (payload, done) => {
  if (payload.id.length < 4) {
    return done(new Error('User not exist'), null);
  }

  return done(null, { id: payload.id });
}));

router.use(cors({
  origin: '*',
  methods: ['HEAD', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
}));

router.use(nocache(), bodyParser.json(), passport.initialize());

router.get('/', (req, res) => res.json({}));

router.post('/login', (req, res) => {
  const payload = {
    username: req.body.username,
  };
  const token = jwt.sign(payload, pjwtOptions.secretOrKey, jwtOptions);
  res.json({
    message: 'ok',
    token,
  });
});

router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => res.status(200).json(req.user));

router.get('*', (req, res) => res.status(501).send());

module.exports = router;
