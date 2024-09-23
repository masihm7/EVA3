const express = require("express");
const {
  createStudent,
  getAllStudents,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");
const { verifyToken } = require("../middleware/authMiddleware");
const { verifySchoolAdmin } = require("../middleware/roleMiddleware");

const router = express.Router();

/**
 * @swagger
 * tags:
 *  name:Students
 *  description Student Routes
 */

/**
 * @swagger
 * /api/student:
 *  post:
 *  tags:[students]
 *  summary: create new student
 *  request.body:
 *      required:true
 *      content:
 *          application/json:
 *              schema:
 *                  type:Object
 *                  properties:
 *                      student_id:
 *                          type:string
 *                      student_name:
 *                          type:string
 *                      student_age:
 *                          type:integer
 *                      grade:
 *                          type: integer
 *                      school_id:
 *                          type: integer
 *  responses:
 *      201:
 *          description:student created
 *      400:
 *          description: Bad REquest
 *  get:
 *     tages:[students]
 *      summary: Retrive all students
 *      responses:
 *      200:
 *          description:students listed
 *      500:
 *          description: server error
 */

router.post("/", verifyToken, verifyRole(["Admin", "Teacher"]), createStudent);
router.get("/", getAllStudents);

/**
 * @swagger
 * /api/student:
 *  get:
 *  tags:[students]
 *  summary: get student by id
 *  parameters:
 *      -in: path
 *        name:id
 *        required:true
 *        schema:
 *          type:string
 *  responses:
 *      200:
 *          description:students found
 *      400:
 *          description: student not found error
 *  put:
 *  tags:[students]
 *  summary: update student by id
 *  parameters:
 *      -in: path
 *        name:id
 *        required:true
 *        schema:
 *          type:string
 *  requestBody:
 *      required: true
 *      content:
 *        appliation/json:
 *          schema:
 *            type:object
 *            properties:
 *              student_name:
 *                type:string
 *              student_age:
 *                type:integer
 *              grade:
 *                type:integer
 *              school_id:
 *                type:integer
 *  responses:
 *      200:
 *          description:students found
 *      400:
 *          description: student not found error
 *
 *  delete:
 *  tags:[students]
 *  summary: delete student by id
 *  parameters:
 *      -in: path
 *        name:id
 *        required:true
 *        schema:
 *          type:string
 *  responses:
 *      200:
 *          description:students deleted
 *      400:
 *          description: student not found error
 *
 */

router.put(
  "/:id",
  verifyToken,
  verifyRole(["Admin", "Teacher"]),
  updateStudent
);
router.delete(
  "/:id",
  verifyToken,
  verifyRole(["Admin", "Teacher"]),
  deleteStudent
);

module.exports = router;
