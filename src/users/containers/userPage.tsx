import * as React from "react";
import { AddUser } from "../components/addUser";
import { UserList } from "../components/userList";
import { userHook } from "../hooks/users.hooks";

export const UserPage = () => {
  const [{ users }, removeUser, addUser] = userHook();
  return (
    <section>
      <AddUser addUser={addUser} />
      {users.length > 0 && <UserList users={users} onDel={removeUser} />}
    </section>
  );
};
