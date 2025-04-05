import { Stock } from '../../domain/stock';
import { StockImpl } from '../../domain/stock.impl';

export type StockRequest = Omit<Stock, 'id'> // 강력한 Stock 보호를 위해서는 Class 로 만들어야 함.

export const toEntity = (id: number, request: StockRequest): StockImpl =>
  new StockImpl(
    id,
    request.basDt,
    request.corpNm,
    request.crno,
    request.isinCd,
    request.itmsNm,
    request.mrktCtg,
    request.srtnCd,
  );