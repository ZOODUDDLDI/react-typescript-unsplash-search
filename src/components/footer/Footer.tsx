// 페이지네이션
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.pagination}>
        {/* 왼쪽 버튼 */}
        <button className={styles.pagination__button}>
          <img src="src/assets/icons/icon-arrowLeft.svg" alt="" />
        </button>
        {/* 변경될 ui부분 */}
        <span>1</span>
        {/* 오른쪽 버튼 */}
        <button className={styles.pagination__button}>
          <img src="src/assets/icons/icon-arrowRight.svg" alt="" />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
