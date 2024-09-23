const express = require('express');
const { createAdmin, getAllAdmins } = require('../controllers/adminController');
const { verifyToken } = require('../middleware/authMiddleware');
const { verifyRole } = require("../middleware/roleMiddleware");

const router = express.Router();


/**
 * @swagger
 * tags:
 *  name:admins
 *  description admin Routes
 */


/**
 * @swagger
 * /api/admin:
 *  post:
 *  tags:[admins]
 *  summary: create new admin
 *  request.body:
 *      required:true
 *      content:
 *          application/json:
 *              schema:
 *                  type:Object
 *                  properties:
 *                      admin_name:
 *                          type:string
 *                      admin_email:
 *                          type:string
 *                      password:
 *                          type:string
 *  responses:
 *      201:
 *          description:school created
 *      400:
 *          description: Bad REquest 
 *  get:
 *     tages:[admins]
 *      summary: Retrive all admins
 *      responses:
 *      200:
 *          description:admin listed
 *      500:
 *          description: server error 
 */


router.post('/',verifyToken,verifyRole(["Admin"]),  createAdmin);  
router.get('/', verifyToken,verifyRole(["Admin"]), getAllAdmins);  

module.exports = router;
