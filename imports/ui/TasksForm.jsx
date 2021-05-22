import React, { useState } from 'react';
import { TasksCollection } from '../api/TasksCollection';

const TasksForm = () => {
    const [taskText, setTaskText] = useState('');
    console.log(taskText);

    // insert to db
    const handleSubmit = e => {
        e.preventDefault();

        if (!taskText) return;

        TasksCollection.insert({
            taskText: taskText.trim(),
            createdAt: new Date()
        });
        setTaskText("");
    };
    return (
        <form onSubmit={handleSubmit} action="" className="task-form border p-3 w-50 text-center shadow mb-3 rounded">
            <input onChange={(e) => setTaskText(e.target.value)} className="form-control w-100" type="text" placeholder="type to add new tasks" />
            <br />
            <button className="btn btn-danger" type="submit">Add Task</button>
        </form>
    );
};

export default TasksForm;