import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column, ManyToOne } from 'typeorm';

import { DemoMetricEntity } from './metric';
/**
 * 描述
 */
@EntityModel('demo_metric_operation_details')
export class DemoMetricOperationDetailEntity extends BaseEntity {


    @ManyToOne(type => DemoMetricEntity, metric => metric.operation_types)
    metric: DemoMetricEntity;

    @Column({ comment: 'operation type' })
    type: number;

    @Column({ comment: 'operation count' })
    count: number;

}
