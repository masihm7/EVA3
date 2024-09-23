const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const connectMongoDB = require('./config/mongoose');
const schoolRoutes = require('./routes/schoolRoutes');
const studentRoutes = require('./routes/studentRoutes');
const authRoutes = require('./routes/authRoutes'); 
const adminRoutes = require('./routes/adminRoutes'); 

const {swaggerUi, swaggerDocs} = require("./swagger")

dotenv.config();
const app = express();
app.use(express.json());

app.use(cors())

connectMongoDB();

app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDocs))

// Routes
app.use('/api/schools', schoolRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/auth', authRoutes); 
app.use('/api/admins', adminRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
