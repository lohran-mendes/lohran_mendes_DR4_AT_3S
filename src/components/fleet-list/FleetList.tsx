import "./styles.css";
import { NavLink, useLocation } from "react-router";
import type { Vehicle } from "../../types/vehicle.types";
import { toast } from "react-toastify";
import { FleetStatus } from "../../enums/fleet-status.enum";

type FleetListProps = {
  vehicles: Vehicle[];
  setVehicles: React.Dispatch<React.SetStateAction<Vehicle[]>>;
};

export function FleetList({ vehicles, setVehicles }: FleetListProps) {
  const { pathname } = useLocation();

  const fallbackText = pathname.includes(FleetStatus.Available)
    ? "Nenhum veículo disponível no momento."
    : pathname.includes(FleetStatus.Rented)
      ? "Nenhum veículo alugado no momento."
      : "Nenhum veículo encontrado.";

  const handleRemove = (licensePlate: string) => {
    const confirm = window.confirm(
      `Tem certeza que deseja remover o veículo com placa ${licensePlate}?`,
    );
    if (!confirm) return;

    toast.success(`Veículo com placa ${licensePlate} removido com sucesso!`);
    setVehicles((prev) => prev.filter((v) => v.licensePlate !== licensePlate));
  };

  return (
    <ul className="vehicle-list">
      {vehicles.length > 0 ? (
        vehicles.map((vehicle, index) => (
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
            <NavLink
              to={`/veiculo/${vehicle.licensePlate}`}
              className="details-link"
            >
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
        ))
      ) : (
        <h2 className="fallback-message">{fallbackText}</h2>
      )}
    </ul>
  );
}
