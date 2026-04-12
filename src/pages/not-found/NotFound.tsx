import { NavLink } from "react-router";
import "./styles.css";

export function NotFound() {
  return (
    <section className="not-found-page">
      <h1>404 - Página Não Encontrada</h1>
      <p>A página que você está procurando não existe.</p>
      <NavLink to="/" className="home-link">
        Voltar ao Início
      </NavLink>
    </section>
  );
}
