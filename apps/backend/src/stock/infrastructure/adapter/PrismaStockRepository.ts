import { StockImpl } from 'src/stock/domain/stock.impl';
import { StockRepository } from '../../domain/stock.repository';

export class PrismaStockRepository implements StockRepository {

  findById(id: number): StockImpl {
    throw new Error('Method not implemented.');
  }

  findAll(): StockImpl[] {
    throw new Error('Method not implemented.');
  }

  save(stock: StockImpl): void {
    throw new Error('Method not implemented.');
  }

}