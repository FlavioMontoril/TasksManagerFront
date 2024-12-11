import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useTaskContext } from "../context/useTaskContext"
import { TaskStatus, TypeProps } from "../model/TaskModel"
import { useApi } from "../services/useApi"
import { Button } from "../components/commom/Button"
import { Card } from "../components/commom/Card"
import { MainTitle } from "../components/commom/MainTitle"
import { FormFields } from "../components/task/forms/FormFields"
import { FormSelects } from "../components/task/forms/FormSelects"

type TaskFormProps = {
    summary: string
    description: string
    type: TypeProps
    reporter: string
    assignee: string
    status: TaskStatus
}

export const TaskDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>()

    const [isEditing, setIsEditing] = useState<boolean>(false)
    const navigate = useNavigate()
    const { tasks } = useTaskContext()

    const task = tasks.find((task) => task?.getId() === id)

    const [taskForm, setTaskForm] = useState<TaskFormProps>({
        summary: task?.getSummary() ?? "",
        description: task?.getDescription() ?? "",
        type: task?.getType() ?? TypeProps.TASK,
        reporter: task?.getReporter() ?? "",
        assignee: task?.getAssignee() ?? "",
        status: task?.getStatus() ?? TaskStatus.OPEN
    })

    console.log('TaskForm', taskForm)

    const api = useApi()

    if (!task) {
        return <p>Task Not Found</p>
    }

    const handleInputTaskChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        console.log('name', name, 'value', value)
        setTaskForm((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleEdit = () => {
        setIsEditing(true)
    }

    const handleCancel = () => {
        setIsEditing(false)
    }

    const handleDelete = async () => {
        const response = await api.deleteTask(task.getId())

        if (response.status === 200 || response.status === 204) {
            const removeTask = tasks.findIndex((task) => task.getId() === id)
            tasks.splice(removeTask, 1)
            navigate('/tasks');
        }
    }

    const handleSumit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log('FormTask', taskForm)
        try {
            const response = await api.editTask(task.getId(), taskForm)
            console.log(response)
            if (response.status === 200) {
                task.setSummary(taskForm.summary)
                task.setDescription(taskForm.description)
                task.setType(taskForm.type)
                task.setReporter(taskForm.reporter)
                task.setAssignee(taskForm.assignee)
                task.setStatus(taskForm.status)
            }
        } catch (error) {
            console.log(error)
        }

        setIsEditing(false)
    }

    return (
        <div className="space-y-6">
            <MainTitle title="Task Details" />
            <Card className="bg-white w-[40rem] max-w-[50rem] p-6 rounded-3xl shadow-xl">
                {isEditing ? (
                    <form className="flex flex-col space-y-4" onSubmit={handleSumit}>
                        <div className="flex justify-start gap-6" >
                            <FormFields variant="summary" onChange={handleInputTaskChange} taskForm={taskForm} />
                            <FormFields variant="description" onChange={handleInputTaskChange} taskForm={taskForm} />
                        </div>

                        <FormSelects onChange={handleInputTaskChange} taskForm={taskForm} />

                        <div className="flex justify-end space-x-2">
                            <Button
                                type="button"
                                onClick={handleCancel}
                                variant="secondary"
                            >
                                Cancel
                            </Button>
                            <Button type="submit" variant="primary" >
                                Save
                            </Button>
                        </div>
                    </form>
                ) :
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">{task?.getSummary()}</h2>
                        <p className="text-gray-600">{task?.getDescription()}</p>
                        <p>
                            <span className="font-semibold">Type:</span> {task?.getType()}
                        </p>
                        <p>
                            <span className="font-semibold">Status:</span>{' '}
                            <span
                                className={
                                    `px-2 py-1 rounded
                                    ${task?.getStatus() === TaskStatus.OPEN ? "bg-blue-100 text-blue-800" : ""}
                                    ${task?.getStatus() === TaskStatus.IN_PROGRESS ? "bg-yellow-100 text-yellow-800" : ""}
                                    ${task?.getStatus() === TaskStatus.UNDER_REVIEW ? "bg-purple-100 text-purple-800" : ""}
                                    ${task?.getStatus() === TaskStatus.DONE ? "bg-green-100 text-green-800" : ""}
                            `}>
                                {task?.getStatus()}
                            </span>
                        </p>
                        {
                            task?.getStatus() !== TaskStatus.DONE &&
                            <div className="flex justify-end space-x-2">
                                <button
                                    onClick={handleEdit}
                                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Edit
                                </button>
                                <Button
                                    onClick={handleDelete}
                                    variant="danger"
                                >
                                    Delete
                                </Button>
                            </div>
                        }
                    </div>
                }
            </Card>
        </div>
    )
}

