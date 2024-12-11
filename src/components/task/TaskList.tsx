import React from "react";
import { TaskModel } from "../../model/TaskModel";
import { Task } from "./Task";

interface TaskListProps {
    tasks: TaskModel[]
}

export const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
    return (
        <div className="grid grid-cols-4 rows-5 gap-8 gap-y-3" >
            {tasks.map((task, index) => (
                <Task key={task.getId() || index} task={task} />
            ))}
        </div>
    );
};