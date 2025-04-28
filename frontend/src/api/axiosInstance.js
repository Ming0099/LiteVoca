import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080", // 백엔드 주소
  headers: {
    "Content-Type": "application/json",
  },
});

const getAuthToken = () => {
  return localStorage.getItem("token"); // 또는 쿠키에서 가져올 수 있음
};

// Axios 요청 인터셉터로 토큰을 헤더에 자동 추가
axios.interceptors.request.use(
  (config) => {
      const token = getAuthToken();
      if (token) {
          config.headers["Authorization"] = `Bearer ${token}`; // Bearer 방식으로 토큰 추가
      }
      return config;
  },
  (error) => {
      return Promise.reject(error);
  }
);

export default axiosInstance;