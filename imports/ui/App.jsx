import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { TasksCollection } from '/imports/api/TasksCollection';
import { Task } from './Task';
import TasksForm from './TasksForm';
import 'bootstrap/dist/css/bootstrap.css'


 
export const App = () => {
  const tasks = useTracker(() => TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch());
  return (
    <div className="container mt-3">
      <h1>Welcome to Meteor!</h1>
      <TasksForm/>
      {
        tasks.map((task , index) => <Task task={task} key ={task._id}></Task>)
      }
    </div>
  );
};
