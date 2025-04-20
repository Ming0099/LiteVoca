import React from "react";

const MyVocaListPage = () => {
    // dummy data
    const vocabs = [
        {
            id: 1,
            title: "토익 단어장",
            description: "토익 빈출 단어 500개",
            wordCount: 120,
        },
        {
            id: 2,
            title: "일상 회화",
            description: "일상에서 자주 쓰는 표현",
            wordCount: 52,
        },
    ];

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">내 단어장</h1>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    + 새 단어장
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {vocabs.map((vocab) => (
                    <div key={vocab.id} className="bg-white shadow-md rounded-xl p-4">
                        <h2 className="text-xl font-semibold">{vocab.title}</h2>
                        <p className="text-gray-600">{vocab.description}</p>
                        <p className="mt-2 text-sm text-gray-500">{vocab.wordCount} 단어</p>
                        <div className="mt-4 flex gap-2">
                        <button className="bg-green-500 text-white px-3 py-1 rounded">보기</button>
                        <button className="bg-yellow-500 text-white px-3 py-1 rounded">수정</button>
                        <button className="bg-red-500 text-white px-3 py-1 rounded">삭제</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyVocaListPage;