import "./ChatBoxSender.css";
import { Avatar, Image } from "antd";

interface Props {
  avatar: string;
  name?: string;
  message: string;
  timestamps: string;
}

const ChatBoxSender = (props: Props) => {
  return (
    <div className="container-sender">
      <Avatar
        size={50}
        src={
          <Image src={props.avatar} className="avatar-image-sender" preview={false} />
        }
      />
      <p className="p-sender">
        <strong className="strong-user">{props.name} - {props.timestamps}</strong>
        <br></br>
        {props.message}
      </p>
    </div>
  );
};

export default ChatBoxSender;
