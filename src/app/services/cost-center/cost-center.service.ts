import {
    Injectable,
  } from '@nestjs/common';
  import * as _ from 'lodash';
import { CostCenterDTO } from 'src/app/dto/Cost-center';
import { AbstractCostCenterRepository, AbstractCostCenterService } from 'src/app/interface/Cost-center';
  import {UserInterface} from 'src/app/interface/user';

  
  @Injectable()
  export class CostCenterService implements AbstractCostCenterService {
    constructor(
      private readonly repository: AbstractCostCenterRepository,
    ) {}
  
    async postCostCenter(dto: CostCenterDTO, req: UserInterface): Promise<any> {
      return await this.repository.postCostCenter(dto,req);
    }
    async updateCostCenter(id: string, dto: CostCenterDTO, req: UserInterface): Promise<any> {
        return await this.repository.updateCostCenter(id, dto,req);
    }
    async getAllCostCenters(req: UserInterface): Promise<any> {
      return await this.repository.getAllCostCenters(req);
    }
    async getCostCenter(id: string): Promise<any> {
      return await this.repository.getCostCenter(id);
    }
    async deleteCostCenter(id: string): Promise<any> {
      return await this.repository.deleteCostCenter(id);
    }

  }
  