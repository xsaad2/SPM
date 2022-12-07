const express = require('express');
const router = express.Router();
const {checkAuthorization} = require('../middlewares/auth-middleware');

/*
    In this file is the routing for the REST-endpoints under /api managed
 */

const authApi = require('../apis/auth-api'); //api-endpoints are loaded from separate files
router.post('/login', authApi.login); //the function decides which request type should be accepted
router.delete('/login', checkAuthorization(),authApi.logout); //middlewares can be defined in parameters
router.get('/login', authApi.isLoggedIn); //the function, which handles requests is specified as the last parameter

const userApi = require('../apis/user-api');
router.get('/user', checkAuthorization(), userApi.getSelf);

const peopleDemoApi = require('../apis/people-demo-api');
router.get('/people', checkAuthorization(), peopleDemoApi.getPeople);

const salesApi = require('../apis/salesmen-api');
router.post('/addsalesman',salesApi.addSalesman);
router.put('/updatesalesman/:_id',salesApi.updateSalesMen);
router.get('/salesmen',salesApi.getSalesMen);
router.get('/salesman/byemail/:email',salesApi.getSalesManByEmail);
router.get('/salesman/byid/:_id',salesApi.getSalesManById);
router.get('/salesman/byname/:firstname/:lastname',salesApi.getSalesManByFirstAndLastName);
router.delete('/salesman/byid/:_id',salesApi.deleteSalesManById);
router.delete('/salesman/byname/:firstname/:lastname',salesApi.getSalesManByFirstAndLastName);

module.exports = router;