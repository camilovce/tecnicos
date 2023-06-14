import React, { useEffect, useState } from "react";
import { Activity } from "../../interfaces/Activity";
import { getAllActivities } from "../api/activityApi";
import { useRouter } from 'next/router';
import { Table } from "react-bootstrap";
import styles from "./ActivitiesCreate.module.css";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

const ActivitiesPage: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const router = useRouter();
  const [value, setValue] = useState<number[]>([1, 3]);

  useEffect(() => {
    loadActivities();
  }, []);


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
          <h1 className={`mb-0 ${styles.title}`}>Gestión de Actividades</h1>
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
      
        <h1 className={`mt-4 mb-3 ${styles.activitiesTitle}`}>
          Lista de Actividades
        </h1>
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
      
    </>
  );
};

export default ActivitiesPage;
