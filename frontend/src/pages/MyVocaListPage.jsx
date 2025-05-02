import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import VocaCard from "../components/MyVocaListPage/VocaCard";
import VocaCreateModal from "../components/MyVocaListPage/VocaCreateModal";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

const MyVocaListPage = () => {
    const { isLoggedIn, isLoading } = useAuth();
    const navigate = useNavigate();

    // 로그인 상태가 아닐시 로그인 페이지로
    useEffect(() => {
        if (!isLoading && !isLoggedIn) {
            alert("로그인 후 이용해 주세요.");
            navigate("/login");
        }

        const fetchVocabs = async () => {
            try {
                // 단어장 조회
                const response = await axios.get("/api/vocabulary-books/me");

                setVocabs(response.data);
    
            } catch (error) {
                console.error(error);
                alert("단어장 목록을 가져오는 중 오류가 발생했습니다.");
            }
        };

        if (!isLoading && isLoggedIn) {
            fetchVocabs();
        }

    }, [isLoggedIn, isLoading, navigate]);

    const [searchTerm, setSearchTerm] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [vocabs, setVocabs] = useState([]);

    const handleCreate = async (newVoca) => {
        try{
            const title = newVoca.title;
            const description = newVoca.description;
            // 단어장 생성
            const response = await axios.post("/api/vocabulary-books", {title, description});

            // 생성한 단어장 리스트에 추가
            setVocabs((prev) => [...prev, response.data]);
            
        } catch (error) {
            console.error(error);
            alert("단어장 생성 중 오류가 발생했습니다.");
        }
    }

    // 검색 필터링
    const filteredVoca = vocabs.filter((vocab) =>
        vocab.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6">
            {isLoading ? (
                <div className="text-center mt-20">로딩 중...</div>
            ) : (
                <>
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
                        <VocaCard vocaId={vocab.id} title={vocab.title} description={vocab.description} wordCount={vocab.wordCount} />
                    ))}
                    
                    {filteredVoca.length === 0 && (
                        <p className="text-gray-500 col-span-full text-center mt-8">검색 결과가 없습니다.</p>
                    )}

                    {filteredVoca.length === vocabs.length && ( // 검색을 하지 않았을때
                        <div
                            onClick={() => setShowModal(true)}
                            className="cursor-pointer flex items-center justify-center bg-white shadow-md rounded-xl p-4 border-2 border-dashed border-blue-400 hover:bg-blue-50 transition"
                        >
                            <span className="text-blue-500 text-lg font-medium">+ 새 단어장</span>
                        </div>
                    )}
                    
                </div>

                {/* 새 단어장 만들기 모달창 */}
                <VocaCreateModal
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                    onSubmit={handleCreate}
                />
                </>
            )}
            
        </div>
    );
};

export default MyVocaListPage;