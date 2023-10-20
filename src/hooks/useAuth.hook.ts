import { ILoginRequest, IRegisterRequest } from '@services/auth/auth.interface';
import { AuthService } from '@services/auth/auth.service';

export const useAuth = () => {
  const login = (data: ILoginRequest) => AuthService.login(data);
  const register = (data: IRegisterRequest) => AuthService.register(data);
  return { login, register };
};
