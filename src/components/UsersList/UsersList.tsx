import "./UsersList.css";
import * as React from "react";

type Props = {
  users: string[];
};

export function UsersList(props: Props): any {
  return (
    <div className="active-users">
      {props.users.map((user) => (
        <div key={user} className="active-users">
          {user}
        </div>
      ))}
    </div>
  );
}
