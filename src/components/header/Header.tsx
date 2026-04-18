import "./styles.css";
import { NavBar } from "../index";

type HeaderProps = {
  isLogged: boolean;
  setIsLogged: (value: boolean) => void;
};

export function Header({ isLogged, setIsLogged }: HeaderProps) {
  return (
    <header className="header-component">
      <h1>DriveRent</h1>
      <NavBar isLogged={isLogged} setIsLogged={setIsLogged} />
    </header>
  );
}
