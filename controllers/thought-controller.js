const { Thought, User } = require("../models")

const thoughtController = {

    getThoughts(req, res) {
        Thought.find({})
        .populate({
            path: 'reactions',
            select: '-__v'
        })
        .select('-__v')
        .sort({ _id: -1})
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },

    getThoughtById ({ params }, res) {
        Thought.findOne({ _id: params.id})
    }
}