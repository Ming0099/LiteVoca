import React from "react";

function SubmitButton(props) {
    const { text } = props;

    return (
        <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
            { text }
        </button>
    );
}

export default SubmitButton;