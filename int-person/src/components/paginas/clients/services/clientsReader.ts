// ./lerClients.ts
import { database } from "@/lib/firebase";
import { DatabaseReference, onValue, ref } from "firebase/database";
import { Client } from "./clientsCRUD";

export class ClientsReader {
  private ref: DatabaseReference;

  constructor() {
    this.ref = ref(database, "clients");
  }

  listen(callback: (clients: Client[]) => void): () => void {
    const unsubscribe = onValue(this.ref, (snapshot) => {
      if (!snapshot.exists()) {
        callback([]);
        return;
      }

      const data = snapshot.val();

      // transforma em array com tipagem correta
      const clients = Object.values(data) as Client[];

      callback(clients);
    });

    return () => unsubscribe();
  }
}
