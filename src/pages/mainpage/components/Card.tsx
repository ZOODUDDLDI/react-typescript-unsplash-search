import { CardDTO } from "../types/card";
import styles from "./Card.module.scss";

interface Props {
  data: CardDTO;
  handleDialog: (eventValue: boolean) => void;
  handleSetData: (eventValue: CardDTO) => void;
}

function Card({ data, handleDialog, handleSetData }: Props) {
  // 카드 클릭시
  const openDialog = () => {
    console.log("이미지 호출");
    handleDialog(true); // 선택한 카드 데이터 저장
    handleSetData(data); // 다이얼로그 열기
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
