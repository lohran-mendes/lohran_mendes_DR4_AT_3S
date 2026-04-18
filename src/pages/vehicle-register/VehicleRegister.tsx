import type { Vehicle } from "../../types/vehicle.types";
import {
  useState,
  type Dispatch,
  type SetStateAction,
  type SubmitEvent,
} from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import "./styles.css";
import { FleetStatus } from "../../enums/fleet-status.enum";

type VehicleRegisterProps = {
  vehicles: Vehicle[];
  setVehicles: Dispatch<SetStateAction<Vehicle[]>>;
};

export function VehicleRegister({
  vehicles,
  setVehicles,
}: VehicleRegisterProps) {
  const navigate = useNavigate();
  const [buttonTitle, setButtonTitle] = useState<
    "Processando..." | "Cadastrar Veículo"
  >("Cadastrar Veículo");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const licensePlate = (formData.get("licensePlate") as string).trim();
    const hasSpaces = /\s/.test(licensePlate);

    if (hasSpaces) {
      toast.error("A placa não pode conter espaços.");
      return;
    }

    const newVehicle: Vehicle = {
      brand: (formData.get("make") as string).trim(),
      model: (formData.get("model") as string).trim(),
      rented: false,
      licensePlate: licensePlate,
    };

    setButtonTitle("Processando...");
    setIsSubmitting(true);

    setTimeout(() => {
      setButtonTitle("Cadastrar Veículo");
      setIsSubmitting(false);

      if (
        vehicles.some(
          (vehicle) => vehicle.licensePlate === newVehicle.licensePlate,
        )
      ) {
        toast.error("Já existe um veículo cadastrado com esta placa!");
        setButtonTitle("Cadastrar Veículo");
        setIsSubmitting(false);
        return;
      }

      setVehicles((prevVehicles) => [...prevVehicles, newVehicle]);
      toast.success("Veículo cadastrado com sucesso! Redirecionando...");
      form.reset();

      setTimeout(() => {
        navigate(`/frota/${FleetStatus.Available}`);
      }, 3000);
    }, 2000);
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
        <button className={isSubmitting ? "isSubmitting" : ""} type="submit">
          {buttonTitle}
        </button>
      </form>
    </section>
  );
}
