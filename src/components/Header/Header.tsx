import "./styles.css";
import { NavBar } from "../NavBar/NavBar";

export function Header() {
  return (
    <header className="header-component">
      <h1>DriveRent</h1>
      <NavBar />
    </header>
  );
}
