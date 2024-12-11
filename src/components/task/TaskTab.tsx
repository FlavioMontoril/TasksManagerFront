import React from "react"
import { TypeProps } from "../../model/TaskModel"

type onClickType = "ALL" | TypeProps

interface TabTaskProps {
    onClick: (type: onClickType) => void
    value: string
}

export const TabTask: React.FC<TabTaskProps> = ({ onClick, value }) => {

    const tabOptions = [
        { type: "ALL", label: "All" },
        { type: TypeProps.EPIC, label: "Epic" },
        { type: TypeProps.TASK, label: "Task" },
        { type: TypeProps.SUB_TASK, label: "Subtask" },
        { type: TypeProps.BUG, label: "Bug" },
    ]

    const buttonStyleProps = (active: boolean) => {
        return `
        px-4 py-2 mb-4 rounded-xl 
        ${active ? "bg-blue-600 text-white" : null
            }
        `
    }

    return (
        <div className="space-x-2">
            {
                tabOptions.map((option, i) => {
                    return (
                        <button
                            key={`key-${i}`}
                            className={buttonStyleProps(value === option.type)}
                            onClick={() => onClick(option.type as onClickType)}
                        >
                            {option.label}
                        </button>
                    )
                })
            }
        </div>
    )
}