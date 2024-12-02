import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDate, IsOptional, IsNumber, IsMongoId, ValidateNested, IsNotEmpty, IsBoolean } from 'class-validator';
import { ObjectId } from 'mongoose';
import { Type } from 'class-transformer';

class RangeDTO {
  @ApiProperty({ example: '2024-01-01' })
  @IsDate()
  @Type(() => Date)
  from: Date;

  @ApiProperty({ example: '2024-12-31' })
  @IsDate()
  @Type(() => Date)
  to: Date;
}
class NamesDTO {
  @ApiProperty({ example: 'name' })
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({ example: 'This is the description of the cost center.' })
  @IsOptional()
  @IsString()
  description: string;
}

class BasicInformationDTO {
  @ApiProperty({ example: '60c72b2f5f7e3a1e8b3f52d0' })
  @IsMongoId()
  user_responsible: ObjectId;

  @ApiProperty({ example: '60c72b2f5f7e3a1e8b3f52d0' })
  @IsMongoId()
  department: ObjectId;

  @ApiProperty({ example: '60c72b2f5f7e3a1e8b3f52d0' })
  @IsMongoId()
  company: ObjectId;

  @ApiProperty({ example: 'true' })
  @IsBoolean()
  @IsOptional()
  business_area?: boolean;

  @ApiProperty({ example: 'true' })
  @IsBoolean()
  @IsOptional()
  functional_area?: ObjectId;

  @ApiProperty({ example: '60c72b2f5f7e3a1e8b3f52d0' })
  @IsMongoId()
  currency: ObjectId;

  @ApiProperty({ example: '60c72b2f5f7e3a1e8b3f52d0' })
  @IsMongoId()
  profit_center: ObjectId;
}

class HeaderDTO {
  @ApiProperty({ example: '1001' })
  @IsString()
  cost_center_code: string;

  @ApiProperty({ example: '60c72b2f5f7e3a1e8b3f52d0' })
  @IsMongoId()
  controlling_area: ObjectId;

  @ApiProperty({ type: RangeDTO })
  @ValidateNested()
  @Type(() => RangeDTO)
  valid_range: RangeDTO;
}

class CostCenterBasicDataDTO {
  @ApiProperty({ type: NamesDTO })
  @ValidateNested()
  @Type(() => NamesDTO)
  names: NamesDTO;

  @ApiProperty({ type: BasicInformationDTO })
  @ValidateNested()
  @Type(() => BasicInformationDTO)
  basic_information: BasicInformationDTO;
}

export class CostCenterDTO {

  @ApiProperty({ type: HeaderDTO })
  @ValidateNested()
  @Type(() => HeaderDTO)
  @IsNotEmpty()
  header: HeaderDTO;

  @ApiProperty({ type: CostCenterBasicDataDTO })
  @ValidateNested()
  @Type(() => CostCenterBasicDataDTO)
  @IsNotEmpty()
  basic_data: CostCenterBasicDataDTO;
}
