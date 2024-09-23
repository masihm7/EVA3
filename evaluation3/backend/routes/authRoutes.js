const express = require('express');
const { login, signup } = require('../controllers/authController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *  name:Auth
 *  description Auth Routes
 */




/**
 * @swagger
 * /api/auth/signup:
 *  post:
 *  tags:[Auth]
 *  summary: Create new user
 *  request.body:
 *      required:true
 *      content:
 *          application/json:
 *              schema:
 *                  type:Object
 *                  properties:
 *                      username:
 *                          type:string
 *                      email:
 *                          type:string
 *                      password:
 *                          type:string
 *  responses:
 *      201:
 *          description:user created
 *      400:
 *          description: Bad REquest 
 */
router.post('/signup', signup); 




/**
 * @swagger
 * /api/auth/login:
 *  post:
 *  tags:[Auth]
 *  summary: LOgin
 *  request.body:
 *      required:true
 *      content:
 *          application/json:
 *              schema:
 *                  type:Object
 *                  properties:
 *                      email:
 *                          type:string
 *                      password:
 *                          type:string
 *  responses:
 *      200:
 *          description:user logged in
 *      400:
 *          description: Bad REquest
 */
router.post('/login', login);   

module.exports = router;
