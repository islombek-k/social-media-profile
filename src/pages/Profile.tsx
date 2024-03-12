import Experience from "../components/experience/Experience";
import ProfileHeader from "../components/profile-header/ProfileHeader";
import { useProfileData } from "../services/api/profile.service";

const ProfilePage = () => {
  const { data: profileData } = useProfileData({
    queryParams: {
      id: 1,
    },
  });

  return (
    <div>
      <ProfileHeader
        image={profileData?.image}
        name={profileData?.name}
        username={profileData?.username}
        followers={profileData?.followers}
        userId={profileData?.id}
      />
      <Experience
        experience={profileData?.experience}
        about={profileData?.about}
        location={profileData?.location}
        website={profileData?.website}
        email={profileData?.email}
        username={profileData?.username}
        myCompanies={profileData?.my_companies}
      />
    </div>
  );
};

export default ProfilePage;
