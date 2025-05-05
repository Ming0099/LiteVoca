import { useParams, useNavigate } from "react-router-dom";

const dummyVocab = {
  id: 1,
  title: "TOEIC 단어장",
  description: "자주 나오는 토익 단어들",
  words: [
    { id: 1, english: "efficient", meaning: "효율적인" },
    { id: 2, english: "negotiate", meaning: "협상하다" },
    { id: 3, english: "implement", meaning: "실행하다" }
  ]
};

const VocabularyBookPage = () => {
  const { vocabId } = useParams();
  console.log("vocabId : ", vocabId);
  const navigate = useNavigate();

  return (
    <div className="p-6">
        <button
                onClick={() => navigate("/my-voca")}
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                ← 내 단어장으로 돌아가기
        </button>

        <h1 className="text-2xl font-bold mb-6">단어장 상세보기</h1>

        <h1 className="text-2xl font-bold mb-2">{dummyVocab.title}</h1>
        <p className="text-gray-600 mb-4">{dummyVocab.description}</p>
        <h2 className="text-xl font-semibold mb-2">단어 목록</h2>
        <ul className="space-y-2">
            {dummyVocab.words.map((word) => (
            <li key={word.id} className="border p-3 rounded">
                <strong>{word.english}</strong>: {word.meaning}
            </li>
            ))}
        </ul>
    </div>
  );
};

export default VocabularyBookPage;
