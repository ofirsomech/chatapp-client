import "./ChatBoxReceiver.css";
import { Avatar, Image } from "antd";

interface Props {
  avatar: string;
  name?: string;
  message: string;
  timestamps: string;
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
        <strong className="strong-user">
          {props.name} - {props.timestamps}
        </strong>
        <br></br>
        {props.message}
      </p>
    </div>
  );
};

export default ChatBoxReceiver;
