import Client from "@/components/paginas/clients/services/Client";
import { database } from "@/lib/firebase";
import { DatabaseReference, onValue, ref } from "firebase/database";

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

      // Converte corretamente para array com id embutido
      const clients: Client[] = Object.entries(data).map(([id, value]) => ({
        id,
        ...(value as Client)
      }));

      callback(clients);
    });

    return () => unsubscribe();
  }
}
