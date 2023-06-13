import pool from '../pages/api/dbConexion/dbConexion';

// Función para crear un técnico en la base de datos
export const createTechnician = async (technicianData: any) => {

  try {
    const { name, age, specialty } = technicianData;

    const client = await pool.connect();

    const createTechnicianQuery = `
      INSERT INTO technicians (name, age, specialty)
      VALUES ($1, $2, $3)
      RETURNING *
    `;

    const values = [name, age, specialty];

    const result = await client.query(createTechnicianQuery, values);

    client.release();

    return result.rows[0];
  } catch (error) {
    console.error('Error al crear el técnico:', error);
    throw error;
  }
};

// Función para obtener todos los técnicos de la base de datos
export const getTechnicians = async () => {
  try {
    const client = await pool.connect();

    const getTechniciansQuery = `
      SELECT * FROM technicians
    `;

    const result = await client.query(getTechniciansQuery);

    client.release();

    return result.rows;
  } catch (error) {
    console.error('Error al obtener los técnicos:', error);
    throw error;
  }
};

// Función para actualizar un técnico en la base de datos
export const updateTechnician = async (technicianData: any) => {
  try {
    const { id, name, age, specialty } = technicianData;

    const client = await pool.connect();

    const updateTechnicianQuery = `
      UPDATE technicians
      SET name = $1, age = $2, specialty = $3
      WHERE id = $4
      RETURNING *
    `;

    const values = [name, age, specialty, id];

    const result = await client.query(updateTechnicianQuery, values);

    client.release();

    return result.rows[0];
  } catch (error) {
    console.error('Error al actualizar el técnico:', error);
    throw error;
  }
};

// Función para eliminar un técnico de la base de datos
export const deleteTechnician = async (technicianId: string) => {
  try {
    const client = await pool.connect();

    const deleteTechnicianQuery = `
      DELETE FROM technicians
      WHERE id = $1
    `;

    const values = [technicianId];

    await client.query(deleteTechnicianQuery, values);

    client.release();
  } catch (error) {
    console.error('Error al eliminar el técnico:', error);
    throw error;
  }
};

// Función para obtener un técnico por su ID
export const getTechnicianById = async (technicianId: string) => {
    try {
      const client = await pool.connect();
  
      const getTechnicianQuery = `
        SELECT * FROM technicians
        WHERE id = $1
      `;
  
      const values = [technicianId];
  
      const result = await client.query(getTechnicianQuery, values);
  
      client.release();
  
      if (result.rows.length === 0) {
        throw new Error(`No se encontró ningún técnico con el ID ${technicianId}`);
      }
  
      return result.rows[0];
    } catch (error) {
      console.error(`Error al obtener el técnico con el ID ${technicianId}:`, error);
      throw error;
    }
  };
  
