import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center p-6">
      <h1 className="text-6xl font-bold text-blue-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">페이지를 찾을 수 없어요</h2>
      <p className="text-gray-500 mb-6">입력하신 주소가 존재하지 않거나, 이동된 페이지입니다.</p>
      <Link
        to="/"
        className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}

export default NotFound;