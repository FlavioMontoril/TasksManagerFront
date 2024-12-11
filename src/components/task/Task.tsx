import { Link } from "react-router-dom";
import { TaskModel, TaskStatus } from "../../model/TaskModel";
import { Card } from "../commom/Card";
import { IconEye } from "@tabler/icons-react";

export const Task: React.FC<{ task: TaskModel }> = ({ task }) => {
    return (
        <Card className="mb-5 bg-white max-w-[20rem] p-6 rounded-3xl shadow-xl">
            <div className="flex items-center justify-between text-xl font-semibold  whitespace-nowrap ">
                <h2>{task.getSummary()}</h2>
                <Link to={`/tasks/${task.getId()}`} className="text-blue-600 whitespace-nowrap">
                    <IconEye size={18} />
                </Link>
            </div>
            <p className="text-gray-600 mb-1">{task.getDescription()}</p>
            <div className="space-y-5 flex flex-col items-start">
                <span
                    className={
                        `px-2 py-1 rounded
                                    ${task.getStatus() === TaskStatus.OPEN ? "bg-blue-100 text-blue-800" : ""}
                                    ${task.getStatus() === TaskStatus.IN_PROGRESS ? "bg-yellow-100 text-yellow-800" : ""}
                                    ${task.getStatus() === TaskStatus.UNDER_REVIEW ? "bg-purple-100 text-purple-800" : ""}
                                    ${task.getStatus() === TaskStatus.DONE ? "bg-green-100 text-green-800" : ""}
                                    `
                    }>
                    {task.getStatus()}
                </span>
            </div>
        </Card>
    )
}