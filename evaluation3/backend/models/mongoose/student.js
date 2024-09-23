const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  student_id: { type: String, required: true, unique: true },
  student_name: { type: String, required: true },
  student_age: { type: Number, required: true },
  grade: { type: Number, required: true },
  school_id: { type: Number, required: true }, 
});

module.exports = mongoose.model('Student', studentSchema);
