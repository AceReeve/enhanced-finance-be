import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDate, IsOptional, IsNumber, IsMongoId, ValidateNested, IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongoose';
import { Type } from 'class-transformer';

class AnalysisPeriodDTO {
  @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
  @IsDate()
  @Type(() => Date)
  from: Date;

  @ApiProperty({ example: '2024-12-31T23:59:59.999Z' })
  @IsDate()
  @Type(() => Date)
  to: Date;
}

class ProfitCenterBasicDataDTO {
  @ApiProperty({ example: '1001' })
  @IsString()
  profit_center_code: string;

  @ApiProperty({ example: 'Profit Center Name' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'This is the description of the profit center.' })
  @IsOptional()
  @IsString()
  long_text?: string;

  @ApiProperty({ type: AnalysisPeriodDTO })
  @ValidateNested()
  @Type(() => AnalysisPeriodDTO)
  analysis_period: AnalysisPeriodDTO;
}

class SupportingDataDTO {
  @ApiProperty({ example: '60c72b2f5f7e3a1e8b3f52d1' })
  @IsOptional()
  @IsMongoId()
  user_responsible?: ObjectId;

  @ApiProperty({ example: '60c72b2f5f7e3a1e8b3f52d2' })
  @IsOptional()
  @IsMongoId()
  department?: ObjectId;
}

export class ProfitCenterDTO {
  @ApiProperty({ example: '60c72b2f5f7e3a1e8b3f52d0' })
  @IsMongoId()
  controlling_area: ObjectId;

  @ApiProperty({ type: ProfitCenterBasicDataDTO })
  @ValidateNested()
  @Type(() => ProfitCenterBasicDataDTO)
  @IsNotEmpty()
  basic_data: ProfitCenterBasicDataDTO;

  @ApiProperty({ type: SupportingDataDTO })
  @ValidateNested()
  @Type(() => SupportingDataDTO)
  @IsNotEmpty()
  supporting_data: SupportingDataDTO;
}
