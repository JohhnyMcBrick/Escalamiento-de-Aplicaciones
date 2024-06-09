const { Router } = require('express');
const {
    createTipoProyecto,
    getTipoProyectos,
    getTipoProyectoById,
    updateTipoProyecto,
    deleteTipoProyecto
} = require('../controllers/tipoProyecto');

const router = Router();

router.post('/', createTipoProyecto);

router.get('/', getTipoProyectos);

router.get('/:id', getTipoProyectoById);

router.put('/:id', updateTipoProyecto);

router.delete('/:id', deleteTipoProyecto);

module.exports = router;
