import "./UserLogin.css";
import * as React from "react";
import { useState } from "react";
import _ from "lodash";
import { CommentOutlined } from "@ant-design/icons";

type Props = {
  setUser(user: string): void;
};

export function UserLogin(props: Props) {
  const [user, setUser] = useState("");

  const handleSetUser = () => {
    if (!user) {
      return;
    }
    localStorage.setItem("user", user);
    props.setUser(user);
    localStorage.setItem(
      "avatar",
      `https://picsum.photos/id/${_.random(1, 1000)}/200/300`
    );
  };

  return (
    <div>
      <h1 className="h1-login">
        <CommentOutlined color={"green"} />
        TeleWhatsapp
      </h1>
      <input
        className="input-login"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="What is your user name"
      />
      <button className="button-login" onClick={() => handleSetUser()}></button>
    </div>
  );
}
