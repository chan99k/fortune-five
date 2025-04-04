import { LoadStockPort } from '../interface/port/out/loadStock.port';
import { SaveStockPort } from '../interface/port/out/saveStock.port';

export interface StockRepository extends LoadStockPort, SaveStockPort {
}