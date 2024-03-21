const express = require('express');
const router = express.Router();

const userRoutes = require('.routes/api/user-routes');
const thoughtRoutes = require('.routes/api/thought-routes');


router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

module.exports = router;