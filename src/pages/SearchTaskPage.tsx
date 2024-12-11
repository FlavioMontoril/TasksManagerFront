import React, { useState } from "react"
import { MainTitle } from "../components/commom/MainTitle"
import { TaskModel } from "../model/TaskModel"
import { Input } from "../components/commom/Input"
import { Task } from "../components/task/Task"
import { useTaskContext } from "../context/useTaskContext"

export const SearchTaskPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const { tasks } = useTaskContext();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    };

    const filteredTasks = tasks.filter((task: TaskModel) =>
        task.getSummary().toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <MainTitle title="Serach Task" />
            <div className="flex gap-3 items-center">
                <Input
                    placeholder="Search task"
                    type="text"
                    onChange={handleSearchChange}
                    value={searchTerm}
                />
            </div>
            <div className="grid grid-cols-3 rows-5 gap-8 gap-y-4">
                {filteredTasks.length > 0 ? (
                    filteredTasks.map((task) => (
                        <Task key={task.getId()} task={task} />
                    ))
                ) : (
                    <p>No results found</p>
                )}

            </div>
        </div>
    );
};