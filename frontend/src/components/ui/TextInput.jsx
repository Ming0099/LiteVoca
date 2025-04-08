import React from "react";

function TextInput(props) {
    const { text, id, type, value, onChange } = props;

    return (
        <div>
            <label htmlFor={ id } className="block text-sm font-medium text-gray-700">
                { text }
            </label>
            <input
                id= { id }
                type= { type }
                required
                value= { value }
                onChange={ onChange }
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
        </div>
    )
}

export default TextInput;