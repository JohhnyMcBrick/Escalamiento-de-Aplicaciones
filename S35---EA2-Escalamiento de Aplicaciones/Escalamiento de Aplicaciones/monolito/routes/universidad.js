const { Router } = require('express');
const {
    createUniversidad,
} = require('../controllers/universidad');

const router = Router();

router.post('/', createUniversidad);

module.exports = router;
