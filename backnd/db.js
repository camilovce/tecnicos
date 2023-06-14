"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
// Configuración de la conexión a la base de datos
var pool = new pg_1.Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    database: process.env.DB_NAME,
});
exports.default = pool;
