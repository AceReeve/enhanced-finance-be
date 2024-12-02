import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { DefaulStatus } from 'src/app/const';

export type CostCenterDocument = CostCenter & Document;

@Schema({
  versionKey: false,
  collection: 'costcenters',
  timestamps: { createdAt: 'date_created', updatedAt: 'date_updated' },
})
export class CostCenter {
  @Prop({ type: Object })
  header: {
    cost_center_code: { type: String, trim: true, required: true },
    controlling_area: { type: MongooseSchema.Types.ObjectId, required: true, ref: 'controlling_areas' },
    valid_range: {
        from: { type: Date, required: true },
        to: { type: Date, required: true },
    },
   };

  @Prop({ type: Object })
  basic_data: {
    names: {
      name: string;
      description: string;
    };
    supporting_data: {
      user_responsible?: {requred: false, type: MongooseSchema.Types.ObjectId, ref: 'users'}
      department: { requred: false, type: MongooseSchema.Types.ObjectId, ref: 'departments' },
      company: { requred: false, type: MongooseSchema.Types.ObjectId, ref: 'companies' },
      business_area: { type: Number, required: false },
      functional_area: { type: Number, required: false },
      currency: { requred: false, type: MongooseSchema.Types.ObjectId, ref: 'currencies' },
      profit_center: { requred: false, type: MongooseSchema.Types.ObjectId, ref: 'profit_centers' }
    };
  };

  @Prop({ default: DefaulStatus.ACTIVE, required: true })
  status: string;

  @Prop({ required: true,type: MongooseSchema.Types.ObjectId, ref: 'users' })
  created_by:  MongooseSchema.Types.ObjectId;

  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'users' })
  updated_by:  MongooseSchema.Types.ObjectId;
}

export const CostCenterSchema = SchemaFactory.createForClass(CostCenter);
