import {
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, Types} from 'mongoose';
import {
  UserInterface,
} from 'src/app/interface/user';
import * as _ from 'lodash';
import { AbstractCostCenterRepository } from 'src/app/interface/Cost-center';
import { CostCenterDTO } from 'src/app/dto/Cost-center';
import { CostCenter, CostCenterDocument } from 'src/app/models/Cost-center/Cost-center.schema';
import { DefaulStatus, CostCenterStatus } from 'src/app/const';
export class CostCenterRepository implements AbstractCostCenterRepository {
  constructor(
    @InjectModel(CostCenter.name) private costCenterModel: Model<CostCenterDocument>

  ) {}

  async postCostCenter(dto: CostCenterDTO, req: UserInterface): Promise<any> {
    const user = req.user;
    const validateCode = await this.costCenterModel.findOne({
      'header.cost_center_code': dto.header.cost_center_code,
    });
    if (validateCode) {
      throw new BadRequestException('Cost Center Code is already Existing');
    }
    
    const newCostCenter = new this.costCenterModel({
      header: {
        cost_center_code: dto.header.cost_center_code,
        controlling_area: dto.header.controlling_area,
        valid_range: {
          from: dto.header.valid_range.from,
          to: dto.header.valid_range.to,
        }
      },
      basic_data: {
        names:{
          name: dto.basic_data.names.name,
          description: dto.basic_data.names.description,
        },
        basic_information: {
          user_responsible: dto.basic_data.basic_information.user_responsible,
          department: dto.basic_data.basic_information.department,
          company: dto.basic_data.basic_information.company,
          business_area: dto.basic_data.basic_information.business_area,
          functional_area: dto.basic_data.basic_information.functional_area,
          currency: dto.basic_data.basic_information.currency,
          profit_center: dto.basic_data.basic_information.profit_center,
        }
      },
      status: DefaulStatus.ACTIVE,
      created_by: user.sub,
      updated_by: user.sub,
    });

    const savedCostCenter = await newCostCenter.save();

     if (!savedCostCenter) {
      throw new BadRequestException('Unable to create Cost center');
    }
    return savedCostCenter;
  }

  async updateCostCenter(id: string, dto: CostCenterDTO, req: UserInterface): Promise<any> {
  const user = req.user;

  const validateCode = await this.costCenterModel.findOne({_id: new Types.ObjectId(id),
    'header.cost_center_code': dto.header.cost_center_code,
  });

  if (!validateCode) {
    throw new BadRequestException('Cost Center not found');
  }
  if (validateCode.created_by.toString() !== user.sub.toString()) {
    throw new BadRequestException('Cost Center Code is already Existing');
  }

  const updatedCostCenter = await this.costCenterModel.findOneAndUpdate(
    {_id: new Types.ObjectId(id)},
    {$set: {
      header: {
      cost_center_code: dto.header.cost_center_code,
      controlling_area: dto.header.controlling_area,
      valid_range: {
        from: dto.header.valid_range.from,
        to: dto.header.valid_range.to,
      }
    },
    basic_data: {
      names:{
        name: dto.basic_data.names.name,
        description: dto.basic_data.names.description,
      },
      basic_information: {
        user_responsible: dto.basic_data.basic_information.user_responsible,
        department: dto.basic_data.basic_information.department,
        company: dto.basic_data.basic_information.company,
        business_area: dto.basic_data.basic_information.business_area,
        functional_area: dto.basic_data.basic_information.functional_area,
        currency: dto.basic_data.basic_information.currency,
        profit_center: dto.basic_data.basic_information.profit_center,
      }
    }
  }},
  {
    new: true
  });

  if (!updatedCostCenter) {
    throw new BadRequestException('Unable to update Cost center');
  }
  return updatedCostCenter;
  }

  async getAllCostCenters(req: UserInterface): Promise<any> {
    return await this.costCenterModel.find({created_by: new Types.ObjectId(req.user.sub)});
  }
  async getCostCenter(id: string): Promise<any> {
    return await this.costCenterModel.findById(id);
  }
  async deleteCostCenter(id: string): Promise<any> {
    return await this.costCenterModel.findByIdAndDelete(id);
  }

}
