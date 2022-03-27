import { UncontrolledAlert } from "reactstrap";

type NotificationProps = {
  content: string;
};

const Notification = ({ content }: NotificationProps) => {
  return (
    <div className="text-center">
      <UncontrolledAlert color="warning">{content}</UncontrolledAlert>
    </div>
  );
};

export default Notification;
