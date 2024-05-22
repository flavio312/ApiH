"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const cliente_entity_1 = require("../../domain/entities/cliente.entity");
const habitacion_entity_1 = require("../../domain/entities/habitacion.entity");
const reserva_entity_1 = require("../../domain/entities/reserva.entity");
const pago_entity_1 = require("../../domain/entities/pago.entity");
const servicio_entity_1 = require("../../domain/entities/servicio.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'hexagonal',
    synchronize: true,
    logging: false,
    entities: [cliente_entity_1.Cliente, habitacion_entity_1.Habitacion, reserva_entity_1.Reserva, pago_entity_1.Pago, servicio_entity_1.Servicio],
    migrations: [],
    subscribers: [],
});
