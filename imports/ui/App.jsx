import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { TasksCollection } from '/imports/api/TasksCollection';
import { Task } from './Task';
import TasksForm from './TasksForm';
import 'bootstrap/dist/css/bootstrap.css'



export const App = () => {
  const [hideCompleted, setHideColpeted] = useState(false);

  const deleteTask = ({ _id }) => TasksCollection.remove(_id);
  // filter task
  const hideCompletedFilter = { isChecked: { $ne: true } };
  // getting task from db
  // const tasks = useTracker(() => TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch());

  const tasks = useTracker(() =>
    TasksCollection.find(hideCompleted ? hideCompletedFilter : {}, {
      sort: { createdAt: -1 },
    }).fetch()
  );
// pending taks
  const pendingTasksCount = useTracker(() =>
    TasksCollection.find(hideCompletedFilter).count()
  );

  const pendingTasksTitle = `${pendingTasksCount ? ` (${pendingTasksCount})` : ''
    }`;
// toogle chedcked 
  const toggleChecked = ({ _id, isChecked }) => {
    TasksCollection.update(_id, {
      $set: {
        isChecked: !isChecked
      }
    })
  };

  return (
    <div className="app">
      <header>
        <div className="app-bar">
          <div className="app-header">
            <h1>📝️ To Do List</h1>
          </div>
        </div>
      </header>
      <div className="main">
        <TasksForm />
        <div className="filter">
          <button onClick={() => setHideColpeted(!hideCompleted)}>
            {hideCompleted ? "SHOW ALL" : "Hide Completed"}
          </button>
        </div>
        <p className="text-center mt-2">
          📝️ pending to do
      {pendingTasksTitle}
        </p>
        <ul className="tasks">
          {tasks.map(task => <Task
            key={task._id}
            task={task}
            onCheckboxClick={toggleChecked}
            onDeleteClick={deleteTask}
          />)}
        </ul>
      </div>
    </div>
  );
};
