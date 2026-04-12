import { NavLink } from "react-router";
import "./styles.css";

type NavBarProps = {
  isLogged: boolean;
  setIsLogged: (value: boolean) => void;
};

export function NavBar({ isLogged, setIsLogged }: NavBarProps) {
 
  return (
    <ul className="navbar-component">
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/cadastrar">Novo Veículo</NavLink>
      <NavLink to="/frota">Frota</NavLink>
      <button onClick={() => setIsLogged(!isLogged)}>{isLogged ? "Sair" : "Entrar"}</button>
    </ul>
  );
}
