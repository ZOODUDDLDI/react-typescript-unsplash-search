import { useMemo } from "react";
import { useRecoilValueLoadable } from "recoil";

import Header from "@/components/header/Header";
import Navigation from "@/components/navigation/Navigation";
import SearchBar from "@/components/searchBar/SearchBar";
import Footer from "@/components/footer/Footer";
import Card from "./components/Card";

import styles from "./index.module.scss";

import { CardDTO } from "./types/card";
import { imageData } from "@/recoil/selectors/imageSelectors";

function Index() {
  const imgSelector = useRecoilValueLoadable(imageData);

  const CARD_LIST = useMemo(() => {
    console.log("데이터 : ", imgSelector);
    if (imgSelector.state === "hasValue") {
      const result = imgSelector.contents.results.map((card: CardDTO) => {
        return <Card data={card} key={card.id} />;
      });
      return result;
    }
  }, [imgSelector]);

  return (
    <div className={styles.page}>
      {/* 공통 헤더 */}
      <Header />

      {/* 공통 네비게이션 */}
      <Navigation />

      {/* */}
      <div className={styles.page__contents}>
        <div className={styles.page__contents__introBox}>
          <div className={styles.wrapper}>
            <span className={styles.wrapper__title}>SnapSplash</span>
            <span className={styles.wrapper__desc}>
              손끝에서 펼쳐지는 아름다운 이미지의 세계, <br />
              간편한 검색으로 고품질 이미지를 찾아보세요.
            </span>

            {/* 검색창 UI 부분 */}
            <SearchBar />
          </div>
        </div>
        {/* 카드 */}
        <div className={styles.page__contents__imageBox}>{CARD_LIST}</div>
      </div>

      {/* 공통 푸터 UI 부분 */}
      <Footer />
    </div>
  );
}

export default Index;
