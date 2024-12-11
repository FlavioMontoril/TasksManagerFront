import { Fragment } from "react/jsx-runtime"
import { Input } from "../../commom/Input"
import { Label } from "../../commom/Label"

interface FormFieldsProps {
    variant: 'summary' | 'description'
    taskForm: Record<string, any>
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
}

export function FormFields({ onChange, variant, taskForm }: FormFieldsProps) {

    return (
        <Fragment>
            {
                variant === "summary" && <div>
                    <Label text="Summary" htmlFor="summary" />
                    <Input
                        type="text"
                        id="summary"
                        name="summary"
                        defaultValue={taskForm.summary}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        onChange={onChange}
                    />
                </div>
            }
            {
                variant === "description" &&
                <div>
                    <Label text="Description" htmlFor="description" />
                    <textarea
                        id="description"
                        name="description"
                        rows={3}
                        value={taskForm?.description}
                        className="resize-none mt-1 block w-[400px] max-w-[25rem] rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        onChange={onChange}
                    />
                </div>
            }
        </Fragment>
    )
}