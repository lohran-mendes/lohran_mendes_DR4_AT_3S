import { BrowserRouter, Route, Routes } from "react-router";
import {
  Home,
  FleetDashboard,
  VehicleRegister,
  VehicleDetails,
  NotFound,
} from "./pages";
import { RootLayout } from "./layouts/root/RootLayout";
import { ProtectedRoute } from "./auth";
import type { Vehicle } from "./types/vehicle.types";
import { useEffect, useState } from "react";
import { FleetList } from "./components/fleet-list/FleetList";
import { FleetStatus } from "./enums/fleet-status.enum";

const mockVehicles: Vehicle[] = [
  { brand: "Toyota", model: "Corolla", licensePlate: "ABC-1234", rented: false },
  { brand: "Honda", model: "Civic", licensePlate: "XYZ-5678", rented: false },
  { brand: "Ford", model: "Focus", licensePlate: "DEF-9012", rented: false },
  { brand: "Volkswagen", model: "Taos", licensePlate: "GDS-2342", rented: true },
  { brand: "Nissan", model: "Kicks", licensePlate: "HIJ-3456", rented: true },
];

export function App() {
  const [vehicles, setVehicles] = useState<Vehicle[]>(() => {
    const storedVehicles = localStorage.getItem("vehicles");

    return storedVehicles ? JSON.parse(storedVehicles) : mockVehicles;
  });

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    localStorage.setItem("vehicles", JSON.stringify(vehicles));
  }, [vehicles]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<RootLayout isLogged={isLogged} setIsLogged={setIsLogged} />}
        >
          <Route path="/" element={<Home />} />
          <Route
            path="/cadastrar"
            element={
              <ProtectedRoute isLogged={isLogged}>
                <VehicleRegister
                  vehicles={vehicles}
                  setVehicles={setVehicles}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/veiculo/:id"
            element={
              <ProtectedRoute isLogged={isLogged}>
                <VehicleDetails vehicle={vehicles} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/frota"
            element={
              <ProtectedRoute isLogged={isLogged}>
                <FleetDashboard />
              </ProtectedRoute>
            }
          >
            <Route
              path={`/frota/${FleetStatus.Available}`}
              element={
                <FleetList vehicles={vehicles.filter(v => !v.rented)} setVehicles={setVehicles} />
              }
            />
            <Route
              path={`/frota/${FleetStatus.Rented}`}
              element={
                <FleetList vehicles={vehicles.filter(v => v.rented)} setVehicles={setVehicles} />
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
