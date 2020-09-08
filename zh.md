# Ushio-js

Ushio前端工具包   

[English Version](./README.md)

## 定位
Ushio-js是集成了ushio-session, fp用户代理识别，[ushio用户系统](https://github.com/iotcat/ushio-auth)，aplayer音乐控制，tips弹窗管理等一系列前端服务的工具包。ushio-js被所有的ushio支持的网站所引用。


## 使用方法

### 全局属性page
+ `page.fp`: 设备的fp
+ `page.params`: GET参数
+ `page.fpObj`: fp的参数
+ `page.ip`: 客户端ip地址
+ `page.path`: 页面路径
+ `page.url`: 页面带参路径
+ `page.Timer`: 页面已打开时长
+ `page.openTime`:打开页面的时间戳
+ `page.title`: 页面标题
+ `page.host`: 目标主机名
+ `page.sid`: 会话id
+ `page.timezone`: 时区
+ `page.timezoneOffset`: 时区校准参数
+ `page.platform`: 操作平台
+ `page.userAgent`: 用户代理
+ `page.language`: 客户端语言
+ `page.copyright.full`: 版权 
+ `page.auth[]`: 页面所需的验证信息
+ `page.availableScreenResolution`: 可用屏幕大小
+ `page.deviceMemory`: 设备内存
+ `page.group[]`: 页面对用户群组的要求
+ `page.lang[]`: 用户认识的语言
+ `page.mask`: 页面的mask信息
+ `page.nolang[]`: 用户不认识的语言
+ `page.proj`: 页面对应的github项目地址
+ `page.tran`: 翻译相关方法
+ `page.showUshio()`: 展示Ushio菜单


### 页面设置参数
+ `block_aplayer`: 不加载aplayer
+ `block_viewport`: 不自动适配移动端
+ `block_tips`: 不加载Global Tips
+ `aplayer_playlist`: 播放歌单
+ `block_setting`: 不显示设置小齿轮
+ `lang[]`: 页面支持的语言
+ `allow_no_cookie`: 允许无cookie运行

### Session方法
+ `session.set(index, val)`: 设置session
+ `session.get(index)`: 获取session
+ `session.del(index)`: 删除session

### tips方法
[完全兼容izitoast](https://izitoast.marcelodolza.com/)   
+ `tips.show(params)`: 显示提示
+ `tips.info(params)`: 显示信息
+ `tips.success(params)`: 成功信息
+ `tips.warning(params)`: 警告信息
+ `tips.error(params)`: 错误信息
+ `tips.question(params)`: 问题

### jQuery
+ `$.md5()`: 支持md5扩展

