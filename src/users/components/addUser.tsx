import * as React from "react";
import { useState } from "react";

interface IAddUserProps {
  addUser: (name: string) => void;
}
export const AddUser = (props: IAddUserProps) => {
  const [name, setName] = useState("");
  const { addUser } = props;

  function changeName(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setName(value);
  }

  function add() {
    addUser(name);
    setName("");
  }
  return (
    <section>
      <input type="text" onChange={changeName} value={name} />
      <button onClick={add}>add</button>
    </section>
  );
};
