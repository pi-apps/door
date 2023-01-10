import { Inject, Provide } from '@midwayjs/decorator';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/orm';
import { Payment8dayEntity } from '../entity/payments8day';
import { Repository } from 'typeorm';

/**
 * 缓存
 */
@Provide()
export class DemoPayments8dayService extends BaseService {

  @Inject()
  ctx;

  @InjectEntityModel(Payment8dayEntity)
  demoPayments8dayEntity: Repository<Payment8dayEntity>;

  async list() {

    const query = this.ctx.query;
    if (query.address && query.address != 'undefined') {
      const Payments8days = await this.demoPayments8dayEntity.find(
        { where: { "address": query.address } },
      );
      return Payments8days;
    } else {
      const Payments8days = await this.demoPayments8dayEntity.find();
      return Payments8days;
    }

  }

}
