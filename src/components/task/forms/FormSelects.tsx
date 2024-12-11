import { status, types, users } from "../../../utils/constants/selectArrays"
import { Label } from "../../commom/Label"

interface FormSelectProps {
    taskForm: Record<string, any>
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
}

export function FormSelects({ onChange, taskForm }: FormSelectProps) {
    const structures = [
        { label: "Reporter", id: "reporter", value: taskForm.reporter, onChange: onChange, options: users },
        { label: "Assignee", id: "assignee", value: taskForm.assignee, onChange: onChange, options: users },
        { label: "Type", id: "type", value: taskForm.type, onChange: onChange, options: types },
        { label: "Status", id: "status", value: taskForm.status, onChange: onChange, options: status }
    ]


    return (
        <div className="grid grid-cols-2 space-y-3" >
            {structures.map((structure) => {
                return (
                    <div>
                        <Label text={structure.label} htmlFor={structure.id} />
                        <select name={structure.id} id={structure.id} value={structure.value} onChange={structure.onChange}>
                            <option>Select your option</option>
                            {
                                structure.options.map((option) => {
                                    return (
                                        <option value={option.value} >{option.label}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                )
            })}
        </div>
    )
}