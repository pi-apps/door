import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 商品
 */
@EntityModel('demo_payments8day')
export class Payment8dayEntity extends BaseEntity {
  @Column({ comment: 'ts', default: '2000-01-01' })
  ts: Date;

  @Column({ comment: 'address', length: 56, default: null })
  address: string;

  @Column({ comment: 'innum', })
  innum: number;

  @Column({ comment: 'income', default: null, type: 'decimal', precision: 20, scale: 7 })
  income: number;


  @Column({ comment: 'outnum' })
  outnum: number;

  @Column({ comment: 'expenditure', default: null, type: 'decimal', precision: 20, scale: 7 })
  expenditure: number;

}

