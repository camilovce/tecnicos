import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Bienvenido a la aplicación de gestión de técnicos de soporte</h1>
      <p>Selecciona una opción:</p>
      <ul>
        <li>
          <Link href="./TechniciansCreate">Gestión de Técnicos</Link>
        </li>
        <li>
          <Link href="/activities">Gestión de Actividades</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
