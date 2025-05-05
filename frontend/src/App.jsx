import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AuthProvider from "./contexts/AuthContext";
import MyVocaListPage from "./pages/MyVocaListPage";
import VocabularyBookPage from "./pages/VocabularyBookPage";

function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/my-voca" element={<MyVocaListPage />} />
        <Route path="/my-voca/:vocabId" element={<VocabularyBookPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
