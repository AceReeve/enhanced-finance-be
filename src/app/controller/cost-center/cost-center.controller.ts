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
import { CostCenterDTO } from 'src/app/dto/Cost-center';
import { JwtAuthGuard } from 'src/app/guard';
import { AbstractCostCenterService } from 'src/app/interface/Cost-center';
import { UserInterface } from 'src/app/interface/user';

  @UseGuards(JwtAuthGuard)
  @ApiTags('Cost Center')
  @ApiBearerAuth('Bearer')
  @Controller('cost-center')
  export class CostCenterController {
    constructor(
      private readonly costCenterService: AbstractCostCenterService,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create Cost Center' })
    async postCostCenter(
        @Body() CostCenterDTO: CostCenterDTO,
        @Request() req: UserInterface): Promise<any> {
      return this.costCenterService.postCostCenter(CostCenterDTO,req);
    }

    @Put('/:id')
    @ApiOperation({ summary: 'Update Cost Center' })
    async updateCostCenter(
        @Param('id') id: string,
        @Body() costCenterDTO: CostCenterDTO,
        @Request() req: UserInterface): Promise<any> {
      return this.costCenterService.updateCostCenter(id,costCenterDTO,req);
    }

    @Get()
    @ApiOperation({ summary: 'Get All Cost Center' })
    async getAllCostCenters(
        @Request() req: UserInterface): Promise<any> {
      return this.costCenterService.getAllCostCenters(req);
    }

    @Get('/:id')
    @ApiOperation({ summary: 'Get Cost Center By ID' })
    async getCostCenter(
      @Param('id') id: string,): Promise<any> {
      return this.costCenterService.getCostCenter(id);
    }

    @Delete('/:id')
    @ApiOperation({ summary: 'Delete Cost Center' })
    async deleteCostCenter(
      @Param('id') id: string,): Promise<any> {
      return this.costCenterService.deleteCostCenter(id);
    }
  
  }
  