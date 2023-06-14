import express from 'express';
import {
  getAllTechnicians,
  getTechnicianById,
  createTechnician,
  updateTechnician,
  deleteTechnician,
} from './techniciansController';

const router = express.Router();

router.get('/technicians', getAllTechnicians);
router.get('/technicians/:id', getTechnicianById);
router.post('/technicians', createTechnician);
router.put('/technicians/:id', updateTechnician);
router.delete('/technicians/:id', deleteTechnician);

export default router;
