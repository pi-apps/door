import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column, OneToMany, JoinColumn } from 'typeorm';

import { DemoMetricOperationDetailEntity } from './operation_details';
/**
 * 描述
 */
@EntityModel('demo_metrics')
export class DemoMetricEntity extends BaseEntity {
    @Column({ comment: 'accounts', default: null })
    accounts: number;

    @Column({ comment: 'accounts_created', default: null })
    accounts_created: number;

    @Column({ comment: 'avg_ledger_time', type: 'decimal', precision: 5, scale: 2, default: null })
    avg_ledger_time: number;

    @Column({ comment: 'daily_active_accounts', default: null })
    daily_active_accounts: number;

    @Column({ comment: 'failed_transactions', default: null })
    failed_transactions: number;

    @Column({ comment: 'fee_pool', default: null })
    fee_pool: string;

    @Column({ comment: 'finalized', default: null })
    finalized: boolean;

    @Column({ comment: 'funded_trustlines', default: null })
    funded_trustlines: number;

    @Column({ comment: 'ledgers', default: null })
    ledgers: number;

    @Column({ comment: 'new_assets', default: null })
    new_assets: number;

    @Column({ comment: 'operations', default: null })
    operations: number;

    @OneToMany(type => DemoMetricOperationDetailEntity, detail => detail.metric)
    @JoinColumn()
    operation_types: DemoMetricOperationDetailEntity[];


    @Column({ comment: 'payments', default: null })
    payments: number;

    @Column({ comment: 'reserve', default: null })
    reserve: string;

    @Column({ comment: 'total_xlm', default: null })
    total_xlm: string;

    @Column({ comment: 'trades', default: null })
    trades: number;

    @Column({ comment: 'transactions', default: null })
    transactions: number;

    @Column({ comment: 'trustlines', default: null })
    trustlines: number;

    @Column({ comment: 'ts', default: '2000-01-01' })
    ts: Date;

    @Column({ comment: 'volume', default: null, type: 'decimal', precision: 20, scale: 7 })
    volume: number;

}
