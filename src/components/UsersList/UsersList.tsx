import "./UsersList.css";
import * as React from "react";

type Props = {
  users: any[];
};

export function UsersList(props: Props): any {
  return (
    <div className="active-users">
      {props.users.map((user) => (
        <div className="active-users">{user}</div>
      ))}
    </div>
  );
}
