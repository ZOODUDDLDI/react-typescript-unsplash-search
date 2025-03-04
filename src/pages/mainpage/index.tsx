import styles from "./index.module.scss";

import Header from "@components/header/Header";
import Navigation from "@/components/navigation/Navigation";

function index() {
  return (
    <div className={styles.page}>
      {/* 공통 헤더 */}
      <Header />
      {/* 공통 네비게이션 */}
      <Navigation />

      {/* 검색창 UI 부분 */}

      {/* 인터 */}
    </div>
  );
}

export default index;
