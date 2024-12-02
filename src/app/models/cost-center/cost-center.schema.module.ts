import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CostCenter, CostCenterSchema } from './cost-center.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: CostCenter.name, schema: CostCenterSchema }]),
  ],
  exports: [MongooseModule],
})
export class CostCenterSchemaModule {}
