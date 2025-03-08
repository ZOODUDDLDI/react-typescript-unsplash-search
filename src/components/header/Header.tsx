import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  const navigate = useNavigate();

  // 페이지 이동
  const moveToPage = (filter: string) => {
    if (filter === "main") navigate("/");
    if (filter === "bookmark") navigate("/bookmark");
  };

  return (
    <div className={styles.header}>
      {/* 로고 박스 */}
      <div className={styles.header__logoBox}>
        <img
          src="src/assets/images/logo.png"
          alt="logo"
          className={styles.header__logoBox__logo}
          onClick={() => {
            moveToPage("main");
          }}
        />
        <span className={styles.header__logoBox__title}>SnapSplash</span>
      </div>
      {/* 프로필 박스 */}
      <div className={styles.header__profileBox}>
        <button
          className={styles.header__profileBox__button}
          onClick={() => {
            moveToPage("bookmark");
          }}
        >
          북마크
        </button>
        <span className={styles.header__profileBox__user}>
          한주영 | HANJUYOUNG
        </span>
      </div>
    </div>
  );
}

export default Header;
