import {
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, Types} from 'mongoose';
import {
  UserInterface,
} from 'src/app/interface/user';
import * as _ from 'lodash';
import { AbstractCompanyRepository } from 'src/app/interface/company';
import { CompanyDTO } from 'src/app/dto/company';
import { Company, CompanyDocument } from 'src/app/models/company/company.schema';

export class CompanyRepository implements AbstractCompanyRepository {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<CompanyDocument>
  ) {}

  async postCompany(dto: CompanyDTO): Promise<any> {
    const validateCode = await this.companyModel.findOne({
      code: dto.code,
    });
    if (validateCode) {
      throw new BadRequestException('Company Code is already Existing');
    }
    
    const newCompany = await this.companyModel.create(dto);

     if (!newCompany) {
      throw new BadRequestException('Unable to create Company');
    }
    return newCompany;
  }

  async updateCompany(id: string, dto: CompanyDTO): Promise<any> {

  const validateID = await this.companyModel.findById(id);
  if (!validateID) {
    throw new BadRequestException('Company not found');
  }
  if (validateID.code !== dto.code) {
    const validateCode = await this.companyModel.findOne({ code: dto.code });
    if (validateCode) {
      throw new BadRequestException('Company code already exists');
    }
  }

  const updatedCompany = await this.companyModel.findOneAndUpdate(
    {_id: new Types.ObjectId(id)},
    {$set: {
      code: dto.code,
      company_name: dto.company_name,
      description: dto.description
    }},
    {
      new: true
    });

  if (!updatedCompany) {
    throw new BadRequestException('Unable to update Company');
  }
  return updatedCompany;
  }

  async getAllCompany(): Promise<any> {
    return await this.companyModel.find();
  }
  async getCompany(id: string): Promise<any> {
    return await this.companyModel.findById(id);
  }
  async deleteCompany(id: string): Promise<any> {
    return await this.companyModel.findByIdAndDelete(id);
  }

}
