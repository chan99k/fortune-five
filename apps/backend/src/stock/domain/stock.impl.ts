import { Stock } from './stock';
import { Injectable } from '@nestjs/common';
import { AggregateRoot } from '@nestjs/cqrs';
import { StockCreatedEvent } from '../application/events/stock-created.event';

@Injectable()
export class StockImpl extends AggregateRoot implements Stock {

  constructor(
    private readonly _id: number,
    private _basDt: string,
    private _corpNm: string,
    private _crno: string,
    private _isinCd: string,
    private _itmsNm: string,
    private _mrktCtg: string,
    private _srtnCd: string,
  ) {
    super();
  }

  public create(
    id: number,
    basDt: string,
    corpNm: string,
    crno: string,
    isinCd: string,
    itmsNm: string,
    mrktCtg: string,
    srtnCd: string,
  ): StockImpl {
    const stock = new StockImpl(
      id,
      basDt,
      corpNm,
      crno,
      isinCd,
      itmsNm,
      mrktCtg,
      srtnCd,
    );

    stock.apply(new StockCreatedEvent(stock));

    return stock;
  }

  updateInfo(): void {
  }


  get id(): number {
    return this._id;
  }

  get basDt(): string {
    return this._basDt;
  }

  get corpNm(): string {
    return this._corpNm;
  }

  get crno(): string {
    return this._crno;
  }

  get isinCd(): string {
    return this._isinCd;
  }

  get itmsNm(): string {
    return this._itmsNm;
  }

  get mrktCtg(): string {
    return this._mrktCtg;
  }

  get srtnCd(): string {
    return this._srtnCd;
  }


}