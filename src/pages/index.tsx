import React from 'react';
import Link from 'next/link';
import { Container, ListGroup } from 'react-bootstrap';
import styles from '../styles/home.module.css';
import { title } from 'process';

const HomePage: React.FC = () => {
  return (<>
    <Container className={`${styles.container} my-5`}>
      <h1 className="mb-4">Bienvenido a la aplicación de gestión de técnicos de soporte</h1>
      <h3 className='m-1'>Selecciona una opción:</h3>
      <ListGroup>
        <ListGroup.Item>
          <Link href="/TechniciansCreate">
            Gestión de Técnicos
          </Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link href="/activities">
            Gestión de Actividades
          </Link>
        </ListGroup.Item>
      </ListGroup>
    </Container>
    </>
  );
};

export default HomePage;
