import { Link } from "react-router-dom";
import React, { useState } from "react";

const MyVocaListPage = () => {
    const [searchTerm, setSearchTerm] = useState("");

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

    // 검색 필터링
    const filteredVoca = vocabs.filter((vocab) =>
        vocab.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <Link to="/" className="text-2xl font-bold text-blue-600">LiteVoca</Link>
                <h1 className="text-2xl font-bold">내 단어장</h1>
            </div>

            {/* 검색창 */}
            <div className="mb-4 flex justify-center">
                <input
                type="text"
                placeholder="단어장 제목 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-1/2 px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredVoca.map((vocab) => (
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
                
                {filteredVoca.length === 0 && (
                    <p className="text-gray-500 col-span-full text-center mt-8">검색 결과가 없습니다.</p>
                )}

                {filteredVoca.length === vocabs.length && ( // 검색을 하지 않았을때
                    <div
                        onClick={() => alert("새 단어장 모달")} // TODO 모달 연동 필요 시 함수 연결 필요
                        className="cursor-pointer flex items-center justify-center bg-white shadow-md rounded-xl p-4 border-2 border-dashed border-blue-400 hover:bg-blue-50 transition"
                    >
                        <span className="text-blue-500 text-lg font-medium">+ 새 단어장</span>
                    </div>
                )}
                
            </div>
        </div>
    );
};

export default MyVocaListPage;