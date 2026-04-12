import type { Vehicle } from "../../types/vehicle.types";
import type { Dispatch, SetStateAction, SubmitEvent } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import "./styles.css";

type VehicleRegisterProps = {
  vehicles: Vehicle[];
  setVehicles: Dispatch<SetStateAction<Vehicle[]>>;
};

export function VehicleRegister({
  vehicles,
  setVehicles,
}: VehicleRegisterProps) {
  const navigate = useNavigate();

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const licensePlate = (formData.get("licensePlate") as string).trim();
    const hasSpaces = /\s/.test(licensePlate);

    if (hasSpaces) {
      toast.error("A placa não pode conter espaços.");
      return;
    }

    const newVehicle: Vehicle = {
      brand: (formData.get("make") as string).trim(),
      model: (formData.get("model") as string).trim(),
      licensePlate: licensePlate,
    };

    if (
      vehicles.some(
        (vehicle) => vehicle.licensePlate === newVehicle.licensePlate,
      )
    ) {
      toast.error("Já existe um veículo cadastrado com esta placa!");
      return;
    }

    setVehicles((prevVehicles) => [...prevVehicles, newVehicle]);
    toast.success("Veículo cadastrado com sucesso! Redirecionando...");
    event.currentTarget.reset();
    setTimeout(() => {
      navigate("/frota");
    }, 3000);
  };

  return (
    <section className="vehicle-register-page">
      <h1>Cadastrar novo veículo</h1>
      <p>Cadastre um novo veículo preenchendo o formulário abaixo:</p>
      <form className="vehicle-register-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="make">Marca:</label>
          <input type="text" id="make" name="make" required />
        </div>
        <div className="form-field">
          <label htmlFor="model">Modelo:</label>
          <input type="text" id="model" name="model" required />
        </div>
        <div className="form-field">
          <label htmlFor="licensePlate">Placa:</label>
          <input
            type="text"
            id="licensePlate"
            name="licensePlate"
            required
            pattern="^\S+$"
            title="A placa não pode conter espaços."
          />
        </div>
        <button type="submit">Cadastrar Veículo</button>
      </form>
    </section>
  );
}
