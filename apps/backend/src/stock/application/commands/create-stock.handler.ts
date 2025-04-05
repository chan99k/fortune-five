import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CreateStockCommand } from './create-stock.command';
import { Injectable } from '@nestjs/common';
import { StockRepository } from '../../domain/stock.repository';
import { toEntity } from '../../interface/carrier/stockRequest.carrier';

@Injectable()
@CommandHandler(CreateStockCommand)
export class CreateStockHandler implements ICommandHandler<CreateStockCommand> {

  constructor(
    private readonly repository: StockRepository,
    private readonly publisher: EventPublisher,
  ) {
  }

  execute(command: CreateStockCommand): Promise<any> {
    throw new Error('Method not implemented.');
  }

}