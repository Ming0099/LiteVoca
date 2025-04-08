import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../components/ui/TextInput";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // TODO 백엔드 인증 요청 → 성공 시 토큰 저장 + 이동
        console.log("로그인 시도", { email, password });
        navigate("/");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-6 text-blue-500">LiteVoca 로그인</h2>

                <form onSubmit={handleLogin} className="space-y-4">

                    <TextInput text="이메일" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <TextInput text="비밀번호" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        로그인
                    </button>
                    
                </form>

                <p className="text-sm text-gray-600 mt-4 text-center">
                    계정이 없으신가요?{" "}
                    <Link to="/signup" className="text-blue-500 hover:underline font-medium">
                        회원가입
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;