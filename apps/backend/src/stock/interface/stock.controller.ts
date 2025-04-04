import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import * as console from 'node:console';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Stock } from '../domain/stock';
import { GetStockQuery } from '../application/queries/getStock.query';
import { StockRequest } from './carrier/stockRequest.carrier';

@Controller('stock')
export class StockController {

  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {
  }

  @Post()
  async createStock(@Body() createStockRequest: StockRequest): Promise<void> {
    await this.commandBus.execute(createStockRequest);
  }

  @Get(':id')
  async findById(@Param('id') stockId: number): Promise<Stock> {
    return this.queryBus.execute(new GetStockQuery(stockId));
  }

}