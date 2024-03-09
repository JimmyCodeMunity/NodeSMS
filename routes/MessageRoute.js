const express = require('express');
const cors = require('cors');
const { SendMessage } = require('../controllers/MessageSend');


const router = express.Router();
router.use(express.json());


//allow url encoded
router.use(express.urlencoded({extended:false}));

router.get('/sendmessage',SendMessage);

module.exports = router;