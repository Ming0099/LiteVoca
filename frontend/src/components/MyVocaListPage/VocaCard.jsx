import React from "react";

function VocaCard(props){
    const { vocaId, title, description, wordCount, onDelete } = props;

    return (
        <div key={vocaId} className="bg-white shadow-md rounded-xl p-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-gray-600">{description}</p>
            <p className="mt-2 text-sm text-gray-500">{wordCount} 단어</p>
            <div className="mt-4 flex gap-2">
            <button className="bg-green-500 text-white px-3 py-1 rounded">보기</button>
            <button className="bg-yellow-500 text-white px-3 py-1 rounded">수정</button>
            <button onClick={() => onDelete(vocaId)} className="bg-red-500 text-white px-3 py-1 rounded">삭제</button>
            </div>
        </div>
    )
}

export default VocaCard;