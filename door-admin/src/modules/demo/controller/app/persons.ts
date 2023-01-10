import { BaseController, CoolController } from '@cool-midway/core';
import { DemoPersonEntity } from '../../entity/person';

/**
 * 测试
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'page', 'list'],
  entity: DemoPersonEntity,
})
export class CoolPersonsController extends BaseController { }
