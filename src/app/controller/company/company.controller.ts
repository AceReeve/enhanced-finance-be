import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    UseGuards,
    Put,
    Delete,
  } from '@nestjs/common';
  import {
      ApiBearerAuth,
    ApiOperation,
    ApiTags,
  } from '@nestjs/swagger';
import { CompanyDTO } from 'src/app/dto/company';
import { JwtAuthGuard } from 'src/app/guard';
import { AbstractCompanyService } from 'src/app/interface/company';
import { CompanyService } from 'src/app/services/Company/Company.service';

  @UseGuards(JwtAuthGuard)
  @ApiTags('Company')
  @ApiBearerAuth('Bearer')
  @Controller('company')
  export class CompanyController {
    constructor(
      private readonly companyService: CompanyService,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create Company' })
    async postCompany(@Body() companyDTO: CompanyDTO): Promise<any> {
      return this.companyService.postCompany(companyDTO);
    }

    @Put('/:id')
    @ApiOperation({ summary: 'Update Company' })
    async updateCompany(
        @Param('id') id: string,
        @Body() CompanyDTO: CompanyDTO): Promise<any> {
      return this.companyService.updateCompany(id,CompanyDTO);
    }

    @Get()
    @ApiOperation({ summary: 'Get All Company' })
    async getAllCompany(): Promise<any> {
      return this.companyService.getAllCompany();
    }

    @Get('/:id')
    @ApiOperation({ summary: 'Get Company By ID' })
    async getCompany(
      @Param('id') id: string,): Promise<any> {
      return this.companyService.getCompany(id);
    }

    @Delete('/:id')
    @ApiOperation({ summary: 'Delete Company' })
    async deleteCompany(
      @Param('id') id: string,): Promise<any> {
      return this.companyService.deleteCompany(id);
    }
  
  }
  