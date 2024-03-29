const express = require('express');
const router = express.Router();

const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');


router.use("/api/users", userRoutes);
router.use("/api/thoughts", thoughtRoutes);

module.exports = router;