import { Module } from '@nestjs/common';
import { UserSchemaModule } from './user/user.schema.module';
import { ProfitCenterSchemaModule } from './profit-center/profit-center.schema.module';
import { CostCenterSchemaModule } from './cost-center/cost-center.schema.module';
import { CompanySchemaModule } from './company/company.schema.module';

@Module({
  imports: [
    UserSchemaModule,
    ProfitCenterSchemaModule,
    CostCenterSchemaModule,
    CompanySchemaModule,

  ],
  providers: [],
  exports: [
    UserSchemaModule,
    ProfitCenterSchemaModule,
    CostCenterSchemaModule,
    CompanySchemaModule,

  ],
})
export class ModelModule {}
