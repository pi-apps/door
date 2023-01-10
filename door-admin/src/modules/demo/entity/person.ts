import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 描述
 */
@EntityModel('demo_persons')
export class DemoPersonEntity extends BaseEntity {
    @Column({ comment: '姓名' })
    name: string;

    @Column({ comment: '年龄' })
    age: number;

}
