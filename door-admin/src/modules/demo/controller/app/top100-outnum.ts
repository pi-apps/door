import { BaseController, CoolController } from '@cool-midway/core';
import { Inject } from '@midwayjs/decorator';
import { Top100OutnumEntity } from '../../entity/top100-outnum';
import { Top100OutnumService } from '../../service/top100-outnum';

/**
 * 测试
 */
@CoolController({
  api: ['list'],
  entity: Top100OutnumEntity,
  service: Top100OutnumService
})
export class CoolTop100OutnumController extends BaseController {

  @Inject()
  top100OutnumEntity: Top100OutnumEntity;

}
