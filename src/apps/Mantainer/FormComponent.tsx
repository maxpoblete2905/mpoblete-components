import React, { useState } from "react";

export interface Field {
    label: string;
    key: string;
    type: "text" | "select" | 'email';
    options?: string[];
    value: string; // Nuevo campo 'value' para almacenar el valor del campo
    onChange: (value: string) => void; // Función de cambio de valor del campo
}

interface FormData {
    [key: string]: string;
}

interface DynamicFormProps {
    fields: Field[];
}

export const DynamicForm: React.FC<DynamicFormProps> = ({ fields }) => {
    const [formData, setFormData] = useState<FormData>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>, key: string) => {
        const { value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [key]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        // Aquí puedes enviar formData a tu backend o hacer cualquier otra acción con los datos
    };

    return (
        <form onSubmit={handleSubmit}>
            {fields.map((field) => (
                <div key={field.key}>
                    <label htmlFor={field.key}>{field.label}</label>
                    {field.type === "select" ? (
                        <select
                            id={field.key}
                            name={field.key}
                            value={formData[field.key] || ""}
                            onChange={(e) => handleInputChange(e, field.key)}
                        >
                            {field.options?.map((option) => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    ) : (
                        <input
                            type="text"
                            id={field.key}
                            name={field.key}
                            value={formData[field.key] || ""}
                            onChange={(e) => handleInputChange(e, field.key)}
                        />
                    )}
                </div>
            ))}
            <button type="submit">Submit</button>
        </form>
    );
};

export default DynamicForm;
