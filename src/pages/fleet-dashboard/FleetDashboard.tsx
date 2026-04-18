import { FleetStatus } from "../../enums/fleet-status.enum";
import "./styles.css";
import { NavLink, Outlet, useLocation } from "react-router";

export function FleetDashboard() {
  const { pathname } = useLocation();

  const currentPath = pathname.split("/")[2];
  const initialText = currentPath === FleetStatus.Available
    ? "Veja os veículos disponíveis na frota DriveRent:"
    : "Veja os veículos alugados na frota DriveRent:";

  return (
    <section className="fleet-dashboard-page">
      <h1>{initialText}</h1>
      <div className="button-container">
        <NavLink className="details-link" to={`/frota/${FleetStatus.Available}`}>
          Disponíveis
        </NavLink>
        <NavLink className="details-link" to={`/frota/${FleetStatus.Rented}`}>
          Alugados
        </NavLink>
      </div>
      <Outlet />
    </section>
  );
}
