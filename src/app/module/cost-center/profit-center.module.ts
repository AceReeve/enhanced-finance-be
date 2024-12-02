import { Module } from '@nestjs/common';
import { CostCenterSchemaModule } from 'src/app/models/Cost-center/Cost-center.schema.module';
import { CostCenterController } from 'src/app/controller/Cost-center/Cost-center.controller';
import { AbstractCostCenterRepository, AbstractCostCenterService } from 'src/app/interface/Cost-center';
import { CostCenterService } from 'src/app/services/Cost-center/Cost-center.service';
import { CostCenterRepository } from 'src/app/repository/Cost-center/Cost-center.repository';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [CostCenterSchemaModule],
  controllers: [CostCenterController],
  providers: [
    {
      provide: AbstractCostCenterService,
      useClass: CostCenterService,
    },
    {
      provide: AbstractCostCenterRepository,
      useClass: CostCenterRepository,
    },
    JwtService,
  ],

  exports: [
    {
        provide: AbstractCostCenterService,
        useClass: CostCenterService,
      },
      {
        provide: AbstractCostCenterRepository,
        useClass: CostCenterRepository,
      },
  ],
})
export class CostCenterModule {}
