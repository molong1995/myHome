/*接口文档*/

1. 获取token

2. 入职平台基础数据1
"http://10.100.6.39:8090/tianma/r/api?sysName=TIANMA&apiName=TM_ENTRY_PERS_DATA&organizationId=" + organizationId

body: 
{
	"PERS_BASE_DATA_REQ": {
		"TM_INT_APP": " PORTAL ","TM_INT_ID": "22222222"
	}
}

res:
// 婚姻信息下拉框
"MAR_STATUS":[
	"CODE": 
	"DESCR":
],
// 生育状况
"BEAR_STATUS":[
],
// 政治面貌
"POLITICAL_STA_CHN":[
],
// 籍贯
"NATIVE_PLACE_CHN":[
],
// 
/manage/addStaff