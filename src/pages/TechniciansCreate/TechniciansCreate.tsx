import React, { useEffect, useState } from 'react';
import { Technician } from '../../interfaces/Technicians';
import { getAllTechnicians } from '../../pages/api/techniciansApi';
import { Activity } from '../../interfaces/Activity';
import { getAllActivities } from '../api/activityApi';
import { Pool } from 'pg';
import Table from 'react-bootstrap';
import { createTables } from '../../utils/createTables';

const TechnicianPage: React.FC = () => {
  const [technicians, setTechnicians] = useState<Technician[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    loadTechnicians();
    loadActivities();
    createTables();
  }, []);

  
  const loadTechnicians = async () => {
    try {
      const response = await getAllTechnicians();
      setTechnicians(response);
    } catch (error) {
      console.log('Error loading technicians:', error);
    }
  };

  const loadActivities = async () => {
    try {
      const response = await getAllActivities();
      setActivities(response);
    } catch (error) {
      console.log('Error loading activities:', error);
    }
  };

  return (
    <div>
      <h1>Gestión de Técnicos</h1>
      <h2>Técnicos</h2>
      <ul>
        {technicians.map((technician) => (
          <li key={technician.id}>{technician.name} - {technician.status ? 'Activo' : 'Inactivo'}</li>
          
        ))}
      </ul>

      <h2>Actividades realizadas</h2>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Descripción</th>
            <th>Orden de Servicio</th>
            <th>Cliente</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <tr key={activity.id}>
              <td>{activity.date.toDateString()}</td>
              <td>{activity.description}</td>
              <td>{activity.serviceOrder}</td>
              <td>{activity.client}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TechnicianPage;
