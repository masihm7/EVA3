const Student = require('../models/mongoose/student');

const createStudent = async (req, res) => {
  const { student_id, student_name, student_age, grade, school_id } = req.body;
  try {
    const newStudent = await Student.create({ student_id, student_name, student_age, grade, school_id });
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllStudents = async (req, res) => {
  const { filter, sort, page_number, page_size } = req.query;

  let query = Student.find(filter || {});
  if (sort) query = query.sort(sort);
  if (page_number && page_size) {
    query = query.skip((page_number - 1) * page_size).limit(Number(page_size));
  }

  try {
    const students = await query.exec();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getStudentById = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { student_name, student_age, grade, school_id } = req.body;

  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { student_name, student_age, grade, school_id },
      { new: true, runValidators: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ error: 'Student not found' });
    }

    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteStudent = async (req, res) => {
  const { id } = req.params;
  
  try {
    const deletedStudent = await Student.findByIdAndDelete(id);

    if (!deletedStudent) {
      return res.status(404).json({ error: 'Student not found' });
    }

    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
