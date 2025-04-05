import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { StockCreatedEvent } from './stock-created.event';
import { clc } from '@nestjs/common/utils/cli-colors.util';

@EventsHandler(StockCreatedEvent)
export class StockCreatedHandler implements IEventHandler<StockCreatedEvent> {
  handle(event: StockCreatedEvent) {
    console.log(clc.green('Stock created Event published...'));
  }

}