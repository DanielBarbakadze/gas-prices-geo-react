import { UncontrolledAlert } from "reactstrap";

type NotificationProps = {
  content: string;
};

const Notification = ({ content }: NotificationProps) => {
  return (
    <div>
      <UncontrolledAlert color="warning">{content}</UncontrolledAlert>
    </div>
  );
};

export default Notification;
