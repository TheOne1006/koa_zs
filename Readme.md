# koa 论坛系统 - Node.js 实战

## 基础目录结构

|- Readme.md
|- package.json
|- app.js
|- config/  配置文件
|  |- default.js
|  |- default.scheme.js 验证规则
|  |_ production.js
|- lib/ 一般代码文件
|- models/ 模型文件
|- routes/ 路由文件
|- controllers/ 控制器
|- themes/ 存放主题模板目录
|- test/ 测试文件
|- node_modules/


## 路由结构
routers/
|-- create.js  发帖
|-- index.js   主页
|-- logout.js  登出
|-- signin.js  登陆
|-- singnup.js 注册
|-- topic      话题
|   |--  \*.id.js
|-- user       用户
    |-- \*name.js


## 模型结构

models/
|-- comment.js 评论
|-- index.js  
|-- topic.js   话题
|-- user.js    用户


## theme
|-- config.js      co-ejs 配置
|-- package.json
|-- helpers/
|   |-- filters.js 自定义过滤器函数
|   |-- locals.js  本地自定义变量
|
|
- - - -
