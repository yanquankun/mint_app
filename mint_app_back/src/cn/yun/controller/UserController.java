package cn.yun.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.shiro.authz.annotation.RequiresAuthentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.druid.support.json.JSONUtils;

import cn.yun.dto.TLoginUser;
import cn.yun.dto.TUser;
import cn.yun.service.UserService;

@RequiresAuthentication
@Controller
@RequestMapping("/User")
public class UserController{
	@Resource(name = "userservice")
	private UserService userService;
	
	@ResponseBody
	@RequestMapping("/login")
	public String getUserByUsername(HttpServletRequest request){
		String success = "true";
		String msg = "ok";
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		
		TLoginUser userByUsername = userService.getUserByUsername(username);
		if(null == userByUsername){
			msg = "账号未注册，请点击注册按钮";
			success = "false";
		}else if(!password.equals(userByUsername.password)) {
			msg = "密码不正确";
			success = "false";
		}else {
			success = "true";
		}
		Map<String, Object> map = new HashMap<String, Object>();
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("success", success);
		result.put("msg", msg);
    	map.put("result", result);
		String json = JSONUtils.toJSONString(map);
		return json;
	}
}