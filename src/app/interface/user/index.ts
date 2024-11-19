import {
  UserRegisterDTO,
} from 'src/app/dto/user';

export abstract class AbstractUserRepository {
  abstract createUser(userRegisterDto: UserRegisterDTO): Promise<any>;
}

export abstract class AbstractUserService {
  abstract createUser(userRegisterDto: UserRegisterDTO): Promise<any>;
}
export interface RegisterResponseData {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  status: string;
}

export interface LoginResponseData {
  _id: string;
  first_name: string;
  last_name: string;
  access_token: string;
  email?: string;
  status?: string;
}

interface File {
  path: string;
  filename: string;
  mimetype: string;
  created_at: string;
  file_id: any;
  extension: string;
}

export interface UserInterface {
  user: User;
}

export interface User {
  email: string;
  sub: string;
}