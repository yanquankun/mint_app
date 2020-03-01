/*
Navicat MySQL Data Transfer

Source Server         : mint
Source Server Version : 50549
Source Host           : localhost:3306
Source Database       : mint_ap

Target Server Type    : MYSQL
Target Server Version : 50549
File Encoding         : 65001

Date: 2018-08-25 15:43:58
*/

-- 创建数据库
SET NAMES UTF8;
DROP DATABASE IF EXISTS Mint;
CREATE DATABASE  IF NOT EXISTS Mint DEFAULT CHARACTER SET UTF8 COLLATE UTF8_GENERAL_CI;

USE Mint;

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for mint_users
-- ----------------------------
DROP TABLE IF EXISTS `mint_users`;
CREATE TABLE `mint_users` (
  `id` int(8) unsigned NOT NULL AUTO_INCREMENT,
  `guid` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(20) NOT NULL,
  `phone` varchar(11) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=gbk;

-- ----------------------------
-- Records of mint_users
-- ----------------------------
INSERT INTO `mint_users` VALUES ('1', '1', 'mint', '17600610907@163.com', 'mint', '', '1993-09-07');
