import { ICommand } from '@nestjs/cqrs';
import { StockRequest } from '../../interface/carrier/stockRequest.carrier';

export class CreateStockCommand implements ICommand {
  constructor(public readonly stock: StockRequest) {
  }
}