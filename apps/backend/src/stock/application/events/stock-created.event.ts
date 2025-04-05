import { StockRequest } from '../../interface/carrier/stockRequest.carrier';

export class StockCreatedEvent {

  constructor(public readonly stock: StockRequest) {
  }
}