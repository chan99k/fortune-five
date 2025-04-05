import { StockResponse } from '../../carrier/stockResponse.carrier';

export interface GetStockUseCase {
  get(id: number): StockResponse;
}