import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { DefaulStatus } from 'src/app/const';

export type CompanyDocument = Company & Document;

@Schema({
  versionKey: false,
  collection: 'companies',
  timestamps: { createdAt: 'date_created', updatedAt: 'date_updated' },
})
export class Company {

  @Prop()
  code: string;

  @Prop()
  company_name: string;

  @Prop()
  description: string;

  @Prop({ default: DefaulStatus.ACTIVE, required: true })
  status: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
