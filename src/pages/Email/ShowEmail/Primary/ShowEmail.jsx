import { useParams } from "react-router-dom";
import ShowEmailHeader from "../Secendary/ShowEmailHeader";
import EmailControl from "../Secendary/EmailControl";

const ShowEmail = () => {
  const { id } = useParams();

  return (
    <div className="w-full">
      <ShowEmailHeader id={id} />
      <EmailControl />
    </div>
  );
};

export default ShowEmail;
