const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require("cors")

const app = express();
app.use(cors());
const port = 3000;

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'todo'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to the MySQL database');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get('/todos', (req, res) => {
  const query = 'SELECT * FROM todos';

  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error fetching todos from the database' });
    } else {
      res.json(results);
    }
  });
});

app.post('/todos', (req, res) => {
  const { task } = req.body;
  console.log(task)
  const query = `INSERT INTO todos (task) VALUES ('${task}')`;

  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error creating a new todo' });
    } else {
      res.json({ message: 'New todo created successfully' });
    }
  });
});

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM todos WHERE id = ${id}`;

  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error deleting the todo' });
    } else {
      res.json({ message: 'Todo deleted successfully' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
