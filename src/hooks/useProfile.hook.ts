import { UserService } from '@services/user/user.service';

export const useProfile = () => {
  const getUser = (phoneNumber: string) => UserService.getUser(phoneNumber);
  return { getUser };
};
