import { DatabaseReference, push, ref, remove, update } from "firebase/database";
import { database } from "../../../../lib/firebase";

export interface Client {
  id?: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  project: string;
  uid?: string;
}

export class ClientsService {
  private uid: string;
  private baseRef: DatabaseReference;

  constructor(uid: string) {
    this.uid = uid;
    this.baseRef = ref(database, `users/${uid}/clients`);
  }

  // CREATE
  create(client: Client) {
    return push(this.baseRef, client);
  }

  // UPDATE
  update(id: string, data: Partial<Client>) {
    const clientRef = ref(database, `users/${this.uid}/clients/${id}`);
    return update(clientRef, data);
  }

  // DELETE
  delete(id: string) {
    const clientRef = ref(database, `users/${this.uid}/clients/${id}`);
    return remove(clientRef);
  }
}
