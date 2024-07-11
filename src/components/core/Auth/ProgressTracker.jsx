import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { date: '2023-01', reading: 6.5, listening: 7.0, writing: 6.0, speaking: 7.5 },
  { date: '2023-02', reading: 7.0, listening: 7.5, writing: 6.5, speaking: 7.5 },
  { date: '2023-03', reading: 7.5, listening: 8.0, writing: 7.0, speaking: 8.0 },
  { date: '2023-04', reading: 8.0, listening: 8.5, writing: 7.5, speaking: 8.0 },
];

export default function ProgressTracker() {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      <h2 className="text-2xl font-bold mb-6">Your Progress</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={[0, 9]} ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="reading" stroke="#8884d8" />
          <Line type="monotone" dataKey="listening" stroke="#82ca9d" />
          <Line type="monotone" dataKey="writing" stroke="#ffc658" />
          <Line type="monotone" dataKey="speaking" stroke="#ff7300" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}