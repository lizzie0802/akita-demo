import * as React from "react";
import { IUser } from "../state/user.model";
import { UserDetails } from "./userDetail";

interface IUsersProps {
  users: any[];
  onDel: (id: number) => void;
}

export const UserList = (props: IUsersProps) => {
  const users = props.users.map((user: IUser) => {
    return <UserDetails key={user.id} user={user} onDel={props.onDel} />;
  });

  return <ul className="collection">{users}</ul>;
};
