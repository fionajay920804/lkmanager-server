// import express from 'express';
// import User from "../models/User";
// import formidable from 'formidable';
// import config from './../src/config';
// import {basename} from 'path';
// import bodyParser from 'body-parser';
//
// var urlencodedParser = bodyParser.urlencoded({ extended: false });
//
// const router = express.Router({});
//
// router.post('/user/api/add', (req,res,next)=>{
//     const user_name = req.body.username ||'';
//     const user_pwd = req.body.user_pwd ||'';
//
//     const user = new User({
//         user_name:user_name,
//         user_pwd:user_pwd,
//     });
//
//     user.save((err,result)=>{
//         if (err){
//             return next(err)
//         }
//         res.json({
//             status_code : 200,
//             result:'success'
//         })
//     })
// });
//
// router.post('/user/api/login', (req,res,next)=>{
//     debugger
//
//     const form = new formidable.IncomingForm();
//
//     form.parse(req, (err, fields)=>{
//         if (err) {
//             return next(err);
//         }
//         // 1. 处理表单字段
//         const body = fields;
//         User.findOne({user_name: body.user_name}, (err, user)=>{
//             if (err){
//                 return next(err);
//             }
//
//             if (user !== null){
//                 if(user.user_pwd === body.user_pwd){
//                     res.json({
//                         status_code: 200,
//                         result:{
//                             token: user._id,
//                             user_name: user.user_name
//                         }
//                     })
//                 }else{
//                     res.json({
//                         error_code:1,
//                         result:'incorrect password'
//                     });
//                 }
//             }else{
//                 res.json({
//                     error_code: 1,
//                     result:'invalid username'
//                 })
//             }
//         })
//     })
//
//     // const user_name = req.body.user_name;
//     // const user_pwd = req.body.user_pwd;
//     //
//     // User.findOne({user_name: user_name}, (err, user)=>{
//     //     if (err){
//     //         return next(err);
//     //     }
//     //
//     //     if (user !== null){
//     //         if(user.user_pwd === user_pwd){
//     //             res.json({
//     //                 status_code: 200,
//     //                 result:{
//     //                     token: user._id,
//     //                     user_name: user.user_name
//     //                 }
//     //             })
//     //         }else{
//     //             res.json({
//     //                 error_code:1,
//     //                 result:'incorrect password'
//     //             });
//     //         }
//     //     }else{
//     //         res.json({
//     //             error_code: 1,
//     //             result:'invalid username'
//     //         })
//     //     }
//     // })
// })
//
// module.exports = router;