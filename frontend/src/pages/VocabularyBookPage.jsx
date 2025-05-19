import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const VocabularyBookPage = () => {
  const { vocabId } = useParams();
  const navigate = useNavigate();

  const [vocab, setVocab] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVocabularyBook = async () => {
      try {
        const response = await axios.get(`/api/vocabulary-books/${vocabId}`);
        setVocab(response.data);
      } catch (error) {
        console.error("단어장 불러오기 실패:", error);
        alert("단어장을 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchVocabularyBook();
  }, [vocabId]);

  if (loading) {
    return <div className="p-6">로딩 중...</div>;
  }

  if (!vocab) {
    return <div className="p-6 text-red-500">단어장을 불러올 수 없습니다.</div>;
  }

  return (
    <div className="p-6">
      <button
        onClick={() => navigate("/my-voca")}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        ← 내 단어장으로 돌아가기
      </button>

      <h1 className="text-2xl font-bold mb-6">단어장 상세보기</h1>

      <h2 className="text-2xl font-bold mb-2">{vocab.title}</h2>
      <p className="text-gray-600 mb-4">{vocab.description}</p>
      <h3 className="text-xl font-semibold mb-2">단어 목록</h3>

      {vocab.words.length === 0 ? (
        <p className="text-gray-500">아직 등록된 단어가 없습니다.</p>
      ) : (
        <ul className="space-y-2">
          {vocab.words.map((word) => (
            <li key={word.id} className="border p-3 rounded">
              <strong>{word.english}</strong>: {word.meaning}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VocabularyBookPage;
