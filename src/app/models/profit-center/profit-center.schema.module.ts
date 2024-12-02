import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfitCenter, ProfitCenterSchema } from './profit-center.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ProfitCenter.name, schema: ProfitCenterSchema }]),
  ],
  exports: [MongooseModule],
})
export class ProfitCenterSchemaModule {}
