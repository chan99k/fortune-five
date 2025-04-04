import { StockImpl } from '../../../domain/stock.impl';

export interface LoadStockPort {
  findById(id: number): StockImpl;

  findAll(): StockImpl[]; // cond 어떻게 전달할 것인가? 전달할 컨디션 추가 필요함
}