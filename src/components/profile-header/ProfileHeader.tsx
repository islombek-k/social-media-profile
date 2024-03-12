import { Link } from "react-router-dom";
import { ProfileHeaderType } from "../../types/profile";

const ProfileHeader = ({
  image,
  name,
  username,
  followers,
  userId,
}: ProfileHeaderType) => {
  return (
    <div className="relative">
      <img src="assets/banner-2.png" alt="banner" className=" w-full h-60" />
      <img
        src={image}
        alt="profile"
        height={140}
        width={140}
        className="absolute top-170 right-0 left-0 m-auto border-2 border-white rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
      />
      <div className="mt-28">
        <h2 className="mt-6 text-center text-2xl text-primary">{name}</h2>
        <p className="text-center text-secondary">{username}</p>
        <div className="flex items-center justify-center gap-2 mt-8">
          <Link
            to={`/edit/${userId}`}
            className="border border-gray-200 rounded-md py-1.5 px-3 hover:opacity-80"
          >
            Edit profile
          </Link>
          <button className="bg-secondary text-white rounded-md py-1.5 px-3 cursor-default">
            {followers} followers
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
