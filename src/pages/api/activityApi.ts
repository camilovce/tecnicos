import { Activity } from '../../interfaces/Activity';

// Simulación de datos hardcodeados
const activities: Activity[] = [
  { id: 1, technicianId: 1, date: new Date(), description: 'Reparación de hardware', serviceOrder: 'SO-001', client: 'Empresa XYZ' },
  { id: 2, technicianId: 2, date: new Date(), description: 'Configuración de software', serviceOrder: 'SO-002', client: 'Empresa ABC' },
  { id: 3, technicianId: 1, date: new Date(), description: 'Instalación de redes', serviceOrder: 'SO-003', client: 'Empresa DEF' },
  
];

export const getAllActivities = (): Promise<Activity[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(activities);
    }, 1000);
  });
};
