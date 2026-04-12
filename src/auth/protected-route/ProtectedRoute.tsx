import { Navigate } from "react-router";
import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { toast } from "react-toastify";

interface ProtectedRouteProps {
  isLogged: boolean;
  children: ReactNode;
}

export function ProtectedRoute({ isLogged, children }: ProtectedRouteProps) {
  const reference = useRef(false);

  useEffect(() => {
    if (!isLogged && !reference.current) {
      reference.current = true;
      toast.warning("Você precisa estar logado para acessar esta página.");
    }
  }, [isLogged]);

  if (!isLogged) {
    return <Navigate to="/" replace />;
  }

  return children;
}
