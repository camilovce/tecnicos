import React, { useEffect, useState } from "react";
import { Technician } from "../../interfaces/Technicians";
import { getAllTechnicians } from "../../pages/api/techniciansApi";
import { Activity } from "../../interfaces/Activity";
import { getAllActivities } from "../api/activityApi";
import { Pool } from "pg";
import { useRouter } from 'next/router';
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { createTables } from "../../utils/createTables";
import { getTechnicians } from "../api/techniciansApi2";
import styles from "./TechniciansCreate.module.css";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

const TechnicianPage: React.FC = () => {
  const [technicians, setTechnicians] = useState<Technician[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [value, setValue] = useState<number[]>([1, 3]);
  const router = useRouter();

  useEffect(() => {
    loadTechnicians();
    loadActivities();
  }, []);

  const handleChange = (val: number[]) => setValue(val);

  const loadTechnicians = async () => {
    try {
      const response = await getAllTechnicians();
      setTechnicians(response);
    } catch (error) {
      console.log("Error loading technicians:", error);
    }
  };

  const loadActivities = async () => {
    try {
      const response = await getAllActivities();
      setActivities(response);
    } catch (error) {
      console.log("Error loading activities:", error);
    }
  };
  const handleGoBack = () => {
    router.back();
  };

  return (
    <>
      <header className={"m-1 p-2"}>
        <div
          className={`d-flex justify-content-between align-items-center mb-4 ${styles.header}`}
        >
          <h1 className={`mb-0 ${styles.title}`}>Gestión de Técnicos</h1>
        </div>
      </header>
      <nav className={"d-flex justify-content-between"}>
        <ToggleButtonGroup
          type="checkbox"
          value={value}
          onChange={handleGoBack}
        >
          <ToggleButton id="tbg-btn-1" value={1}>
            Regresar
          </ToggleButton>
        </ToggleButtonGroup>
      </nav>

      <div className={`${styles.container} m-2 p-3`}>
        <div className={`table-responsive ${styles.tableWrapper}`}>
          <Table
            className={`table table-bordered table-striped ${styles.table}`}
          >
            <thead>
              <tr>
                <th>Técnicos</th>
                <th>Estado</th>
                <th>Sucursal</th>
              </tr>
            </thead>
            <tbody>
              {technicians.map((technician) => (
                <tr key={technician.id}>
                  <td>{technician.name}</td>
                  <td>{technician.status ? "Activo" : "Inactivo"}</td>
                  <td>{technician.branch}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        <h2 className={`mt-4 mb-3 ${styles.activitiesTitle}`}>
          Actividades realizadas
        </h2>
        <div className={`table-responsive ${styles.tableWrapper}`}>
          <Table className={`table table-bordered ${styles.activitiesTable}`}>
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
          </Table>
        </div>
      </div>
    </>
  );
};

export default TechnicianPage;
