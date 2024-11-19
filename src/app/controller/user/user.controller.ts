import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import {
  UserRegisterDTO,
} from 'src/app/dto/user';
import { AbstractUserService} from 'src/app/interface/user';
import { Public } from '../../decorators/public.decorator';
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: AbstractUserService,
  ) {}

  @Public()
  @Post('register')
  @ApiOperation({ summary: 'Register user' })
  async createUser(@Body() userRegisterDto: UserRegisterDTO): Promise<any> {
    return this.userService.createUser(userRegisterDto);
  }

}
