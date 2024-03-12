import BaseButton from "../components/base-button/BaseButton";
import BaseInput from "../components/base-input/BaseInput";
import BaseTextArea from "../components/base-textarea/BaseTextArea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { useUpdateProfileData } from "../services/api/profile.service";
import { ProfileFormType } from "../types/components";
import toast from "react-hot-toast";

const profileFormSchema = z.object({
  email: z.string().email("Invalid email"),
  fullName: z.string(),
  username: z.string().includes("@", { message: "Username must include @" }),
  location: z.string(),
  website: z.string(),
  bio: z.string().min(20, { message: "Bio must be at least 20 characters" }),
  experience: z.string().min(10, {
    message: "Experience must be at least 10 characters",
  }),
});

const ProfileEdit = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormType>({
    resolver: zodResolver(profileFormSchema),
  });

  const { mutate: updateProfileData } = useUpdateProfileData({
    onSuccess: () => {
      toast.success("Successfully updated!");
    },
    onError: () => {
      toast.error("Something went wrong!");
    },
  });

  const onSubmit = (data: ProfileFormType) => {
    updateProfileData({ ...data, id: 1 });
    navigate("/");
  };

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto pt-4">
        <Link
          to="/"
          className="ml-12 md:m-0 border border-gray-200 rounded-md py-1.5 px-3 hover:opacity-80"
        >
          {`<`} Go back
        </Link>
        <div className="w-4/5 lg:w-3/5 mx-auto py-16">
          <h1 className="text-primary font-semibold text-xl mb-4">
            Edit Profile
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-md border-2 border-gray-100 p-6"
          >
            <BaseInput
              errors={errors}
              label="Email"
              placeholder="Enter email"
              name="email"
              control={control}
            />
            <div className="flex flex-col lg:flex-row w-full gap-4 mt-8">
              <BaseInput
                errors={errors}
                name="fullName"
                label="Full-name"
                placeholder="Enter full-name"
                control={control}
              />
              <BaseInput
                errors={errors}
                name="username"
                label="Username"
                placeholder="Enter username"
                control={control}
              />
            </div>
            <div className="flex flex-col lg:flex-row w-full gap-4 mt-8">
              <BaseInput
                errors={errors}
                name="location"
                label="Location"
                placeholder="Enter location"
                control={control}
              />
              <BaseInput
                errors={errors}
                name="website"
                label="Website"
                placeholder="Enter website"
                control={control}
              />
            </div>
            <div className="mt-8 flex flex-col gap-4">
              <BaseTextArea
                errors={errors}
                name="experience"
                control={control}
                cols={5}
                rows={5}
                label="Experience"
                placeholder="Enter experience"
              />
              <BaseTextArea
                errors={errors}
                name="bio"
                control={control}
                cols={10}
                rows={10}
                label="About me"
                placeholder="About yourself"
              />
            </div>
            <BaseButton
              className="mt-4"
              btnType="primary"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save"}
            </BaseButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
