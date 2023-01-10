
CREATE TABLE `task_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `createTime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '创建时间',
  `updateTime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6) COMMENT '更新时间',
  `jobId` varchar(255) DEFAULT NULL COMMENT '任务ID',
  `repeatConf` varchar(1000) DEFAULT NULL COMMENT '任务配置',
  `name` varchar(255) NOT NULL COMMENT '名称',
  `cron` varchar(255) DEFAULT NULL COMMENT 'cron',
  `limit` int(11) DEFAULT NULL COMMENT '最大执行次数 不传为无限次',
  `every` int(11) DEFAULT NULL COMMENT '每间隔多少毫秒执行一次 如果cron设置了 这项设置就无效',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '状态 0:停止 1：运行',
  `startDate` datetime DEFAULT NULL COMMENT '开始时间',
  `endDate` datetime DEFAULT NULL COMMENT '结束时间',
  `data` varchar(255) DEFAULT NULL COMMENT '数据',
  `service` varchar(255) DEFAULT NULL COMMENT '执行的service实例ID',
  `type` tinyint(4) NOT NULL DEFAULT '0' COMMENT '状态 0:系统 1：用户',
  `nextRunTime` datetime DEFAULT NULL COMMENT '下一次执行时间',
  `taskType` tinyint(4) NOT NULL DEFAULT '0' COMMENT '状态 0:cron 1：时间间隔',
  PRIMARY KEY (`id`),
  KEY `IDX_6ced02f467e59bd6306b549bb0` (`createTime`),
  KEY `IDX_2adc6f9c241391126f27dac145` (`updateTime`)
) ENGINE=InnoDB;

CREATE TABLE `task_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `createTime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '创建时间',
  `updateTime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6) COMMENT '更新时间',
  `taskId` bigint(20) DEFAULT NULL COMMENT '任务ID',
  `status` tinyint(4) NOT NULL DEFAULT '0' COMMENT '状态 0:失败 1：成功',
  `detail` text COMMENT '详情描述',
  PRIMARY KEY (`id`),
  KEY `IDX_b9af0e100be034924b270aab31` (`createTime`),
  KEY `IDX_8857d8d43d38bebd7159af1fa6` (`updateTime`),
  KEY `IDX_1142dfec452e924b346f060fda` (`taskId`)
) ENGINE=InnoDB;
