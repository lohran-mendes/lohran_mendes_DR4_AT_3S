import { BrowserRouter, Route, Routes } from "react-router";
import { Home, FleetDashboard, VehicleRegister } from "./pages";
import { RootLayout } from "./layouts/root/RootLayout";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cadastrar" element={<VehicleRegister />} />
          <Route path="/frota" element={<FleetDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
