// 페이지 라우팅
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "@pages/mainpage/index";

import BookMarkPage from "@pages/bookmark/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/bookmark" element={<BookMarkPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
