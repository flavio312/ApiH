"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCliente = exports.getCliente = exports.getClientes = void 0;
const cliente_use_case_1 = require("../../application/use-cases/cliente.use-case");
const cliente_repository_impl_1 = require("../../domain/repositories/cliente.repository.impl");
const cliente_service_1 = require("../../application/services/cliente.service");
const cliente_entity_1 = require("../../domain/entities/cliente.entity");
const clienteRepository = new cliente_repository_impl_1.ClienteRepositoryImpl();
const clienteService = new cliente_service_1.ClienteService(clienteRepository);
const clienteUseCase = new cliente_use_case_1.ClienteUseCase(clienteService);
const getClientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientes = yield clienteUseCase.obtenerTodosLosClientes();
    return res.json(clientes);
});
exports.getClientes = getClientes;
const getCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cliente = yield clienteUseCase.obtenerClientePorId(Number(id));
    if (cliente) {
        return res.json(cliente);
    }
    else {
        return res.status(404).json({ message: 'Cliente no encontrado' });
    }
});
exports.getCliente = getCliente;
const createCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, apellido, email, teléfono, dirección } = req.body;
    const nuevoCliente = new cliente_entity_1.Cliente();
    nuevoCliente.nombre = nombre;
    nuevoCliente.apellido = apellido;
    nuevoCliente.email = email;
    nuevoCliente.teléfono = teléfono;
    nuevoCliente.dirección = dirección;
    const resultado = yield clienteUseCase.crearCliente(nuevoCliente);
    return res.status(201).json(resultado);
});
exports.createCliente = createCliente;
