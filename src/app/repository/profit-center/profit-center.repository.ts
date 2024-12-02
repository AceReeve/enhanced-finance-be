import {
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, Types} from 'mongoose';
import {
  UserInterface,
} from 'src/app/interface/user';
import * as _ from 'lodash';
import { AbstractProfitCenterRepository } from 'src/app/interface/profit-center';
import { ProfitCenterDTO } from 'src/app/dto/profit-center';
import { ProfitCenter, ProfitCenterDocument } from 'src/app/models/profit-center/profit-center.schema';
import { DefaulStatus, ProfitCenterStatus } from 'src/app/const';
export class ProfitCenterRepository implements AbstractProfitCenterRepository {
  constructor(
    @InjectModel(ProfitCenter.name) private profitCenterModel: Model<ProfitCenterDocument>

  ) {}

  async postProfitCenter(dto: ProfitCenterDTO, req: UserInterface): Promise<any> {
    const user = req.user;
    const validateCode = await this.profitCenterModel.findOne({
      'basic_data.profit_center_code': dto.basic_data.profit_center_code,
    });
    if (validateCode) {
      throw new BadRequestException('Profit Center Code is already Existing');
    }
    
    const newProfitCenter = new this.profitCenterModel({
      controlling_area: dto.controlling_area,
      basic_data: {
        profit_center_code: dto.basic_data.profit_center_code,
        analysis_period: {
          from: dto.basic_data.analysis_period.from,
          to: dto.basic_data.analysis_period.to,
        },
        name: dto.basic_data.name,
        long_text: dto.basic_data.long_text,
        status: ProfitCenterStatus.STATUS_PROFIT_CTR_INACTIVE_CREATE,
      },
      supporting_data: dto.supporting_data,
      status: DefaulStatus.ACTIVE,
      created_by: user.sub,
      updated_by: user.sub,
    });

    const savedProfitCenter = await newProfitCenter.save();

     if (!savedProfitCenter) {
      throw new BadRequestException('Unable to create profit center');
    }
    return savedProfitCenter;
  }

  async updateProfitCenter(id: string, dto: ProfitCenterDTO, req: UserInterface): Promise<any> {
  const user = req.user;

  const validateCode = await this.profitCenterModel.findOne({_id: new Types.ObjectId(id),
    'basic_data.profit_center_code': dto.basic_data.profit_center_code,
  });

  if (!validateCode) {
    throw new BadRequestException('Profit Center not found');
  }
  if (validateCode.created_by.toString() !== user.sub.toString()) {
    throw new BadRequestException('Profit Center Code is already Existing');
  }


  const updatedProfitCenter = await this.profitCenterModel.findOneAndUpdate(
    {_id: new Types.ObjectId(id)},
    {$set: {
      controlling_area: dto.controlling_area,
      basic_data: {
        profit_center_code: dto.basic_data.profit_center_code,
        analysis_period: {
          from: dto.basic_data.analysis_period.from,
          to: dto.basic_data.analysis_period.to,
        },
        name: dto.basic_data.name,
        long_text: dto.basic_data.long_text,
        status: ProfitCenterStatus.STATUS_PROFIT_CTR_INACTIVE_CREATE,
      },
      supporting_data: dto.supporting_data,
      status: DefaulStatus.ACTIVE,
      created_by: validateCode.created_by,
      updated_by: user.sub,
    }},
    {
      new: true
    });

  if (!updatedProfitCenter) {
    throw new BadRequestException('Unable to update profit center');
  }
  return updatedProfitCenter;
  }

  async getAllProfitCenters(req: UserInterface): Promise<any> {
    return await this.profitCenterModel.find({created_by: new Types.ObjectId(req.user.sub)});
  }
  async getProfitCenter(id: string): Promise<any> {
    return await this.profitCenterModel.findById(id);
  }
  async deleteProfitCenter(id: string): Promise<any> {
    return await this.profitCenterModel.findByIdAndDelete(id);
  }

}
