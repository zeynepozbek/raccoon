var express = require('express');
var router = express.Router();
var { User } = require('../schemas/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
    //var zeyno = new User({ email: 'zeyno@hmdsa.net', createDate: new Date() });
    //zeyno.save();

    User.find({ 'email': 'zeyno@hmdsa.net' }, 'email createDate', function (err, users) {
        if (err) return handleError(err);
        res.status(200).send(users);
    });
});

module.exports = router;
