// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var eventsRouter = require('./routes/events');


// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/events', eventsRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.json({ error: err })
// });

// module.exports = app;

import express from "express";
import db from "./config/database.js";
import eventRoutes from "./routes/index.js";
import categoryRoutes from "./routes/category.js";
import cors from "cors";
// import fileUpload from 'express-fileupload';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

import path from "path"
const __dirname = path.resolve();



const app = express();
// app.use(fileUpload());


try {
  await db.authenticate();
   console.log('Database connected...');
} catch (error) {
   console.error('Connection error:', error);
}


//upload endpoint
// app.post('/uploads', (req, res) => {
//     if(req.files === null) {
//         return res.status(400).json ({msg: 'No file uploaded'});
//     }

//     const file = req.files.file;
//     file.mv(`${__dirname}/public/uploads/${file.name}`, err=> {
//         if (err) {
//             console.error(err);
//             // return res.status(500).send(err);
//         }

//         res.json({fileName: file.name, filePath: `/uploads/${file.name}` });
//     });

// });

app.use(cors());
app.use(express.json());
app.use('/events', eventRoutes);
app.use('/categories', categoryRoutes);
app.use('/uploads', express.static('public/uploads'));

app.listen(5000, () => console.log('Server running at port 5000'));
