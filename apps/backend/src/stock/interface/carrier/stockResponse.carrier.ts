import { Stock } from '../../domain/stock';

export type StockResponse = {
  id: number;
  shortenCode: string;   // 종목코드보다 짧으면서 유일성이 보장되는 코드
  internationalSecuritiesIdentificationNumber: string;   // 국제 채권 식별번호. 유가증권(채권)의 국제인증 고유번호
  marketCategory: string;  // 시장 구분 (KOSPI / KOSDAQ / KONEX 등)
  itemsName: string;   // 유가증권 국제인증 고유번호 코드 이름
  cooperationName: string;   // 종목의 법인 명칭
};

export const fromEntity = (stock: Stock): StockResponse => <StockResponse>({
  id: stock.id,
  shortenCode: stock.srtnCd,
  internationalSecuritiesIdentificationNumber: stock.isinCd,
  marketCategory: stock.mrktCtg,
  itemsName: stock.itmsNm,
  cooperationName: stock.corpNm,
});