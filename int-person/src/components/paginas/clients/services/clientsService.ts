import Client from "@/components/paginas/clients/services/Client";
import { database } from "@/lib/firebase";
import { push, ref, remove, update } from "firebase/database";

export class ClientsService {
  private baseRef = ref(database, "clients");

  // CREATE
  async create(client: Client) {
    const newRef = await push(this.baseRef, client);
    return newRef.key;
  }

  // DELETE
  async delete(id: string) {
    const clientRef = ref(database, `clients/${id}`);
    return remove(clientRef);
  }

  // UPDATE
  update(id: string, data: Partial<Client>) {
    return update(ref(database, `clients/${id}`), data);
  }
}
