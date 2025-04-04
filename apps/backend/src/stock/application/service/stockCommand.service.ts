import { StockRequest, toEntity } from '../../interface/carrier/stockRequest.carrier';
import { CreateStockUseCase } from '../../interface/port/in/createStock.usecase';
import { StockRepository } from '../../domain/stock.repository';

export class StockCommandService implements CreateStockUseCase {

  constructor(private stockSavePort: StockRepository) {
  }

  public create = (request: StockRequest): { id: number } => {
    const id = this.getNextId();
    this.stockSavePort.save(toEntity(id, request));

    return { id };
  };

  private getNextId: () => number = ((initialId: number) => {
    let nextId = initialId;
    return () => nextId++;
  })(1);

}