import { Inject, Provide } from '@midwayjs/decorator';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/orm';
import { DemoMetricEntity } from '../entity/metric';
import { Repository } from 'typeorm';
import { LessThan } from 'typeorm';
var moment = require('moment');

/**
 * 缓存
 */
@Provide()
export class DemoMetricsService extends BaseService {

  @Inject()
  ctx;

  @InjectEntityModel(DemoMetricEntity)
  demoMetricEntity: Repository<DemoMetricEntity>;

  async list() {
    const metrics = await this.demoMetricEntity.find(
      { relations: ["operation_types"], where: { "ts": LessThan(moment().format()) } },
    );
    return metrics;
  }

  async today() {
    const metrics = await this.demoMetricEntity.find(
      {
        relations: ["operation_types"],
        where: { "ts": LessThan(moment().format()) },
        order: {
          ts: "DESC",
        },
        take: 1
      }
    );
    return metrics[0];
  }
}
