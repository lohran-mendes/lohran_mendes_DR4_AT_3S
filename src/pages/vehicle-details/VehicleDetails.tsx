import type { Vehicle } from "../../types/vehicle.types";
import "./styles.css";

import { useNavigate, useParams } from "react-router";

type VehicleDetailsProps = {
  vehicle: Vehicle[];
};

export function VehicleDetails({ vehicle }: VehicleDetailsProps) {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  const selectedVehicle = vehicle.find((v) => v.licensePlate === id);

  return (
    <section className="vehicle-details-page">
      <div className="header-title">
        <h1>
          Visualizando dados do veículo <br />
          placa/ID: <span className="vehicle-plate">{id}</span>
        </h1>
        <button onClick={() => navigate(-1)}>Voltar para a lista</button>
      </div>
      <div className="vehicle-card">
        <div className="vehicle-info">
          <span className="vehicle-label">Marca</span>
          <span className="vehicle-value">{selectedVehicle?.brand}</span>
        </div>
        <div className="vehicle-info">
          <span className="vehicle-label">Modelo</span>
          <span className="vehicle-value">{selectedVehicle?.model}</span>
        </div>
        <div className="vehicle-info">
          <span className="vehicle-label">Placa</span>
          <span className="vehicle-plate">{selectedVehicle?.licensePlate}</span>
        </div>
      </div>
    </section>
  );
}
