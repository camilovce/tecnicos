import { Technician } from '../../interfaces/Technicians';

export const getAllTechnicians = (): Promise<Technician[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const technicians: Technician[] = [
        { id: 1, name: 'Técnico 1', branch: 'Sucursal A', status : true },
        { id: 2, name: 'Técnico 2', branch: 'Sucursal B', status : false },
        { id: 3, name: 'Técnico 3', branch: 'Sucursal C', status : true },
      ];
      resolve(technicians);
    }, 1000);
  });
};
