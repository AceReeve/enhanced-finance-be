import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDate, IsOptional, IsNumber, IsMongoId, ValidateNested, IsNotEmpty, IsBoolean } from 'class-validator';
import { ObjectId } from 'mongoose';
import { Type } from 'class-transformer';


export class CompanyDTO {
    @ApiProperty({ example: 'code' })
    @IsOptional()
    @IsString()
    code: string;

    @ApiProperty({ example: 'company name' })
    @IsOptional()
    @IsString()
    company_name: string;

    @ApiProperty({ example: 'description' })
    @IsOptional()
    @IsString()
    description: string;
}
