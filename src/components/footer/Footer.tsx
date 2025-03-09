import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { imageData } from "@/recoil/selectors/imageSelectors";
import { pageState } from "@/recoil/atoms/pageState";
import { searchState } from "@/recoil/atoms/searchState";

// 페이지네이션
import styles from "./Footer.module.scss";

function Footer() {
  // 상태 관리
  const imgSelector = useRecoilValueLoadable(imageData); //이미지 데이터 가져오기
  const search = useRecoilValue(searchState); // 검색 상태 가져오기
  const [page, setPage] = useRecoilState(pageState); // 페이지 상태 가져오기
  const [step, setStep] = useState(0); // 페이지네이션 그룹 인덱스 관리 (10개씩)

  // 검색어가 변경될 때 페이지 그룹(step)을 초기화
  useEffect(() => {
    setStep(0);
  }, [search]);

  // 페이지네이션을 위한 배열 생성
  const newArr: number[] = [];
  for (let i = 1; i <= imgSelector.contents.total_pages; i++) {
    newArr.push(i); // 전체 페이지 개수만큼 숫자 배열 생성
  }

  // 전체 페이지 개수를 10개씩 그룹화하기 위한 로직
  const length = newArr.length; // 전체 페이지수
  const divide =
    Math.floor(length / 10) + (Math.floor(length % 10) > 0 ? 1 : 0); // 10개씩 나눌 그룹 개수 계산
  const res = []; // 페이지 그룹을 저장할 배열
  for (let i = 0; i <= divide; i++) {
    res.push(newArr.splice(0, 10)); // 10개씩 잘라서 새로운 배열에 저장
  }

  // ---------------------------------------
  // 특정 페이지로 이동하는 함수
  const moveToPage = (selected: number) => {
    setPage(selected); // 선택한 페이지를 현재 페이지로 설정
  };
  // 이전 버튼
  const moveToPrev = () => {
    if (step === 0) return;
    else {
      setStep(step - 1);
      setPage(res[step - 1][0]); // 해당 그룹의 첫 번째 페이지로 설정
    }
  };
  // 다음 버튼
  const moveToNext = () => {
    if (step < res.length - 1) {
      setStep(step + 1); // 다음 그룹으로 이동
      setPage(res[step + 1][0]); // 해당 그룹의 첫 번째 페이지로 설정
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.pagination}>
        <button className={styles.pagination__button} onClick={moveToPrev}>
          <img src="src/assets/icons/icon-arrowLeft.svg" alt="" />
        </button>
        {/* 변경될 UI 부분 */}
        {/* <span>1</span> */}
        {res[step] &&
          res[step].map((item: number, index: number) => {
            if (item < 11) {
              return (
                <button
                  className={
                    index === page - 1
                      ? `${styles.pagination__button} ${styles.active}`
                      : `${styles.pagination__button} ${styles.inactive}`
                  }
                  key={item}
                  onClick={() => moveToPage(item)}
                >
                  {item}
                </button>
              );
            } else {
              return (
                <button
                  className={
                    index === page - 1 - step * 10
                      ? `${styles.pagination__button} ${styles.active}`
                      : `${styles.pagination__button} ${styles.inactive}`
                  }
                  key={item}
                  onClick={() => moveToPage(item)}
                >
                  {item}
                </button>
              );
            }
          })}
        <button className={styles.pagination__button} onClick={moveToNext}>
          <img src="src/assets/icons/icon-arrowRight.svg" alt="" />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
