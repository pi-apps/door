import { Inject, Provide } from '@midwayjs/decorator';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/orm';
import { Top100BalanceEntity } from '../entity/top100-balance';
import { Repository } from 'typeorm';

/**
 * 缓存
 */
@Provide()
export class Top100BalanceService extends BaseService {

  @Inject()
  ctx;

  @InjectEntityModel(Top100BalanceEntity)
  top100BalanceEntity: Repository<Top100BalanceEntity>;

  async list() {

    // const query = this.ctx.query;
    // console.log(query)

    const top100Balances = await this.top100BalanceEntity.find({
      order: {
        balance: "DESC",
      },
      take: 10,
    });
    return top100Balances;
  }

}
