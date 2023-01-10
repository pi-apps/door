import { Inject, Provide } from '@midwayjs/decorator';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/orm';
import { Top100ExpenditureEntity } from '../entity/top100-expenditure';
import { Repository } from 'typeorm';

/**
 * 缓存
 */
@Provide()
export class Top100ExpenditureService extends BaseService {

  @Inject()
  ctx;

  @InjectEntityModel(Top100ExpenditureEntity)
  top100ExpenditureEntity: Repository<Top100ExpenditureEntity>;

  async list() {

    // const query = this.ctx.query;
    // console.log(query)

    const top100Expenditures = await this.top100ExpenditureEntity.find({
      order: {
        expenditure: "DESC",
      },
      take: 10,
    });
    return top100Expenditures;
  }

}
