const express = require('express');

const app = express();
const tasks = [{ id: 1, title: 'Complete practical 12', completed: false }];
app.use(express.json());
app.get('/health', (req, res) => res.json({ ok: true, student: 'Rishi Sanja', id: '24ce109' }));
app.get('/tasks', (req, res) => res.json(tasks));
app.post('/tasks', (req, res) => { const task = { id: tasks.length + 1, title: req.body?.title, completed: false }; if (!task.title?.trim()) return res.status(400).json({ message: 'title is required' }); tasks.push(task); return res.status(201).json(task); });

if (require.main === module) app.listen(5012, () => console.log('Practical 12 API ready'));
module.exports = app;
