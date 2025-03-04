// 페이지 라우팅
import { BrowserRouter, Routes, Route } from "react-router-dom";

// recoil 추가하기
import { RecoilRoot } from "recoil";

// 페이지 컴포넌트
import MainPage from "@pages/mainpage/index";
import BookMarkPage from "@pages/bookmark/index";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/bookmark" element={<BookMarkPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
