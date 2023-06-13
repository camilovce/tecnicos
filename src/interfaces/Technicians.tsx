export interface Technician {
    id: number;
    name: string;
    branch: string;
    status: boolean;
    // Otros atributos
  }
  
  export const technicians: Technician[] = [
    { id: 1, name: 'Técnico 1', branch: 'Sucursal A', status : true },
    { id: 2, name: 'Técnico 2', branch: 'Sucursal B', status : false },
    { id: 3, name: 'Técnico 3', branch: 'Sucursal C', status : true },
  ];
  
  export interface Branch {
    id: number;
    name: string;
  }
  
  export const branches: Branch[] = [
    { id: 1, name: 'Sucursal A' },
    { id: 2, name: 'Sucursal B' },
    { id: 3, name: 'Sucursal C' },
  ];
  
  export interface Activity {
    id: number;
    date: string;
    description: string;
    serviceOrder: string;
    client: string;
    // Otros atributos
  }
  
  export const activities: Activity[] = [
    {
      id: 1,
      date: '2023-06-01',
      description: 'Actividad 1',
      serviceOrder: 'Orden 1',
      client: 'Cliente 1',
    },
    {
      id: 2,
      date: '2023-06-02',
      description: 'Actividad 2',
      serviceOrder: 'Orden 2',
      client: 'Cliente 2',
    },
    {
      id: 3,
      date: '2023-06-03',
      description: 'Actividad 3',
      serviceOrder: 'Orden 3',
      client: 'Cliente 3',
    },
  ];
  