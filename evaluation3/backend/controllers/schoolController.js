const prisma = require('../config/prisma');

const createSchool = async (req, res) => {
  const { school_name, school_address } = req.body;
  try {
    const newSchool = await prisma.school.create({
      data: { school_name, school_address },
    });
    res.status(201).json(newSchool);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllSchools = async (req, res) => {
  try {
    const schools = await prisma.school.findMany();
    res.status(200).json(schools);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createSchool,
  getAllSchools,
};
