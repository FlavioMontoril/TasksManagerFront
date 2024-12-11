import React from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/commom/Button"
import { Card } from "../components/commom/Card"
import { MainTitle } from "../components/commom/MainTitle"
import { useTaskContext } from "../context/useTaskContext"
import { TaskModel, TaskStatus } from "../model/TaskModel"

export const HomePage: React.FC = () => {
    const { tasks } = useTaskContext()

    const completedTasks = tasks.filter((task: TaskModel) => task.getStatus() === TaskStatus.DONE)

    const cards = [
        { title: "Total Tasks", value: tasks.length },
        { title: "Completed Tasks", value: completedTasks.length },
    ]

    return (
        <div className="grid  justify-between space-y-6 ">
            <MainTitle title="Welcome to PlanIt" />
            <p className="text-xl">Your personal task management system</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cards.map((card, index) => {
                    return (
                        
                        <Card key={index} className="bg-white p-6 rounded-3xl shadow-xl" >
                            <h2 className="text-lg font-semi-bold">{card.title}</h2>
                            <p className="text-3xl font-bold text-blue-600">{card.value}</p>
                        </Card>
                    )
                })}
            </div>

            <div className="mt-6">
                <Link to="/create">
                    <Button variant="primary">
                        Create New Task
                    </Button>
                </Link>
            </div>
        </div>
    )
}