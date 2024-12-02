import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Query,
    UseInterceptors,
    UploadedFiles,
    Res,
    StreamableFile,
    UseGuards,
    Req,
    Request,
    Put,
    Delete,
  } from '@nestjs/common';
  import { FileFieldsInterceptor } from '@nestjs/platform-express';
  import {
      ApiBearerAuth,
    ApiOperation,
    ApiTags,
  } from '@nestjs/swagger';
import { ProfitCenterDTO } from 'src/app/dto/profit-center';
import { JwtAuthGuard } from 'src/app/guard';
import { AbstractProfitCenterService } from 'src/app/interface/profit-center';
import { UserInterface } from 'src/app/interface/user';

  @UseGuards(JwtAuthGuard)
  @ApiTags('Profit Center')
  @ApiBearerAuth('Bearer')
  @Controller('profit-center')
  export class ProfitCenterController {
    constructor(
      private readonly profitCenterService: AbstractProfitCenterService,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create Profit Center' })
    async postProfitCenter(
        @Body() ProfitCenterDTO: ProfitCenterDTO,
        @Request() req: UserInterface): Promise<any> {
      return this.profitCenterService.postProfitCenter(ProfitCenterDTO,req);
    }

    @Put('/:id')
    @ApiOperation({ summary: 'Update Profit Center' })
    async updateProfitCenter(
        @Param('id') id: string,
        @Body() ProfitCenterDTO: ProfitCenterDTO,
        @Request() req: UserInterface): Promise<any> {
      return this.profitCenterService.updateProfitCenter(id,ProfitCenterDTO,req);
    }

    @Get()
    @ApiOperation({ summary: 'Get All Profit Center' })
    async getAllProfitCenters(
        @Request() req: UserInterface): Promise<any> {
      return this.profitCenterService.getAllProfitCenters(req);
    }

    @Get('/:id')
    @ApiOperation({ summary: 'Get Profit Center By ID' })
    async getProfitCenter(
      @Param('id') id: string,): Promise<any> {
      return this.profitCenterService.getProfitCenter(id);
    }

    @Delete('/:id')
    @ApiOperation({ summary: 'Delete Profit Center' })
    async deleteProfitCenter(
      @Param('id') id: string,): Promise<any> {
      return this.profitCenterService.deleteProfitCenter(id);
    }
  
  }
  