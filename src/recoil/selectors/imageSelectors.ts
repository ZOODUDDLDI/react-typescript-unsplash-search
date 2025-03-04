// 이미지 관련 상태를 가져오는 selector
import { selector } from "recoil";

import axios from "axios";

import { searchState } from "../atoms/searchState";
import { pageState } from "../atoms/pageState";

const API_URL = "https://api.unsplash.com/search/photos";
const API_KEY = "";
const PER_PAGE = 30;

export const imageData = selector({
  key: "imageData",
  get: async ({ get }) => {
    const searchValue = get(searchState);
    const pageValue = get(pageState);

    // api 호출
    try {
      const res = await axios.get(
        `${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&paer_page=${PER_PAGE}`
      );
      console.log("데이터: ", res);

      return res.data;
    } catch (error) {
      console.log("에러: ", error);
    }
  },
});
