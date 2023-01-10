import { BaseController, CoolController } from '@cool-midway/core';
import { Inject } from '@midwayjs/decorator';
import { Top100ExpenditureEntity } from '../../entity/top100-expenditure';
import { Top100ExpenditureService } from '../../service/top100-expenditure';
/**
 * 测试
 */
@CoolController({
  api: ['list'],
  entity: Top100ExpenditureEntity,
  service: Top100ExpenditureService
})
export class CoolTop100ExpenditureController extends BaseController {

  @Inject()
  top100ExpenditureEntity: Top100ExpenditureEntity;

}
