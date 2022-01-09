const express = require('express');
const authRoutes = require('./auth.routes');
const voterRoutes = require('./voterData.routes');
const electionRoutes = require('./election_data.routes');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/auth',
        route: authRoutes,
    },
    {
        path: '/voter',
        route: voterRoutes,
    },
    {
        path: '/election',
        route: electionRoutes
    }
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;