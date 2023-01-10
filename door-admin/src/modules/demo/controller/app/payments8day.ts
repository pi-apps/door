import { BaseController, CoolController } from '@cool-midway/core';
import { Inject } from '@midwayjs/decorator';
import { Payment8dayEntity } from '../../entity/payments8day';
import { DemoPayments8dayService } from '../../service/payments8day'
/**
 * 测试
 */
@CoolController({
  api: ['list'],
  entity: Payment8dayEntity,
  service: DemoPayments8dayService
})
export class CoolPayments8dayController extends BaseController {

  @Inject()
  payment8dayEntity: Payment8dayEntity;

}
