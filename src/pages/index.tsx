import React from 'react';
import Link from 'next/link';
import { Container, ListGroup } from 'react-bootstrap';
import styles from '../styles/home.module.css';

const HomePage: React.FC = () => {
  return (
    <>
      <header className={`${styles.header} p-0 text-center`}>
        <h1 className={`${styles.title} mx-auto rounded border border-primary bg-light rounded-pill`}>
          Bienvenido a la aplicación de gestión de técnicos de soporte
        </h1>
        <h3 className="m-1">Selecciona una opción:</h3>
      </header>
      <Container className={`my-5 p-0 text-center`}>
        <ListGroup className={'w-100 mx-auto'}>
          <ListGroup.Item>
            <Link href="/TechniciansCreate">Gestión de Técnicos</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link href="/ActivitiesCreate">Gestión de Actividades</Link>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </>
  );
};

export default HomePage;
