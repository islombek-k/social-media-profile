const ProfileHeader = () => {
  return (
    <div>
      <img
        src="assets/banner.png"
        alt="banner"
        className="relative w-full h-52"
      />
      <img
        src="assets/profile-img.png"
        alt="profile"
        height={100}
        width={100}
        className="absolute top-33 left-0 right-0 m-auto"
      />
      test
    </div>
  );
};

export default ProfileHeader;
