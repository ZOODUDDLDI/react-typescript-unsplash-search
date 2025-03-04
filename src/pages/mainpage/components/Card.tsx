import { CardDTO } from "../types/card";
import styles from "./Card.module.scss";

interface Props {
  data: CardDTO;
}

function Card({ data }: Props) {
  // 카드 클릭시
  const openDialog = () => {
    console.log("이미지 호출");
  };
  return (
    <div className={styles.card} onClick={openDialog}>
      <img
        src={data.urls.small}
        alt={data.alt_description}
        className={styles.card__image}
      />
    </div>
  );
}

export default Card;
