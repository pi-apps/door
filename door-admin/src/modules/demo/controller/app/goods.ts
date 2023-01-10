import { Get, Provide } from "@midwayjs/decorator";
import { DemoGoodsEntity } from '../../entity/goods';
import { BaseController, CoolController } from '@cool-midway/core';
import { DemoGoodsService } from '../../service/goods';

/**
 * 测试
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'page', 'list'],
  entity: DemoGoodsEntity,
  service: DemoGoodsService,
})

export class CoolGoodsController extends BaseController {
  /**
   * 其他接口
   */
  @Get("/other")
  async other() {
    return this.ok("hello, cool-admin!!!");
  }
}
