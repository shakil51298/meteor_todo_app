import React from 'react';
import { Task } from './Task.jsx';


const tasks = [
  {_id: 1, text: 'First Task'},
  {_id: 2, text: 'Second Task'},
  {_id: 3, text: 'Third Task'},
];

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    {
      tasks.map((tasks , index) => <Task key={tasks._id} tasks ={tasks}/>)
    }
  </div>
);
