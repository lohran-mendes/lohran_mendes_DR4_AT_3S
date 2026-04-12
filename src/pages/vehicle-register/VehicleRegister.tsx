import type { Vehicle } from "../../types/vehicle.types";
import type { Dispatch, SetStateAction, SubmitEvent } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "./styles.css";

type VehicleRegisterProps = {
  setVehicles: Dispatch<SetStateAction<Vehicle[]>>;
};

export function VehicleRegister({ setVehicles }: VehicleRegisterProps) {
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newVehicle: Vehicle = {
      brand: formData.get("make") as string,
      model: formData.get("model") as string,
      licensePlate: formData.get("licensePlate") as string,
    };

    setVehicles((prevVehicles) => [...prevVehicles, newVehicle]);
    toast.success("Veículo cadastrado com sucesso!", {
      position: "top-right",
      style: { marginTop: "50px" },
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    event.currentTarget.reset();
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
          <input type="text" id="licensePlate" name="licensePlate" required />
        </div>
        <button type="submit">Cadastrar Veículo</button>
      </form>
      <ToastContainer />
    </section>
  );
}
