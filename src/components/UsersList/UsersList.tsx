import "./UsersList.css";
import * as React from "react";

type Props = {
  users: string[];
};

export function UsersList(props: Props) {
  return (
    <div className="active-users">
      <p>Online users:</p>
      {props.users.map((user) => (
        <div key={user} className="active-users">
          {user}
        </div>
      ))}
    </div>
  );
}
