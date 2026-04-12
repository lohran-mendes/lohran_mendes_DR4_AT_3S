import "./styles.css";

import { Outlet } from "react-router";
import { Header } from "../../components/Header/Header";

export function RootLayout() {
  return (
    <>
      <Header />
      <main className="layout-container">
      <Outlet />
      </main>
    </>
  );
}
