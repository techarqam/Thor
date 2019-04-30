const passport = require('../passport');
const router = require('express').Router();
const Users = require('../model/user');
const Contact = require('../model/contact');
const jwt = require('express-jwt');
const getTokenFromHeaders = (req) => {
    const {
        headers: {
            authorization
        }
    } = req;

    if (authorization && authorization.split(' ')[0] === 'Bearer') {
        return authorization.split(' ')[1];
    }
    return null;
};
const auth = {
    required: jwt({
        secret: 'thor',
        userProperty: 'authUser',
        getToken: getTokenFromHeaders,
    }),
    optional: jwt({
        secret: 'thor',
        userProperty: 'authUser',
        getToken: getTokenFromHeaders,
        credentialsRequired: false,
    }),
};

//POST new user route (optional, everyone has access)
router.post('/', auth.optional, async (req, res, next) => {
    const {
        body: {
            user
        }
    } = req;
    const {
        _id: userId,
        contact: {
            _id: contactId
        }
    } = user;

    if (userId) {
        await Users.findByIdAndUpdate(userId, user);
        await Contact.findByIdAndUpdate(contactId, user.contact);

        return Users.findById(userId)
            .populate("contact")
            .then((user) => {
                if (!user) {
                    return res.sendStatus(400);
                }
                return res.json({
                    user: user.toProfileJSON()
                });
            });
    }

    if (!user.username) {
        return res.status(422).json({
            errors: {
                username: 'is required',
            },
        });
    }

    if (!user.password) {
        return res.status(422).json({
            errors: {
                password: 'is required',
            },
        });
    }

    const finalUser = new Users(user);

    finalUser.setPassword(user.password);

    return finalUser.save()
        .then(() => res.json({
            user: finalUser.toAuthJSON()
        }));
});

router.post('/resetpassword', auth.required, (req, res, next) => {
    const {
        body: {
            user
        }
    } = req;

    const {
        userName, newPassword
    } = user;

    const {
        authUser: {
            id
        }
    } = req;

    return Users.findById(id)
        .then((user) => {
            user.setPassword(newPassword);
            user.save().then(
                () => {
                    return res.json({
                        user: user.toAuthJSON()
                    });
                }
            )

        });
});

//POST login route (optional, everyone has access)
router.post('/login', auth.optional, (req, res, next) => {
    const {
        body: {
            user
        }
    } = req;

    if (!user.username) {
        return res.status(422).json({
            errors: {
                username: 'is required',
            },
        });
    }

    if (!user.password) {
        return res.status(422).json({
            errors: {
                password: 'is required',
            },
        });
    }

    return passport.authenticate('local', {
        session: false
    }, (err, passportUser, info) => {
        if (err) {
            return next(err);
        }

        if (passportUser) {
            const user = passportUser;
            user.token = passportUser.generateJWT();

            return res.json({
                user: user.toAuthJSON()
            });
        }

        return res.status(400).json(info);
    })(req, res, next);
});

//GET current route (required, only authenticated users have access)
router.get('/', auth.required, (req, res, next) => {
    const {
        authUser: {
            id
        }
    } = req;

    return Users.findById(id)
        .populate("contact")
        .then((user) => {

            if (!user) {
                return res.sendStatus(400);
            }

            return res.json({
                user: user.toProfileJSON()
            });
        });
});

module.exports = router;