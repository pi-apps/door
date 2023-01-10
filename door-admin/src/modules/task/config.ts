import { ModuleConfig } from '@cool-midway/core';
import { TaskMiddleware } from './middleware/task';

/**
 * 模块配置
 */
export default () => {
  return {
    // 模块名称
    name: '任务调度',
    // 模块描述
    description: '任务调度模块，支持分布式任务，由redis整个集群的任务',
    // 中间件
    middlewares: [TaskMiddleware],
    // 模块加载顺序，默认为0，值越大越优先加载
    order: 0,
  } as ModuleConfig;
};
