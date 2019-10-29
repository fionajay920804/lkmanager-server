import express from 'express';
import config from './config';
// 1.引入路由的文件
import sowingRouter from './../routes/sowing';
import homeRouter from './../routes/home';
import userRouter from './../routes/user';
import umiRouter from './../routes/umiProduct'

// 引入中间件
import bodyParser from './../middle_wares/body_parser';
import errorLog from './../middle_wares/error_log';


const index = express();



// 4. 配置静态的资源
index.use(express.static(config.publicPath));
// index.use('/node_modules', express.static(config.node_modules));

// 注意: 一定要走在所有的路由之前
index.use(bodyParser);

// 5. 挂载路由容器
index.use(sowingRouter);
index.use(homeRouter);
index.use(userRouter);
index.use(umiRouter);

// 6. 挂载错误中间件
index.use(errorLog);
index.listen((process.env.PORT || 1688), function(){ console.log('listening on *:5000'); });