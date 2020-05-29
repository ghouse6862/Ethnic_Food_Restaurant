const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const auth = require('../../middleware/auth');
const {Users} = require('../../Schemas/Users');

router.get('/', async (req, res) => {
    
    res.send("done");
});

module.exports = router;