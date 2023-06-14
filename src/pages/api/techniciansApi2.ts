import { PoolClient } from 'pg';
import pool from './dbConexion/dbConexion';

// Función para obtener todos los técnicos de la base de datos
export const getTechnicians = async (): Promise<any[]> => {
  let client: PoolClient | null = null;
  try {
    client = await pool.connect();
    const result = await client.query('SELECT * FROM technicians');
    const technicians = result.rows;
    return technicians;
  } catch (error) {
    console.error('Error al obtener los técnicos:', error);
    throw error;
  } finally {
    if (client) {
      client.release();
    }
  }
};

// Función para crear un técnico en la base de datos
export const createTechnician = async (technicianData: any): Promise<any> => {
  let client: PoolClient | null = null;
  try {
    const { name, age, specialty } = technicianData;
    client = await pool.connect();
    const createTechnicianQuery = `
      INSERT INTO technicians (name, age, specialty)
      VALUES ($1, $2, $3)
      RETURNING *
    `;
    const values = [name, age, specialty];
    const result = await client.query(createTechnicianQuery, values);
    return result.rows[0];
  } catch (error) {
    console.error('Error al crear el técnico:', error);
    throw error;
  } finally {
    if (client) {
      client.release();
    }
  }
};

// Función para actualizar un técnico en la base de datos
export const updateTechnician = async (technicianData: any): Promise<any> => {
  let client: PoolClient | null = null;
  try {
    const { id, name, age, specialty } = technicianData;
    client = await pool.connect();
    const updateTechnicianQuery = `
      UPDATE technicians
      SET name = $1, age = $2, specialty = $3
      WHERE id = $4
      RETURNING *
    `;
    const values = [name, age, specialty, id];
    const result = await client.query(updateTechnicianQuery, values);
    return result.rows[0];
  } catch (error) {
    console.error('Error al actualizar el técnico:', error);
    throw error;
  } finally {
    if (client) {
      client.release();
    }
  }
};

// Función para eliminar un técnico de la base de datos
export const deleteTechnician = async (technicianId: string): Promise<void> => {
  let client: PoolClient | null = null;
  try {
    client = await pool.connect();
    const deleteTechnicianQuery = `
      DELETE FROM technicians
      WHERE id = $1
    `;
    const values = [technicianId];
    await client.query(deleteTechnicianQuery, values);
  } catch (error) {
    console.error('Error al eliminar el técnico:', error);
    throw error;
  } finally {
    if (client) {
      client.release();
    }
  }
};
