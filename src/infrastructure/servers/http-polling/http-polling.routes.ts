import express from 'express';
import { getClientes, getCliente, createCliente } from '../../controllers/cliente.controller';

const router = express.Router();

router.get('/clientes', getClientes);
router.get('/clientes/:id', getCliente);
router.post('/clientes', createCliente);

export default router;
