import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 商品
 */
@EntityModel('demo_top100_balance')
export class Top100BalanceEntity extends BaseEntity {

  @Column({ comment: 'address', length: 56, default: null })
  address: string;

  // @Column({ comment: 'innum', })
  // innum: number;

  @Column({ comment: 'balance', default: null, type: 'decimal', precision: 20, scale: 7 })
  balance: number;


  // @Column({ comment: 'outnum' })
  // outnum: number;

  // @Column({ comment: 'expenditure', default: null, type: 'decimal', precision: 20, scale: 7 })
  // expenditure: number;

}

