import { NextApiRequest, NextApiResponse } from 'next';
import pool from './dbConexion/dbConexion';

// Ejemplo de una API que obtiene todos los técnicos de la base de datos
const getAllTechnicians2 = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM technicians');
    const technicians = result.rows;
    client.release();
    res.status(200).json(technicians);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving technicians' });
  }
};

export default getAllTechnicians2;
