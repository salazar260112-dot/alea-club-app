import { useContext } from "react";
import { ClientContext } from "@/context/client-types";

export function useClient() {
  const context = useContext(ClientContext);
  if (!context) {
    throw new Error("useClient debe usarse dentro de ClientProvider");
  }
  return context;
}