import { StockImpl } from '../../../domain/stock.impl';

export interface SaveStockPort {
  save(stock: StockImpl): void;
}