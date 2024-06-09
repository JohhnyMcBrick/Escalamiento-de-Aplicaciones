const { Router } = require('express');
const {
    createProyecto, getProyecto,
} = require('../controllers/proyecto');

const router = Router();

router.post('/', createProyecto);
router.get('/', getProyecto)

module.exports = router;
