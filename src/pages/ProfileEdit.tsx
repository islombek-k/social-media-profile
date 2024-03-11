import BaseInput from "../components/base-input/BaseInput";
import BaseTextArea from "../components/base-textarea/BaseTextArea";

const ProfileEdit = () => {
  return (
    <div className="bg-gray-50 h-screen">
      <div className="w-1/2 mx-auto">
        <div className="bg-white rounded-md border-2 border-gray-100 p-6">
          <BaseInput label="Email" placeholder="Enter email" />
          <div className="flex w-full gap-4 mt-8">
            <BaseInput label="Full-name" placeholder="Enter full-name" />
            <BaseInput label="Username" placeholder="Enter username" />
          </div>
          <div className="flex w-full gap-4 mt-8">
            <BaseInput label="Location" placeholder="Enter location" />
            <BaseInput label="Website" placeholder="Enter website" />
          </div>
          <div className="mt-8 flex flex-col gap-4">
            <BaseTextArea cols={5} rows={5} label="Experience" />
            <BaseTextArea cols={10} rows={10} label="About me" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
