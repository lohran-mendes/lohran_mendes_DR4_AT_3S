import { NavLink } from "react-router";
import "./styles.css";

export function NavBar() {
  return (
    <div className="navbar-component">
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/cadastrar">Novo Veículo</NavLink>
      <NavLink to="/frota">Frota</NavLink>
    </div>
  );
}
