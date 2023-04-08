import "./UserLogin.css";
import * as React from "react";
import { useState } from "react";
import _ from "lodash";
import { CommentOutlined } from "@ant-design/icons";

type Props = {
  login(name: string): void;
};

export function UserLogin(props: Props) {
  const [name, setName] = useState("");

  const handleSetname = () => {
    if (!name) {
      return;
    }
    localStorage.setItem("name", name);
    props.login(name);
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
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="What is your user name"
      />
      <button className="button-login" onClick={() => handleSetname()}>
        Login
      </button>
    </div>
  );
}
