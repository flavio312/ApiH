"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_connection_1 = require("../../database/database.connection");
const http_polling_routes_1 = __importDefault(require("./http-polling.routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use('/api', http_polling_routes_1.default);
(0, database_connection_1.connectDatabase)()
    .then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor HTTP de polling corriendo en http://localhost:${PORT}`);
    });
})
    .catch((error) => console.error('Error al conectar con la base de datos:', error));
