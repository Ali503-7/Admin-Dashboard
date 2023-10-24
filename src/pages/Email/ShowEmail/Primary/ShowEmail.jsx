import { useParams } from "react-router-dom";
import ShowEmailHeader from "../Secondary/ShowEmailHeader";
import EmailContent from "../Secondary/EmailContent";
import EmailControl from "../Secondary/EmailControl";

const ShowEmail = () => {
  const { id } = useParams();

  return (
    <div className="w-full relative">
      <ShowEmailHeader id={id} />
      <EmailControl />
      <EmailContent id={id} />
    </div>
  );
};

export default ShowEmail;
