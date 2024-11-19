import { Module } from '@nestjs/common';
import { AbstractUserService } from 'src/app/interface/user';
import { AbstractUserRepository } from 'src/app/interface/user';
import { UserController } from 'src/app/controller/user/user.controller';
import { UserRepository } from 'src/app/repository/user/user.repository';
import { UserService } from 'src/app/services/user/user.service';
import { UserSchemaModule } from 'src/app/models/user/user.schema.module';
import { AuthController } from 'src/app/controller/auth/auth.controller';
import { AbstractAuthService } from 'src/app/interface/auth';
import { AuthRepository } from 'src/app/repository/auth/auth.repository';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/app/services/auth/auth.service';

@Module({
  imports: [
    UserSchemaModule,
  ],
  controllers: [UserController, AuthController],
  providers: [
    {
      provide: AbstractUserRepository,
      useClass: UserRepository,
    },
    {
      provide: AbstractUserService,
      useClass: UserService,
    },
    JwtService,
    UserService,
    AuthService,
    AuthRepository,
  ],

  exports: [
    UserSchemaModule,
    {
      provide: AbstractUserRepository,
      useClass: UserRepository,
    },
    {
      provide: AbstractUserService,
      useClass: UserService,
    },
  ],
})
export class UserModule {}
