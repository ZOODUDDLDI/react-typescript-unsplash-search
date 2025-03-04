// 검색어를 담당하는 상태 값
import { atom } from "recoil";

export const searchState = atom<string>({
  key: "searchState",
  default: "Korea",
});
