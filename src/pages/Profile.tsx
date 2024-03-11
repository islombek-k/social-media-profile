import Experience from "../components/experience/Experience";
import ProfileHeader from "../components/profile-header/ProfileHeader";
import { useProfileData } from "../services/api/profile.service";

const ProfilePage = () => {
  const { data: profileData } = useProfileData({
    queryParams: {
      id: 1,
    },
  });
  console.log("profileData", profileData?.image);

  return (
    <div>
      <ProfileHeader
        image={profileData?.image}
        name={profileData?.name}
        username={profileData?.username}
        followers={profileData?.followers}
        userId={profileData?.id}
      />
      <Experience />
    </div>
  );
};

export default ProfilePage;
