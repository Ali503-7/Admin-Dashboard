import { useParams } from "react-router-dom";
import fakeemails from "../../../assets/Api/FakeEmailApi";
import ShowEmailHeader from "./ShowEmailHeader";

const ShowEmail = () => {
  const { id } = useParams();

  const massage = fakeemails.find(email => email.id == id)

  return (
    <div className="w-full">
      <ShowEmailHeader massage={massage} id={id} />
    </div>
  );
};

export default ShowEmail;
