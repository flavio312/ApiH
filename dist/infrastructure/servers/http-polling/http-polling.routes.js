"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cliente_controller_1 = require("../../controllers/cliente.controller");
const router = express_1.default.Router();
router.get('/clientes', cliente_controller_1.getClientes);
router.get('/clientes/:id', cliente_controller_1.getCliente);
router.post('/clientes', cliente_controller_1.createCliente);
exports.default = router;
