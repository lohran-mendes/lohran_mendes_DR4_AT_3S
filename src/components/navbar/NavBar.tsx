import { NavLink } from "react-router";
import "./styles.css";
import { FleetStatus } from "../../enums/fleet-status.enum";

type NavBarProps = {
  isLogged: boolean;
  setIsLogged: (value: boolean) => void;
};

export function NavBar({ isLogged, setIsLogged }: NavBarProps) {
  return (
    <ul className="navbar-component">
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/cadastrar">Novo Veículo</NavLink>
      <NavLink to={`/frota/${FleetStatus.Available}`}>Frota</NavLink>
      <button onClick={() => setIsLogged(!isLogged)}>
        {isLogged ? "Sair" : "Entrar"}
      </button>
    </ul>
  );
}
