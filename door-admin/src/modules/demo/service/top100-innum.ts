import { Inject, Provide } from '@midwayjs/decorator';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/orm';
import { Top100InnumEntity } from '../entity/top100-innum';
import { Repository } from 'typeorm';

/**
 * 缓存
 */
@Provide()
export class Top100InnumService extends BaseService {

  @Inject()
  ctx;

  @InjectEntityModel(Top100InnumEntity)
  top100InnumEntity: Repository<Top100InnumEntity>;

  async list() {

    // const query = this.ctx.query;
    // console.log(query)

    const top100Innums = await this.top100InnumEntity.find({
      order: {
        innum: "DESC",
      },
      take: 10,
    });
    return top100Innums;
  }

}
