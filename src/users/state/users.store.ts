import { EntityState, EntityStore, StoreConfig } from "@datorama/akita";
import { IUser } from "./user.model";

export interface IUsersState extends EntityState<IUser> {}

@StoreConfig({ name: "users" })
export class UserStore extends EntityStore<IUsersState> {}

export const usersStore = new UserStore();
