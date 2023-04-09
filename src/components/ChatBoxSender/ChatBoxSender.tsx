import "./ChatBoxSender.css";

interface Props {
  name?: string;
  message: string;
  timestamps: string;
}

const ChatBoxSender = (props: Props) => {
  return (
    <div className="container-sender">
      <p className="p-sender">
        <strong className="strong-user">{props.name} - {props.timestamps}</strong>
        <br></br>
        {props.message}
      </p>
    </div>
  );
};

export default ChatBoxSender;
