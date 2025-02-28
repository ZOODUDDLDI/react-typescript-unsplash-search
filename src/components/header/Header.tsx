import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      {/* 로고 박스 */}
      <div className={styles.header__logoBox}>
        <img
          src="src/assets/images/logo.png"
          alt="logo"
          className={styles.header__logoBox__logo}
        />
        <span className={styles.header__logoBox__title}>SnapSplash</span>
      </div>
      {/* 프로필 박스 */}
      <div className={styles.header__profileBox}>
        <button className={styles.header__profileBox__bookmark}>북마크</button>
        <span className={styles.header__profileBox__user}>
          한주영 | HANJUYOUNG
        </span>
      </div>
    </div>
  );
}

export default Header;
