import { IQuery } from '@nestjs/cqrs';

export class GetStockQuery implements IQuery {

  constructor(
    public readonly stockId: number,
  ) {
  }
}