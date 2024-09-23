const bcrypt = require('bcrypt');
const prisma = require('../config/prisma');
const { generateToken } = require('../utils/jwtHelper');

const signup = async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.admin.create({
        data: {
          username: username,
          email: email,
          password: hashedPassword, 
        //   school_id: null, 
          role: role || 'Teacher', 
        },
      });

    const token = generateToken(newUser);

    res.status(201).json({ message: 'User created successfully', token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.admin.findUnique({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = generateToken(user);

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  signup,
  login,
};
