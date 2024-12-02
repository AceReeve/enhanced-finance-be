import { CostCenterDTO } from "src/app/dto/cost-center";
import { UserInterface } from "../user";

  export abstract class AbstractCostCenterRepository {
    abstract postCostCenter(dto: CostCenterDTO, req: UserInterface): Promise<any>;
    abstract updateCostCenter(id: string, dto: CostCenterDTO, req: UserInterface): Promise<any>;
    abstract getAllCostCenters(req: UserInterface): Promise<any>;
    abstract getCostCenter(id: String): Promise<any>;
    abstract deleteCostCenter(id: string): Promise<any>;
  }
  
  export abstract class AbstractCostCenterService {
    abstract postCostCenter(dto: CostCenterDTO, req: UserInterface): Promise<any>;
    abstract updateCostCenter(id: string, dto: CostCenterDTO, req: UserInterface): Promise<any>;
    abstract getAllCostCenters(req: UserInterface): Promise<any>;
    abstract getCostCenter(id: String): Promise<any>;
    abstract deleteCostCenter(id: string): Promise<any>;
  }
 