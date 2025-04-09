import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../components/ui/TextInput";
import SubmitButton from "../components/ui/SubmitButton";
import axios from "../api/axiosInstance";

function Signup() {
    const [email, setEmail] = useState("");
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const [message, setMessage] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();
        setMessage("");

        // 비밀번호 중복체크
        if (password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        // 회원가입 요청
        try{
            const res = await axios.post("/auth/signup", {email, nickname, password});
            alert("회원가입 성공! 로그인 페이지로 이동합니다.");
            navigate("/login"); // 로그인 페이지로 이동
        }catch (err){
            setMessage("회원가입 실패: 알 수 없는 오류");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-bold text-center mb-6 text-blue-500">LiteVoca 회원가입</h2>

                    <form onSubmit={handleSignup} className="space-y-4">

                        <TextInput text="이메일" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <TextInput text="닉네임" id="nickname" type="text" value={nickname} onChange={(e) => setNickname(e.target.value)}/>
                        <TextInput text="비밀번호" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <TextInput text="비밀번호 확인" id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>

                        <SubmitButton text="회원가입" />

                        {message && (
                            <p className="mt-4 text-center text-sm text-red-500">{message}</p>
                        )}
                        
                    </form>

                    <p className="text-sm text-gray-600 mt-4 text-center">
                        이미 계정이 있으신가요?{" "}
                        <Link to="/login" className="text-blue-500 hover:underline font-medium">
                            로그인
                        </Link>
                    </p>
            </div>
        </div>
    );
}

export default Signup;