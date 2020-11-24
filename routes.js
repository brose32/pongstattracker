const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/apiTest', controller.apiTest);
router.get('/leaderboard', controller.leaderboard);
router.put('/update/username=:username&cups=:c&finalcup=:fc&shots=:s', controller.updateStats);
router.put('/update/:username', controller.updateStats);
router.get('/profiles/:username', controller.playerProfile);
router.post('/addProfile/username=:username&name=:name', controller.createNewUser);
router.delete('/deleteProfile/:username', controller.deleteProfile);

module.exports = router;