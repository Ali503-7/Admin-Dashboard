import User from "../../assets/Imgs/avater/Avatar.png";

const Profile = () => {
  return (
    <div data-value="profile">
      <img
        src={User}
        alt="Avatar"
        className="w-10 h-10 m-2 rounded-full cursor-pointer"
        data-value="profile"
      />
    </div>
  );
};

export default Profile;
