import { CompanyDTO } from "src/app/dto/company";

  export abstract class AbstractCompanyRepository {
    abstract postCompany(dto: CompanyDTO): Promise<any>;
    abstract updateCompany(id: string, dto: CompanyDTO): Promise<any>;
    abstract getAllCompany(): Promise<any>;
    abstract getCompany(id: String): Promise<any>;
    abstract deleteCompany(id: string): Promise<any>;
  }
  
  export abstract class AbstractCompanyService {
    abstract postCompany(dto: CompanyDTO): Promise<any>;
    abstract updateCompany(id: string, dto: CompanyDTO): Promise<any>;
    abstract getAllCompany(): Promise<any>;
    abstract getCompany(id: String): Promise<any>;
    abstract deleteCompany(id: string): Promise<any>;
  }
 