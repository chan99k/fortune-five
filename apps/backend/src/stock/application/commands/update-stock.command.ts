import { ICommand } from '@nestjs/cqrs';
import { StockRequest } from '../../interface/carrier/stockRequest.carrier';

export class UpdateStockCommand implements ICommand {
  constructor(public readonly stock: StockRequest) {
  }
}