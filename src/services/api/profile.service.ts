import { useMutation, useQuery } from "@tanstack/react-query";
import { ProfileFormType } from "../../types/components";
type queryParamsType = {
  id: number;
};

const profileServices = {
  getProfileData: async (queryParams: queryParamsType) => {
    try {
      const response = await fetch(`api/user/${queryParams.id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching profile data:", error);
      throw error;
    }
  },
  updateProfileData: async (payload: ProfileFormType) => {
    console.log("payload", payload);
    try {
      const response = await fetch("api/edit-user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      console.log("JSON.stringify(payload)", JSON.stringify(payload));
      if (!response.ok) {
        throw new Error("error 404");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error updating profile data:", error);
      throw error;
    }
  },
};

export const useProfileData = ({
  queryParams,
}: {
  queryParams: queryParamsType;
}) => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: () => profileServices.getProfileData(queryParams),
  });
};

export const useUpdateProfileData = ({
  onSuccess,
  onError,
}: {
  onSuccess?: () => void;
  onError?: () => void;
}) => {
  return useMutation({
    mutationKey: ["profileUpdate"],
    onSuccess: () => {
      onSuccess && onSuccess();
    },
    onError: () => {
      onError && onError();
    },
    mutationFn: (data: ProfileFormType) =>
      profileServices.updateProfileData(data),
  });
};
