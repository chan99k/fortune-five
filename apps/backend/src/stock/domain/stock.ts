import { AggregateRoot } from '@nestjs/cqrs';

export interface Stock {
  id: number;
  basDt: string;    // YYYY MM DD 조회의 기준일, 통상 거래일
  srtnCd: string;   // 종목코드보다 짧으면서 유일성이 보장되는 코드
  isinCd: string;   // 국제 채권 식별번호. 유가증권(채권)의 국제인증 고유번호
  mrktCtg: string;  // 시장 구분 (KOSPI / KOSDAQ / KONEX 등)
  itmsNm: string;   // 유가증권 국제인증 고유번호 코드 이름
  crno: string;     // 종목의 법인등록번호
  corpNm: string;   // 종목의 법인 명칭

  create(
    id: number,
    basDt: string,
    corpNm: string,
    crno: string,
    isinCd: string,
    itmsNm: string,
    mrktCtg: string,
    srtnCd: string,
  ): Stock;

  updateInfo(): void;

}

