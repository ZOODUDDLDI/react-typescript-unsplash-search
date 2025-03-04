import styles from "./Card.module.scss";

function Card() {
  // 카드 클릭시
  const openDialog = () => {
    console.log("이미지 호출");
  };
  return (
    <div className={styles.card} onClick={openDialog}>
      <img src="" alt="" className={styles.card__image} />
    </div>
  );
}

export default Card;
