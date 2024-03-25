const { User, Thought } = require("../models")

const userController = {
    getAllUser(req, res) {
        User.find({})
        .populate({
            path: 'friends',
            select: '-__v'
        })
        .select('-__v')
        .sort({ _id: -1})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },
    createUser(req, res) {
        User.create(req.body)
        // .populate({
        //     path: 'reactions',
        //     select: '-__v'
        // })
        // .select('-__v')
        // .sort({ _id: -1})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },
    };

    module.exports = userController;