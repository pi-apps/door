CREATE TABLE `demo_goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `createTime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '创建时间',
  `updateTime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6) COMMENT '更新时间',
  `title` varchar(255) NOT NULL COMMENT '标题',
  `pic` varchar(255) NOT NULL COMMENT '图片',
  `price` decimal(5,2) NOT NULL COMMENT '价格',
  `type` tinyint(4) NOT NULL DEFAULT '0' COMMENT '分类 0-衣服 1-鞋子 2-裤子',
  PRIMARY KEY (`id`),
  KEY `IDX_5075bf301ed9c39b5ca534231c` (`createTime`),
  KEY `IDX_82703e0477d1219261277df718` (`updateTime`)
) ENGINE=InnoDB;

CREATE TABLE `demo_persons` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `createTime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '创建时间',
  `updateTime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6) COMMENT '更新时间',
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '姓名',
  `age` int(11) NOT NULL COMMENT '年龄',
  PRIMARY KEY (`id`),
  KEY `IDX_de4feb60064df2815f466d50a0` (`createTime`),
  KEY `IDX_b6d3db975acecc9e1282e77bd8` (`updateTime`)
) ENGINE=InnoDB;

CREATE TABLE `demo_wallets_created_by_day` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `createTime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '创建时间',
  `updateTime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6) COMMENT '更新时间',
  `day` datetime NOT NULL COMMENT 'day',
  `count` int(11) NOT NULL COMMENT 'count',
  PRIMARY KEY (`id`),
  KEY `IDX_83b616c582d68ffa101d2bdb9b` (`createTime`),
  KEY `IDX_4e866a9182086aa84236071fa4` (`updateTime`)
) ENGINE=InnoDB;


