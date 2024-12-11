import React, { useState } from "react";
import { useTaskContext } from "../context/useTaskContext";
import { TypeProps } from "../model/TaskModel";
import { MainTitle } from "../components/commom/MainTitle";
import { TaskList } from "../components/task/TaskList";
import { TabTask } from "../components/task/TaskTab";

export const TaskListPage: React.FC = () => {
    const { tasks } = useTaskContext()
    const [filter, setFilter] = useState<TypeProps | "ALL">("ALL")

    const filteredTasks = filter === "ALL" ? tasks : tasks.filter((task) => task.getType() === filter);

    const handleToggleFilter = (type: TypeProps | "ALL") => setFilter(type);

    return (

        <div className="space-y-6 overflow-x-auto">
            <div className="flex-col justify-start">
                <MainTitle title="All Tasks" />
                <TabTask onClick={handleToggleFilter} value={filter} />
            </div>
            <TaskList tasks={filteredTasks} />
        </div>
    )
}