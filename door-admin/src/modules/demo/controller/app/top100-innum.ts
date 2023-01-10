import { BaseController, CoolController } from '@cool-midway/core';
import { Inject } from '@midwayjs/decorator';
import { Top100InnumEntity } from '../../entity/top100-innum';
import { Top100InnumService } from '../../service/top100-innum';
/**
 * 测试
 */
@CoolController({
  api: ['list'],
  entity: Top100InnumEntity,
  service: Top100InnumService
})
export class CoolTop100InnumController extends BaseController {

  @Inject()
  top100InnumEntity: Top100InnumEntity;

}
