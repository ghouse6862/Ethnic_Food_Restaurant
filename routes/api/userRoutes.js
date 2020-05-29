const router = require('express').Router();


router.get('/', async (req, res) => {
    
    res.send("done");
});

module.exports = router;