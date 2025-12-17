//partt1
// const express = require('express');
// const app = express();

// const PORT = 3000;

// app.get('/', (req, res) => {
//     res.send('Server is running');
// });

// app.get('/hello', (req, res) => {
//     res.json({ message: "Hello from server!" });
// });

// app.get('/time', (req, res) => {
//     const currentTime = new Date();
//     res.send(currentTime.toString());
// });

// app.get('/status', (req, res) => {
//     res.status(200).json({ status: "OK" });
// });


// app.listen(PORT, () => {
//     console.log(`Server started on port ${PORT}`);
// });



//part3
const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());

const DATA_FILE = 'data.json';

function readData() {
  const jsonData = fs.readFileSync(DATA_FILE);
  return JSON.parse(jsonData);
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

app.get('/tasks', (req, res) => {
  const tasks = readData();
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const tasks = readData();
  const { name, completed } = req.body;
  const newTask = {
    id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
    name,
    completed: completed || false
  };
  tasks.push(newTask);
  writeData(tasks);
  res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
  const tasks = readData();
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(t => t.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };
  writeData(tasks);
  res.json(tasks[taskIndex]);
});

app.delete('/tasks/:id', (req, res) => {
  let tasks = readData();
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(t => t.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  const deletedTask = tasks.splice(taskIndex, 1);
  writeData(tasks);
  res.json(deletedTask[0]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
