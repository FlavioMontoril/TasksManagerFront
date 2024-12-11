import { TaskStatus } from "../../model/TaskModel"

export const users = [
    { label: "Alan Maxwell", value: "Alan Maxwell" },
    { label: "Wesley Ximenes", value: "Wesley Ximenes" },
    { label: "Lucas Granjense", value: "Lucas Granjense" },
    { label: "Carine Lima", value: "Carine Lima" },
    { label: "Flávio Montoril", value: "Flávio Montoril" },
    { label: "Alan Maxwell", value: "Alan Maxwell" },
    { label: "Matheus Monteiro", value: "Matheus Monteiro" },
]

export const types = [
    { label: "Task", value: "TASK" },
    { label: "Bug", value: "BUG" },
    { label: "Epic", value: "EPIC" },
    { label: "Subtask", value: "SUB_TASK" }
]

export const status = [
    { label: TaskStatus.OPEN, value: TaskStatus.OPEN },
    { label: TaskStatus.IN_PROGRESS, value: TaskStatus.IN_PROGRESS },
    { label: TaskStatus.UNDER_REVIEW, value: TaskStatus.UNDER_REVIEW },
    { label: TaskStatus.DONE, value: TaskStatus.DONE }
]
