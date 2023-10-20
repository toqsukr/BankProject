import { ProfileService } from '@services/profile/profile.service';

export const useProfile = () => {
  const getUser = (phoneNumber: string) => ProfileService.getProfile(phoneNumber);
  return { getUser };
};
