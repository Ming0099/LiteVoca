import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../components/ui/TextInput";
import SubmitButton from "../components/ui/SubmitButton";
import axios from "../api/axiosInstance";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const [message, setMessage] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        setMessage("");

        // TODO 백엔드 인증 요청 → 성공 시 토큰 저장 + 이동
        try{
            const res = await axios.post("/auth/login", {email, password});
            console.log("nick : " + res.data.nickname);
            console.log("token : " + res.data.token);
            navigate("/");
        }catch(err){
            setMessage("존재하지 않는 이메일 또는 비밀번호입니다.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-6 text-blue-500">LiteVoca 로그인</h2>

                <form onSubmit={handleLogin} className="space-y-4">

                    <TextInput text="이메일" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <TextInput text="비밀번호" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    {message && (
                            <p className="mt-4 text-center text-sm text-red-500">{message}</p>
                    )}

                    <SubmitButton text="로그인" />
                    
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