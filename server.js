const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const { Sequelize, DataTypes } = require('sequelize');

// Connect to MySQL DB
const sequelize = new Sequelize('highschool_db', 'root', 'password', {
  host: 'database',
  dialect: 'mysql',
});

// Define models
const Student = sequelize.define('Student', {
  name: DataTypes.STRING,
  age: DataTypes.INTEGER,
  grade: DataTypes.STRING,
});

const Teacher = sequelize.define('Teacher', {
  name: DataTypes.STRING,
  subject: DataTypes.STRING,
});

// API Endpoints
app.get('/students', async (req, res) => {
  const students = await Student.findAll();
  res.json(students);
});

app.post('/students', async (req, res) => {
  const student = await Student.create(req.body);
  res.json(student);
});

app.get('/teachers', async (req, res) => {
  const teachers = await Teacher.findAll();
  res.json(teachers);
});

app.post('/teachers', async (req, res) => {
  const teacher = await Teacher.create(req.body);
  res.json(teacher);
});

// Sync models with database
sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log('Backend API is running on port 5000');
  });
});
