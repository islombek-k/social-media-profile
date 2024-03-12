import { Control, FieldErrors } from "react-hook-form";

export type ExperienceCardType = {
  title: string;
  description: string;
};

export interface ProjectCardI {
  label: string;
  image: string;
  company: string;
  slug: string;
  duration: string;
}

type ProjectCardIExtended = ProjectCardI & {
  id: number;
};

export type ExperienceType = {
  experience: string;
  about: string;
  location: string;
  website: string;
  email: string;
  username: string;
  myCompanies: ProjectCardIExtended[];
};

export interface ProfileFormType {
  email: string;
  fullName: string;
  username: string;
  location: string;
  website: string;
  bio: string;
  experience: string;
  id: number;
}

export type BaseTextAreaType = {
  cols: number;
  rows: number;
  label: string;
  placeholder: string;
  control: Control<ProfileFormType, unknown>;
  name: ProfileFormFields;
  errors: FieldErrors<ProfileFormType>;
};

export type ProfileFormFields =
  | "email"
  | "fullName"
  | "username"
  | "location"
  | "website"
  | "bio"
  | "experience";

export type BaseInputType = {
  label: string;
  placeholder: string;
  control: Control<ProfileFormType, unknown>;
  name: ProfileFormFields;
  errors: FieldErrors<ProfileFormType>;
};

export type BaseButtonType = {
    children: string;
    className?: string;
    btnType: "primary" | "secondary";
  } & React.ButtonHTMLAttributes<HTMLButtonElement>;
  