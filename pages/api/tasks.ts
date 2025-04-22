import { NextApiRequest, NextApiResponse } from 'next';

let tasks = [{ id: 1, title: 'Welcome to TaskFlow!', completed: false }];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(tasks);
  } else if (req.method === 'POST') {
    const newTask = { id: Date.now(), ...req.body };
    tasks.push(newTask);
    res.status(201).json(newTask);
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    tasks = tasks.filter((task) => task.id !== id);
    res.status(200).json(tasks);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}