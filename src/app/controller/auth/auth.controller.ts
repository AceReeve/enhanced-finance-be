import {
  Controller,
  Post,
  Body,
  Req,
  UseGuards,
  Get,
  SetMetadata,
} from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserLoginDTO } from 'src/app/dto/auth';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Public } from '../../decorators/public.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  @ApiBody({ type: UserLoginDTO })
  @ApiResponse({
    status: 201,
    description: 'Login successful',
  })
  @ApiResponse({
    status: 500,
    description: 'An internal error occured',
  })
  async login(@Body() userLoginDTO: UserLoginDTO): Promise<any> {
    console.log('before return login api')
    return this.authService.login(userLoginDTO);
  }
}
