package cn.common.controller;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ValidateUtil {
	/**
     * 验证是否为手机号
     *
     * @param mobileNo
     * @return
     */
    public static boolean isValidMobileNo(String mobileNo) {
        // 1、(13[0-9])|(15[02789])|(18[679])|(17[0-9]) 13段 或者15段 18段17段的匹配
        // 2、\\d{8} 整数出现8次
        boolean flag = false;
        Pattern p = Pattern.compile("^((1[0-9][0-9])|(15[0-9])|(18[0-9])|(17[0-9]))\\d{8}$");
        try {
        	 Matcher match = p.matcher(mobileNo);
             if (null != mobileNo) {
                 flag = match.matches();
             }else if(mobileNo.equals("")){
             	flag = true;
     		}else {
     			flag = true;
     		}
		} catch (Exception e) {
			System.err.println(e);
		}
       
        return flag;
    }


    /**
     * 验证是否为正确的邮箱号
     *
     * @param email
     * @return
     */
    public static boolean isValidEmail(String email) {
        // 1、\\w+表示@之前至少要输入一个匹配字母或数字或下划线 \\w 单词字符：[a-zA-Z_0-9]
        // 2、(\\w+\\.)表示域名. 如新浪邮箱域名是sina.com.cn
        // {1,3}表示可以出现一次或两次或者三次.
        String reg = "\\w+@(\\w+\\.){1,3}\\w+";
        Pattern pattern = Pattern.compile(reg);
        boolean flag = false;
        try {
        	Matcher matcher = pattern.matcher(email);
            if(null != email){
                flag = matcher.matches();
            }else if (email.equals("")) {
            	flag = true;
    		}else {
    			flag = true;
    		}
		} catch (Exception e) {
			System.err.println(e);
		}

        return flag;
    }
}
