import { GetStockUseCase } from '../../interface/port/in/getStock.usecase';
import { GetStockListUseCase } from '../../interface/port/in/getStockList.usecase';
import { StockRequest } from '../../interface/carrier/stockRequest.carrier';
import { StockResponse } from '../../interface/carrier/stockResponse.carrier';

export class StockQueryService implements GetStockUseCase, GetStockListUseCase {

  get(id: number): StockResponse {
    throw new Error('Method not implemented.');
  }

  getStockByCondition(request: StockRequest): StockResponse {
    throw new Error('Method not implemented.');
  }

}