import { QueryEntity } from "@datorama/akita";
import { Observable } from "rxjs";

import { IUser } from "./user.model";
import { IUsersState, usersStore } from "./users.store";

export class UsersQuery extends QueryEntity<IUsersState, IUser> {
  public users$: Observable<IUser[]> = this.selectAll();
}

export const usersQuery = new UsersQuery(usersStore);
