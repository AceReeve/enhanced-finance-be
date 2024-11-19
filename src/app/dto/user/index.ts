import { ApiProperty} from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UserRegisterDTO {
  @ApiProperty({ example: 'example@gmail.com' })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Password123!' })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(32)
  @Matches(/^\S*$/, {
    message: 'password must not contain space',
  })
  @Matches(/^.*(?=.*[a-z0-9]).*$/, {
    message: 'password is not a valid string',
  })
  @Matches(/^.*(?=.*[a-z]).*$/, {
    message: 'password must contain at least one lowercase letter',
  })
  @Matches(/^.*(?=.*[A-Z]).*$/, {
    message: 'password must contain at least one uppercase letter',
  })
  @Matches(/^.*(?=.*[\d]).*$/, {
    message: 'password must contain at least one number',
  })
  password: string;
}