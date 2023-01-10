import { BaseController, CoolController } from '@cool-midway/core';
import { Inject } from '@midwayjs/decorator';
import { Top100BalanceEntity } from '../../entity/top100-balance';
import { Top100BalanceService } from '../../service/top100-balance';

/**
 * 测试
 */
@CoolController({
  api: ['list'],
  entity: Top100BalanceEntity,
  service: Top100BalanceService
})
export class CoolTop100BalanceController extends BaseController {

  @Inject()
  top100BalanceEntity: Top100BalanceEntity;

}
