import * as React from "react";
import { IUser } from "../state/user.model";

interface IProps {
  user: IUser;
  onDel: (id: number) => void;
}

export const UserDetails = (props: IProps) => {
  const { name, id } = props.user;

  return (
    <li className="collection-item avatar">
      <span className="title">{name}</span>
      <button onClick={props.onDel.bind(null, id)}>delete</button>
    </li>
  );
};
