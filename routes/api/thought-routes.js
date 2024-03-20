const router = require('express').Router();

const {
    getThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
} = require("../../controllers/thought-controller");


router.route("/".get(getThoughts).post(createThought));


router.route("/:id").get(getThoughtById).put(updateThought).delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReac)