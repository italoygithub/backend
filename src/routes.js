const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const PostControlle = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/posts', upload.single('image'), PostControlle.index);
routes.post('/posts', upload.single('image'), PostControlle.store);

routes.post('/posts/:id/like', LikeController.store);

module.exports = routes;