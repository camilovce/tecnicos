import { Pool } from 'pg';

// Carga las variables de entorno desde el archivo .env
require('dotenv').config();

// Configuración de la conexión a la base de datos
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  database: process.env.DB_NAME,
});

export default pool;
