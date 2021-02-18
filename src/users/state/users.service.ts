import { IUser } from "./user.model";
import { usersStore, UserStore } from "./users.store";

export class UserService {
  private usersStore: UserStore;
  private id: number = 0;
  constructor(store: UserStore) {
    this.usersStore = store;
  }
  // tslint:disable-next-line:no-empty
  public loadAllUsers() {}
  public add(name: string) {
    this.id++;
    this.usersStore.add({ name, id: this.id });
  }
  public update(id: number, data: IUser) {
    this.usersStore.update(id, data);
  }
  public remove(id: number) {
    this.usersStore.remove(id);
  }

  public setActiveUser(id: number) {
    this.usersStore.setActive(id);
  }
}

export const usersService = new UserService(usersStore);
