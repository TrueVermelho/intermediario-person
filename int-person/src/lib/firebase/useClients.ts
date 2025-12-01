import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../firebase";
import { Client } from "./clientsService";

export function useClients(uid: string | null) {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    if (!uid) return;

    const clientsRef = ref(database, `users/${uid}/clients`);

    onValue(clientsRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) return setClients([]);

      const parsed = Object.entries(data).map(([id, value]: any) => ({
        id,
        ...value,
      }));

      setClients(parsed);
    });
  }, [uid]);

  return clients;
}
