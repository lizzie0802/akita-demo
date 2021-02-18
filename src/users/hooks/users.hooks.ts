import { useEffect, useState } from "react";
import { Observable, Subscription } from "rxjs";
import { IUser } from "../state/user.model";
import { usersQuery } from "../state/users.query";
import { usersService } from "../state/users.service";

interface IUserState {
  users: IUser[];
  active: IUser | null;
}

function onEmit<T>(
  source$: Observable<T>,
  nextFn: (value: T) => void
): Subscription {
  return source$.subscribe(nextFn);
}

export function userHook(): [
  IUserState,
  (id: number) => void,
  (name: string) => void
] {
  const removeUser = (id: number) => usersService.remove(id);
  const addUser = (name: string) => usersService.add(name);
  const [state, setState] = useState<IUserState>({ users: [], active: null });
  useEffect(() => {
    const subscriptions: Subscription[] = [
      onEmit<IUser[]>(usersQuery.users$, (users) =>
        setState((s: IUserState) => ({ ...s, users }))
      ),
    ];

    // usersService.loadAllUsers();
    return () => {
      subscriptions.map((it) => it.unsubscribe());
    };
  }, []);
  return [state, removeUser, addUser];
}
