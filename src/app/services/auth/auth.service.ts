import { Injectable } from '@nestjs/common';
import { AuthRepository } from 'src/app/repository/auth/auth.repository';
import { UserLoginDTO } from 'src/app/dto/auth';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  async login(userLoginDTO: UserLoginDTO): Promise<any> {
    return await this.authRepository.login(userLoginDTO);
  }
}
