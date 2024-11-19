import {
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model} from 'mongoose';
import {
  AbstractUserRepository,
} from 'src/app/interface/user';
import { User, UserDocument } from 'src/app/models/user/user.schema';
import {
  UserRegisterDTO,
} from 'src/app/dto/user';
import * as _ from 'lodash';
export class UserRepository implements AbstractUserRepository {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>

  ) {}

  async createUser(userRegisterDto: UserRegisterDTO): Promise<any> {

    const validateEmail = await this.userModel.findOne({
      email: userRegisterDto.email,
    });
    if (validateEmail) {
      throw new BadRequestException('Email is already Registered');
    }

    const newUser = await this.userModel.create({
      email: userRegisterDto.email,
      password: userRegisterDto.password,
      verified_email: true,
      login_count: 1,
    });

    if (!newUser) throw new BadRequestException('Unable to register user');

    return { newUser };
  }
  
}
