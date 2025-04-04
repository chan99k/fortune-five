import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { QueryHandlers } from './application/queries';

@Module({
  imports: [CqrsModule],
  providers: [
    ...QueryHandlers,
  ],
  controllers: [],
})
export class StockModule {
  // Stock 종목 정보에 대한 조회 쿼리 수행
  // Open API 로 부터 종목 정보를 벌크 인서트하여 db에 보관
}
