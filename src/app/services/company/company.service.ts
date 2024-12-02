import {
    Injectable,
  } from '@nestjs/common';
  import * as _ from 'lodash';
import { CompanyDTO } from 'src/app/dto/company';
import { AbstractCompanyRepository, AbstractCompanyService } from 'src/app/interface/company';
import { CompanyRepository } from 'src/app/repository/Company/Company.repository';
  
  @Injectable()
  export class CompanyService implements AbstractCompanyService {
    constructor(
      private readonly repository: CompanyRepository,
    ) {}
  
    async postCompany(dto: CompanyDTO): Promise<any> {
      return await this.repository.postCompany(dto);
    }
    async updateCompany(id: string, dto: CompanyDTO): Promise<any> {
        return await this.repository.updateCompany(id, dto);
    }
    async getAllCompany(): Promise<any> {
      return await this.repository.getAllCompany();
    }
    async getCompany(id: string): Promise<any> {
      return await this.repository.getCompany(id);
    }
    async deleteCompany(id: string): Promise<any> {
      return await this.repository.deleteCompany(id);
    }

  }
  