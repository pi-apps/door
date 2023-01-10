import { BaseController, CoolController } from '@cool-midway/core';
import { Inject } from '@midwayjs/decorator';
import { PiDistributionEntity } from '../../entity/pi-distribution';

/**
 * 测试
 */
@CoolController({
  api: ['list'],
  entity: PiDistributionEntity
})
export class CoolTop100BalanceController extends BaseController {

  @Inject()
  piDistributionEntity: PiDistributionEntity;

}
