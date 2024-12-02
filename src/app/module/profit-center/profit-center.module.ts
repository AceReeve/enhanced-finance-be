import { Module } from '@nestjs/common';
import { ProfitCenterSchemaModule } from 'src/app/models/profit-center/profit-center.schema.module';
import { ProfitCenterController } from 'src/app/controller/profit-center/profit-center.controller';
import { AbstractProfitCenterRepository, AbstractProfitCenterService } from 'src/app/interface/profit-center';
import { ProfitCenterService } from 'src/app/services/profit-center/profit-center.service';
import { ProfitCenterRepository } from 'src/app/repository/profit-center/profit-center.repository';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [ProfitCenterSchemaModule],
  controllers: [ProfitCenterController],
  // Inversion
  providers: [
    {
      provide: AbstractProfitCenterService,
      useClass: ProfitCenterService,
    },
    {
      provide: AbstractProfitCenterRepository,
      useClass: ProfitCenterRepository,
    },
    JwtService,
  ],

  exports: [
    {
        provide: AbstractProfitCenterService,
        useClass: ProfitCenterService,
      },
      {
        provide: AbstractProfitCenterRepository,
        useClass: ProfitCenterRepository,
      },
  ],
})
export class ProfitCenterModule {}
