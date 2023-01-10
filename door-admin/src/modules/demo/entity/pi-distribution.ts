import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 商品
 */
@EntityModel('demo_pi_distribution')
export class PiDistributionEntity extends BaseEntity {

  @Column({ comment: 'label0' })
  label0: string;

  @Column({ comment: 'label1' })
  label1: string;

  @Column({ comment: 'accounts', })
  accounts: number;

  @Column({ comment: 'totalpi' })
  totalpi: number;

  @Column({ comment: 'pipercentage' })
  pipercentage: number;

}

