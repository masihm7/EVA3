const prisma = require('../config/prisma');

const createAdmin = async (req, res) => {
  const { admin_name, admin_email, password } = req.body;
  try {
    const newAdmin = await prisma.admin.create({
      data: { admin_name, admin_email, password },
    });
    res.status(201).json(newAdmin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllAdmins = async (req, res) => {
  try {
    const admins = await prisma.admin.findMany({
      include: { school: true }, 
    });
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createAdmin,
  getAllAdmins,
};
