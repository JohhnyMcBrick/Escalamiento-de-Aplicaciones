const { Router } = require('express');
const {
    createCliente,
    getCliente,
    getClienteById,
    updateCliente,
    deleteCliente,

} = require('../controllers/cliente');

const router = Router();

router.post('/', createCliente);

router.get('/', getCliente);

router.get('/:id', getClienteById)

router.put('/:id', updateCliente)

router.put('/:id', deleteCliente)



module.exports = router;
