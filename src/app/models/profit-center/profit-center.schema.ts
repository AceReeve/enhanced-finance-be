import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { DefaulStatus } from 'src/app/const';

export type ProfitCenterDocument = ProfitCenter & Document;

@Schema({
  versionKey: false,
  collection: 'profitcenters',
  timestamps: { createdAt: 'date_created', updatedAt: 'date_updated' },
})
export class ProfitCenter {
  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'controlling_areas' })
  controlling_area: MongooseSchema.Types.ObjectId;

  @Prop({
    required: true,
    type: {
      profit_center_code: { type: String, required: true },
      analysis_period: {
        from: { type: Date, required: true },
        to: { type: Date, required: true },
      },
      name: { type: String, required: true, trim: true },
      long_text: { type: String, trim: true, required: false },
      status: { type: String, default: 'STATUS_PROFIT_CTR_INACTIVE_CREATE', required: false },
    },
  })
  basic_data: {
    description: {
      profit_center_code: number;
      analysis_period: {
        from: Date;
        to: Date;
      };
      name: string;
      long_text?: string;
      status?: string;
    };
    supporting_data: {
      user_responsible?: MongooseSchema.Types.ObjectId;
      department?: MongooseSchema.Types.ObjectId;
    };
  };

  @Prop({ default: DefaulStatus.ACTIVE, required: true })
  status: string;

  @Prop({ required: true,type: MongooseSchema.Types.ObjectId, ref: 'users' })
  created_by:  MongooseSchema.Types.ObjectId;

  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'users' })
  updated_by:  MongooseSchema.Types.ObjectId;
}

export const ProfitCenterSchema = SchemaFactory.createForClass(ProfitCenter);
