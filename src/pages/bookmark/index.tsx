import Header from "@/components/header/Header";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import { CardDTO } from "../mainpage/types/card";

import styles from "./index.module.scss";

function Index() {
  const [data, setData] = useState<CardDTO[]>([]); // 북마크 데이터를 저장하는 상태

  // 북마크 데이터 가져오기
  const getData = () => {
    const getLocalStorage = JSON.parse(localStorage.getItem("bookmark")); // 북마크 데이터 가져오기
    if (getLocalStorage !== null) setData(getLocalStorage);
    else setData([]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.page}>
      {/* 공통 헤더 UI 부분 */}
      <Header />
      <main className={styles.page__contents}>
        {/* 만약, 데이터가 없을때 */}
        {data.length === 0 ? (
          <div className={styles.page__contents__noData}>
            조회 가능한 데이터가 없습니다.
          </div>
        ) : (
          data.map((item: CardDTO) => {
            return <Card prop={item} key={item.id} />;
          })
        )}
      </main>
    </div>
  );
}

export default Index;
