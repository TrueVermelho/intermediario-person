import { push, ref, remove, update } from "firebase/database";
import { database } from "../firebase";

export interface Client {
  id?: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  project: string;
  uid?: string; // usuário autenticado
}

// CREATE
export function createClient(client: Client, uid: string) {
  const clientsRef = ref(database, `users/${uid}/clients`);
  return push(clientsRef, client);
}

// UPDATE
export function updateClient(uid: string, id: string, data: Partial<Client>) {
  const clientRef = ref(database, `users/${uid}/clients/${id}`);
  return update(clientRef, data);
}

// DELETE
export function deleteClient(uid: string, id: string) {
  const clientRef = ref(database, `users/${uid}/clients/${id}`);
  return remove(clientRef);
}
