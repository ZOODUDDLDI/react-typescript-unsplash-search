// 페이지 숫자를 담당하는 상태값s
import { atom } from "recoil";

export const pageState = atom<number>({
  key: "pageState",
  default: 1,
});
