import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model} from 'mongoose';
import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { User, UserDocument } from 'src/app/models/user/user.schema';
import * as bcrypt from 'bcrypt';
import {UserLoginDTO } from '../../dto/auth';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AuthRepository {
  constructor(
    private readonly jwtService: JwtService,
    private configService: ConfigService,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}
  async validateUser(email: string, password: string): Promise<User | null> {
    let user: User | any;
    user = await this.userModel.findOne({ email: email });
    if (!user) {
      throw new NotFoundException('Incorrect email');
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new BadRequestException('Incorrect Password');
    }
    return user;
  }
  generateJWT(payload: object, exp: string): string {
    return this.jwtService.sign(payload, {
      secret: this.configService.get<string>('JWT_SECRET'),
      expiresIn: this.configService.get<string>('JWT_EXPIRATION'),
    });
  }
  async login(userLoginDTO: UserLoginDTO) {
    let user: User | any;
    user = await this.validateUser(userLoginDTO.email, userLoginDTO.password);
    const { _id, first_name, last_name, email, status, role } = user;
    const payload = { email: user.email, sub: user._id, role };
    const access_token = this.generateJWT(
      payload,
      this.configService.get<string>('JWT_EXPIRATION'),
    );
    await this.userModel.findOneAndUpdate(
      { email: email },
      { $inc: { login_count: 1 } },
    );
    return { _id, first_name, last_name, email, status, access_token, role };
  }
}
