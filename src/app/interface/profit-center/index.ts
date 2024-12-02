import { ProfitCenterDTO } from "src/app/dto/profit-center";
import { UserInterface } from "../user";

  export abstract class AbstractProfitCenterRepository {
    abstract postProfitCenter(dto: ProfitCenterDTO, req: UserInterface): Promise<any>;
    abstract updateProfitCenter(id: string, dto: ProfitCenterDTO, req: UserInterface): Promise<any>;
    abstract getAllProfitCenters(req: UserInterface): Promise<any>;
    abstract getProfitCenter(id: String): Promise<any>;
    abstract deleteProfitCenter(id: string): Promise<any>;
  }
  
  export abstract class AbstractProfitCenterService {
    abstract postProfitCenter(dto: ProfitCenterDTO, req: UserInterface): Promise<any>;
    abstract updateProfitCenter(id: string, dto: ProfitCenterDTO, req: UserInterface): Promise<any>;
    abstract getAllProfitCenters(req: UserInterface): Promise<any>;
    abstract getProfitCenter(id: String): Promise<any>;
    abstract deleteProfitCenter(id: string): Promise<any>;
  }
 