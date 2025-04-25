import React, { useState } from "react";

const VocaCreateModal = ({ isOpen, onClose, onSubmit }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = () => {
        if (!title.trim()) return;
        onSubmit({ title, description });
        setTitle("");
        setDescription("");
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
            <h2 className="text-xl font-semibold mb-4">새 단어장 만들기</h2>

            <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">제목</label>
            <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-400"
                placeholder="예: 토익 단어장"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            </div>

            <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">설명 (선택)</label>
            <textarea
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-400"
                placeholder="예: 토익 빈출 단어 500개"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            </div>

            <div className="flex justify-end gap-2">
            <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
            >
                취소
            </button>
            <button
                onClick={handleSubmit}
                className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
            >
                추가
            </button>
            </div>
        </div>
        </div>
    );
};

export default VocaCreateModal;