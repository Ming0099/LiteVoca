import { Link } from "react-router-dom";
import FeatureCard from "../components/Home/FeatureCard";
import { useAuth } from "../contexts/AuthContext";

function Home() {
    const { isLoggedIn, logout } = useAuth();

    return (
        <div className="min-h-screen bg-white flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center px-6 py-4 border-b shadow-sm">
            <Link to="/" className="text-2xl font-bold text-blue-600">LiteVoca</Link>
            <nav className="space-x-4">
                {/* 로그인 시 */}
                {isLoggedIn ? (
                    // TODO 마이페이지 버튼 추가해야함
                    <Link onClick={logout} className="px-4 py-2 rounded border hover:text-white hover:bg-red-500">로그아웃</Link>
                ) : (
                    <>
                    <Link to="/login" className="text-gray-600 hover:text-blue-600">로그인</Link>
                    <Link to="/signup" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">회원가입</Link>
                    </>
                )}
            </nav>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center flex-1 text-center px-4 py-12 bg-blue-50">
            <h2 className="text-4xl font-bold mb-4">쉽고 가볍게 단어 암기!</h2>
            <p className="text-gray-600 mb-6 max-w-xl">
            LiteVoca는 나만의 단어장을 만들고, 공유하고, 퀴즈로 복습할 수 있는 영단어 학습 서비스입니다.
            </p>
            <Link
            to="/signup"
            className="bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600"
            >
            지금 시작하기
            </Link>
        </section>

        {/* Features Section */}
        <section className="bg-white py-12 px-6 max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-center"> {/** grid-cols-3 FeatureCard 개수에 따라 다르게 설정 */}
            <FeatureCard title="📘 단어장 관리" text="나만의 단어장을 만들고, 단어를 등록하고, 관리할 수 있어요." />
            <FeatureCard title="🔁 퀴즈 학습" text="객관식 / 주관식 퀴즈로 반복 학습하고, 틀린 단어만 다시 공부해요." />
            <FeatureCard title="🌐 단어장 공유" text="공개 단어장을 보고 내 단어장으로 복사할 수 있어요." />
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 py-4 border-t">
            © 2025 LiteVoca. All rights reserved.
        </footer>
        </div>
    );
}

export default Home;