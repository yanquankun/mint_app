package cn.yun.controller;
import cn.common.controller.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.shiro.authz.annotation.RequiresAuthentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.druid.support.json.JSONUtils;

import cn.yun.dto.TLoginUser;
import cn.yun.dto.TUser;
import cn.yun.service.UserService;

@RequiresAuthentication
@Controller
public class LoginController{
	
	// 返回index.html页面
	@RequestMapping("/Login")
	public String returnIndexHmtl(){
		return "index";
	}
}