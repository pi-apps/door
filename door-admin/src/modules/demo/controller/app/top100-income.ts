import { BaseController, CoolController } from '@cool-midway/core';
import { Inject } from '@midwayjs/decorator';
import { Top100IncomeEntity } from '../../entity/top100-income';
import { Top100IncomeService } from '../../service/top100-income';

/**
 * 测试
 */
@CoolController({
  api: ['list'],
  entity: Top100IncomeEntity,
  service: Top100IncomeService
})
export class CoolTop100IncomeController extends BaseController {

  @Inject()
  top100IncomeEntity: Top100IncomeEntity;

}
