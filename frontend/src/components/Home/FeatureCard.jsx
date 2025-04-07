import React from "react";

function FeatureCard(props){
    const { title, text } = props;

    return (
        <div className="p-6 border rounded shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">{ title }</h3>
            <p className="text-gray-600"> { text }</p>
        </div>
    )
}

export default FeatureCard;