import React from 'react';


export const Task = ({ task , onCheckboxClick, onDeleteClick }) => {
    
    return (
        <li>
            <input
                type="checkbox"
                checked = {!!task.isChecked}
                onClick={() => onCheckboxClick(task)}
                readOnly
            />
            <span>{task.text}</span>
            <button className="btn btn-success" onClick={ () => onDeleteClick(task) }>&times;</button>
        </li>
    );
};
