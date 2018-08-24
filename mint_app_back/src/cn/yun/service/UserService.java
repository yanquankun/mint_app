package cn.yun.service;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.yun.dao.UserDao;
import cn.yun.dto.TLoginUser;
import cn.yun.dto.TUser;

@Service("userservice")
public class UserService{
	@Resource(name = "userDao")
	UserDao userDao;
	
	public TLoginUser getUserByUsername(String username) {
		return userDao.getUserByUsername(username);
	}
	
	public TUser regisUsers(Map<String, Object> params) {
		return userDao.regisUsers(params);
	}
}