import "./ChatBoxReceiver.css";
import { Avatar, Image } from "antd";

interface Props {
  name?: string;
  message: string;
  timestamps: string;
}

const ChatBoxReceiver = (props: Props) => {
  return (
    <div className="container">
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
