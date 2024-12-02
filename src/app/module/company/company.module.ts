import { Module } from '@nestjs/common';
import { CompanyController } from 'src/app/controller/Company/Company.controller';
import { CompanyService } from 'src/app/services/Company/Company.service';
import { CompanyRepository } from 'src/app/repository/Company/Company.repository';
import { AbstractCompanyService, AbstractCompanyRepository } from 'src/app/interface/Company';
import { CompanySchemaModule } from 'src/app/models/company/company.schema.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [CompanySchemaModule],
  controllers: [CompanyController],
  providers: [
    {
      provide: AbstractCompanyService,
      useClass: CompanyService, 
    },
    {
      provide: AbstractCompanyRepository,
      useClass: CompanyRepository,
    },
    CompanyService,
    CompanyRepository,
    JwtService, 
  ],
  exports: [
    {
      provide: AbstractCompanyService,
      useClass: CompanyService,
    },
    {
      provide: AbstractCompanyRepository,
      useClass: CompanyRepository,
    },
    JwtService,
  ],
})
export class CompanyModule {}
