import "./ChatBoxReceiver.css";
import { Avatar, Image } from "antd";

interface Props {
  avatar: string;
  user: string;
  message: string;
}

const ChatBoxReceiver = (props: Props) => {
  return (
    <div className="container">
      <Avatar
        size={50}
        src={
          <Image src={props.avatar} className="avatar-image" preview={false} />
        }
      />
      <p>
        <strong className="strong-user">{props.user}</strong>
      <br></br>
      {props.message}
      </p>
    </div>
  );
};

export default ChatBoxReceiver;
