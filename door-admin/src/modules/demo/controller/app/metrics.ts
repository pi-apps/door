import { BaseController, CoolController } from '@cool-midway/core';
import { Get, Inject } from '@midwayjs/decorator';
import { DemoMetricEntity } from '../../entity/metric';
import { DemoMetricsService } from '../../service/metrics';
/**
 * 测试
 */
@CoolController({
  api: ['list'],
  entity: DemoMetricEntity,
  service: DemoMetricsService
})
export class CoolMetricsController extends BaseController {

  @Inject()
  demoMetricsService: DemoMetricsService;

  @Get("/today")
  async today() {
    return await this.demoMetricsService.today();
  }
}
