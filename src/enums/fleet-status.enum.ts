export const FleetStatus = {
  Available: "disponiveis",
  Rented: "alugados",
} as const;

export type FleetStatus = (typeof FleetStatus)[keyof typeof FleetStatus];
