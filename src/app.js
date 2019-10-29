import express from 'express';
import config from './config';
// 1.引入路由的文件
import indexRouter from './../routes/index';
import sowingRouter from './../routes/sowing';
import homeRouter from './../routes/home';
import userRouter from './../routes/user';
import umiRouter from './../routes/umiProduct'

// 引入中间件
import bodyParser from './../middle_wares/body_parser';
import errorLog from './../middle_wares/error_log';


const app = express();



// 4. 配置静态的资源
app.use(express.static(config.publicPath));
// app.use('/node_modules', express.static(config.node_modules));

// 注意: 一定要走在所有的路由之前
app.use(bodyParser);

// 5. 挂载路由容器
app.use(indexRouter);
app.use(sowingRouter);
app.use(homeRouter);
app.use(userRouter);
app.use(umiRouter);

// 6. 挂载错误中间件
app.use(errorLog);
app.listen((process.env.PORT || 1688), function(){ console.log('listening on *:5000'); });