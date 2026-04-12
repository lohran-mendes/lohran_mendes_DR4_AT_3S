import "./styles.css";

import { useParams } from "react-router";

export function VehicleDetails() {
    const { id } = useParams<{ id: string }>();

  return <section className="vehicle-details-page">
    <h1>Visualizando dados do veículo da placa/ID: {id}</h1>
  </section>;
}
