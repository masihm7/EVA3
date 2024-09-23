const prisma = require('../config/prisma');
const Student = require('../models/mongoose/student');

// const verifySchoolAdmin = async (req, res, next) => {
//   const adminId = req.user.userId;
//   const { school_id } = req.body;

//   try {
//     const admin = await prisma.admin.findUnique({ where: { admin_id: adminId } });

//     if (!admin) {
//       return res.status(404).json({ error: 'Admin not found' });
//     }

//     if (school_id && admin.school_id !== school_id) {
//       return res.status(403).json({ error: 'Unauthorized: Cannot manage students from other schools' });
//     }

//     if (req.method === 'DELETE') {
//       const { id } = req.params;
//       const student = await Student.findOne({ student_id: id });

//       if (!student) {
//         return res.status(404).json({ error: 'Student not found' });
//       }

//       if (admin.school_id !== student.school_id) {
//         return res.status(403).json({ error: 'Unauthorized: Cannot delete students from other schools' });
//       }
//     }

//     next();
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };


const verifyRole = (roles)=>{
  return async (req,res,next)=>{
    const userId = req.user.userId
    try {
      const user = await prisma.user.findUnique({where: {userId:userId}})
      if(!user){
        return res.status(404).json({error:"user not found"})
      }
      if(!roles.include(user.rol)){
        return res.status(403).json({message:"Forbiden: not premited"})
      }
        req.user.role = user.role
      next()
      } catch (error) {
        res.status(500).json({error: error.message})
    }
  }
}


module.exports = { verifyRole };
