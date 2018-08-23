package cn.yun.service;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.yun.dao.UserDao;
import cn.yun.dto.TLoginUser;

@Service("userservice")
public class UserService{
	@Resource(name = "userDao")
	UserDao userDao;
	
	public TLoginUser getUserByUsername(String username) {
		return userDao.getUserByUsername(username);
	}
}