import {
    Injectable,
  } from '@nestjs/common';
  import * as _ from 'lodash';
import { ProfitCenterDTO } from 'src/app/dto/profit-center';
import { AbstractProfitCenterRepository, AbstractProfitCenterService } from 'src/app/interface/profit-center';
  import {UserInterface} from 'src/app/interface/user';

  
  @Injectable()
  export class ProfitCenterService implements AbstractProfitCenterService {
    constructor(
      private readonly repository: AbstractProfitCenterRepository,
    ) {}
  
    async postProfitCenter(dto: ProfitCenterDTO, req: UserInterface): Promise<any> {
      return await this.repository.postProfitCenter(dto,req);
    }
    async updateProfitCenter(id: string, dto: ProfitCenterDTO, req: UserInterface): Promise<any> {
        return await this.repository.updateProfitCenter(id, dto,req);
      }

    async getAllProfitCenters(req: UserInterface): Promise<any> {
        return await this.repository.getAllProfitCenters(req);
      }
    async getProfitCenter(id: string): Promise<any> {
        return await this.repository.getProfitCenter(id);
      }
    async deleteProfitCenter(id: string): Promise<any> {
        return await this.repository.deleteProfitCenter(id);
      }
  }
  