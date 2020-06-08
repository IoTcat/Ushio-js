# Ushio-js

## 全局属性page
+ `page.fp`: 设备的fp
+ `page.params`: GET参数
+ `page.fpKey`: fp校验码
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

## Block参数
+ `block_aplayer`: 不加载aplayer
+ `block_viewport`: 不自动适配移动端
+ `block_tips`: 不加载Global Tips
+ `aplayer_playlist`: 播放歌单

## Session方法
+ `session.set(index, val)`: 设置session
+ `session.get(index)`: 获取session
+ `session.del(index)`: 删除session

## tips方法
[完全兼容izitoast](https://izitoast.marcelodolza.com/)   
+ `tips.show(params)`: 显示提示
+ `tips.info(params)`: 显示信息
+ `tips.success(params)`: 成功信息
+ `tips.warning(params)`: 警告信息
+ `tips.error(params)`: 错误信息
+ `tips.question(params)`: 问题

## jQuery
+ `$.md5()`: 支持md5扩展

