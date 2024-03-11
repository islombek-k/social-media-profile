import { useQuery } from "@tanstack/react-query";
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
