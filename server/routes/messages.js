const express = require('express');

const messagesRoutes = require('../controllers/messages_controller.js');

const router = express.Router();

router.get('/', messagesRoutes.getAll);

module.exports = router;
