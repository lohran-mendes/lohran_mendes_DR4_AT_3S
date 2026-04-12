import "./styles.css";

import { Outlet } from "react-router";
import { Bounce, ToastContainer } from "react-toastify";
import { Header } from "../../components";

type RootLayoutProps = {
  isLogged: boolean;
  setIsLogged: (value: boolean) => void;
};

export function RootLayout({ isLogged, setIsLogged }: RootLayoutProps) {
  return (
    <>
      <Header isLogged={isLogged} setIsLogged={setIsLogged} />
      <main className="layout-container">
      <Outlet />
      </main>
      <ToastContainer
        position="top-right"
        style={{ marginTop: "50px" }}
        autoClose={2500}
        hideProgressBar={false}
        closeOnClick={false}
        pauseOnHover={true}
        draggable={true}
        theme="light"
        transition={Bounce}
      />
    </>
  );
}
