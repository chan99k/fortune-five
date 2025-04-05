import { StockRequest } from '../../carrier/stockRequest.carrier';

export interface CreateStockUseCase {
  // CQS 지키기. 상태를 바꾸는 UseCase 이므로 아무것도 return 하지 않는게 원칙.
  // 생성의 경우에는 어쩔 수 없이 id를 내보내야 한다.
  // CQRS: https://myeongjae.kim/blog/2022/02/03/fundamental-cqrs
  create(request: StockRequest): {
    id: number;
  };
}