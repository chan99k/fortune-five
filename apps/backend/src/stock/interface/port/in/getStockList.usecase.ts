import { StockResponse } from '../../carrier/stockResponse.carrier';
import { StockRequest } from '../../carrier/stockRequest.carrier';

export interface GetStockListUseCase {
  getStockByCondition(request: StockRequest): StockResponse;
}