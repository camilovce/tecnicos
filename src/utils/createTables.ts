// Función para obtener todos los técnicos de la base de datos
import pool from "../pages/api/dbConexion/dbConexion";

const executeQuery = async (query: string) => {
  const client = await pool.connect();

  try {
    await client.query(query);
  } catch (error) {
    console.error("Error al ejecutar la consulta:", error);
  } finally {
    client.release();
  }
};

export const createTables = async () => {
  const createTechniciansTableQuery = `
      CREATE TABLE technicians (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        age INTEGER NOT NULL,
        specialty VARCHAR(100) NOT NULL
      );
    `;

  const createActivitiesTableQuery = `
      CREATE TABLE activities (
        id SERIAL PRIMARY KEY,
        date DATE NOT NULL,
        description TEXT NOT NULL,
        service_order VARCHAR(100) NOT NULL,
        client VARCHAR(100) NOT NULL
      );
    `;

  await executeQuery(createTechniciansTableQuery);
  await executeQuery(createActivitiesTableQuery);
};
