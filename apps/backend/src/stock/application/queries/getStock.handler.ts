import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetStockQuery } from './getStock.query';
import { StockRepository } from '../../domain/stock.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { fromEntity, StockResponse } from '../../interface/carrier/stockResponse.carrier';

@Injectable()
@QueryHandler(GetStockQuery)
export class GetStockHandler implements IQueryHandler<GetStockQuery> {

  constructor(private repository: StockRepository) {
  }

  async execute(query: GetStockQuery): Promise<StockResponse> {
    const id = query.stockId;
    const stock = this.repository.findById(id);

    if (!stock) {
      throw new NotFoundException(`stock with ID : ${id} not found`);
    }

    return fromEntity(stock);
  }
}