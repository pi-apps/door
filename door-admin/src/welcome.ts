import { Controller, Get, Inject } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';

/**
 * 欢迎界面
 */
@Controller('/')
export class WelcomeController {
  @Inject()
  ctx: Context;

  @Get('/')
  public async welcome() {
    await this.ctx.render('welcome', {
      text: 'Welcome to join us!!!',
    });
  }
}
