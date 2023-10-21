import { useParams } from "react-router-dom";
import ShowEmailHeader from "./ShowEmailHeader";

const ShowEmail = () => {
  const { id } = useParams();

  return (
    <div className="w-full">
      <ShowEmailHeader id={id} />
    </div>
  );
};

export default ShowEmail;
