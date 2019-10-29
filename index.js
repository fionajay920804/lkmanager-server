// const express = require('express');
// const config = require('./src/config');
// // 1.引入路由的文件
// const indexRouter = require('./routes/index');
// const sowingRouter = require('./routes/sowing');
// const homeRouter = require('./routes/home');
// const userRouter = require('./routes/user');
// const umiRouter = require('./routes/umiProduct');
//
// // 引入中间件
// const bodyParser =require('./middle_wares/body_parser');
// const errorLog = require('./middle_wares/error_log');
//
// // 2. 引入模板引擎
// const nunjucks = require('nunjucks');
//
// const app = express();
//
// // 3. 设置模板引擎
// nunjucks.configure(config.viewPath, {
//     autoescape: true,
//     express: app,
//     noCache: true
// });
//
//
// // 4. 配置静态的资源
// app.use(express.static(config.publicPath));
// app.use('/node_modules', express.static(config.node_modules));
//
// // 注意: 一定要走在所有的路由之前
// app.use(bodyParser);
//
// // 5. 挂载路由容器
// app.use(indexRouter);
// app.use(sowingRouter);
// app.use(homeRouter);
// app.use(userRouter);
// app.use(umiRouter);
// // 6. 挂载错误中间件
// app.use(errorLog);
// let port = process.env.PORT;
// if (port == null || port == "") {
//     port = 8000;
// }
// // app.listen(port);
// app.listen(1688, ()=>{
//     console.log('server is running');
// });

require('babel-register');
require('./src/app');
