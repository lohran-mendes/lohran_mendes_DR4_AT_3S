import { NavLink } from "react-router";
import type { Dispatch, SetStateAction } from "react";
import type { Vehicle } from "../../types/vehicle.types";
import "./styles.css";

type FleetDashboardProps = {
  vehicles: Vehicle[];
  setVehicles: Dispatch<SetStateAction<Vehicle[]>>;
};

export function FleetDashboard({ vehicles, setVehicles }: FleetDashboardProps) {
  function handleRemove(licensePlate: string) {
    const confirm = window.confirm(`Tem certeza que deseja remover o veículo com placa ${licensePlate}?`);
    if (!confirm) return;

    setVehicles((prev) => prev.filter((v) => v.licensePlate !== licensePlate));
  }

  return (
    <section className="fleet-dashboard-page">
      <h1>Veja os veículos disponíveis na frota DriveRent:</h1>
      <ul>
        {vehicles.map((vehicle, index) => (
          <li key={index}>
            <div className="vehicle-info">
              <span className="vehicle-label">Marca</span>
              <span className="vehicle-value">{vehicle.brand}</span>
            </div>
            <div className="vehicle-info">
              <span className="vehicle-label">Modelo</span>
              <span className="vehicle-value">{vehicle.model}</span>
            </div>
            <div className="vehicle-info">
              <span className="vehicle-label">Placa</span>
              <span className="vehicle-plate">{vehicle.licensePlate}</span>
            </div>
            <NavLink to={`/veiculo/${vehicle.licensePlate}`} className="details-link">
              Ver detalhes
            </NavLink>
            <button
              type="button"
              className="remove-button"
              onClick={() => handleRemove(vehicle.licensePlate)}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
