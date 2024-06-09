const { Router } = require('express');
const {
    createEtapa,
} = require('../controllers/etapa');

const router = Router();

router.post('/', createEtapa);

module.exports = router;
