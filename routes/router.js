const express = require('express');
const router = express.Router();
const kmy = require('../controller/KmyController'); //PATH


router.get('/', kmy.index); //YUNG KASAMA NG KMY HERE IS KUNG ANO NAME NG METHOD SA CONTROLLER
router.get('/personalinfo', kmy.personalinfo);
router.get('/social', kmy.social);
router.get('/gameinfo', kmy.gameinfo);
router.get('/special', kmy.special);  //THE SLASH IS THE ROUTE WHEN YOU TYPE THE KEYWORDS IN THE ADDRESS BAR

module.exports = router;