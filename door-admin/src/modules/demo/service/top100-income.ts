import { Inject, Provide } from '@midwayjs/decorator';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/orm';
import { Top100IncomeEntity } from '../entity/top100-income';
import { Repository } from 'typeorm';

/**
 * 缓存
 */
@Provide()
export class Top100IncomeService extends BaseService {

  @Inject()
  ctx;

  @InjectEntityModel(Top100IncomeEntity)
  top100IncomeEntity: Repository<Top100IncomeEntity>;

  async list() {

    // const query = this.ctx.query;
    // console.log(query)

    const top100Incomes = await this.top100IncomeEntity.find({
      order: {
        income: "DESC",
      },
      take: 10,
    });
    return top100Incomes;
  }

}
