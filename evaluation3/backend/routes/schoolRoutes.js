const express = require('express');
const { createSchool, getAllSchools } = require('../controllers/schoolController');
const { verifyToken } = require("../middleware/authMiddleware");
const { verifyRole } = require("../middleware/roleMiddleware");

const router = express.Router();


/**
 * @swagger
 * tags:
 *  name:SChool management
 *  description SChool Routes
 */


/**
 * @swagger
 * /api/school:
 *  post:
 *  tags:[schools]
 *  summary: create new school
 *  request.body:
 *      required:true
 *      content:
 *          application/json:
 *              schema:
 *                  type:Object
 *                  properties:
 *                      school_name:
 *                          type:string
 *                      school_address:
 *                          type:string
 *  responses:
 *      201:
 *          description:school created
 *      400:
 *          description: Bad REquest 
 *  get:
 *     tages:[schools]
 *      summary: Retrive all schools
 *      responses:
 *      200:
 *          description:school listed
 *      500:
 *          description: server error 
 */

router.post('/',verifyToken, verifyRole(["Admin"]),  createSchool);
router.get('/',verifyToken, verifyRole(["Admin"]),  getAllSchools);

module.exports = router;


// verifyToken, verifyRole(["Admin"]),