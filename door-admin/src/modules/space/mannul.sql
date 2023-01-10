
CREATE TABLE `space_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `createTime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '创建时间',
  `updateTime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6) COMMENT '更新时间',
  `url` varchar(255) NOT NULL COMMENT '地址',
  `type` varchar(255) NOT NULL COMMENT '类型',
  `classifyId` bigint(20) DEFAULT NULL COMMENT '分类ID',
  PRIMARY KEY (`id`),
  KEY `IDX_eb1da2f304c760846b5add09b3` (`createTime`),
  KEY `IDX_d7a2539961e9aacba8b353f3c9` (`updateTime`)
) ENGINE=InnoDB;

CREATE TABLE `space_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `createTime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '创建时间',
  `updateTime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6) COMMENT '更新时间',
  `name` varchar(255) NOT NULL COMMENT '类别名称',
  `parentId` tinyint(4) DEFAULT NULL COMMENT '父分类ID',
  PRIMARY KEY (`id`),
  KEY `IDX_6669449501d275f367ca295472` (`createTime`),
  KEY `IDX_0749b509b68488caecd4cc2bbc` (`updateTime`)
) ENGINE=InnoDB;

