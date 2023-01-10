import { Inject, Provide } from '@midwayjs/decorator';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/orm';
import { Top100OutnumEntity } from '../entity/top100-outnum';
import { Repository } from 'typeorm';

/**
 * 缓存
 */
@Provide()
export class Top100OutnumService extends BaseService {

  @Inject()
  ctx;

  @InjectEntityModel(Top100OutnumEntity)
  top100OutnumEntity: Repository<Top100OutnumEntity>;

  async list() {

    // const query = this.ctx.query;
    // console.log(query)

    const top100Outnums = await this.top100OutnumEntity.find({
      order: {
        outnum: "DESC",
      },
      take: 10,
    });
    return top100Outnums;
  }

}
