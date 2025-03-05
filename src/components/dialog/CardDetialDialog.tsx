import { CardDTO } from "@/pages/mainpage/types/card";

import styles from "./CardDetialDialog.module.scss";

interface Props {
  data: CardDTO;
  handleDialog: (eventValue: boolean) => void;
}

function CardDetialDialog({ data, handleDialog }: Props) {
  // 다이얼로그 닫기
  const closeDialog = () => {
    handleDialog(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__dialog}>
        <div className={styles.container__dialog__header}>
          <div className={styles.close}>
            <button className={styles.close__button} onClick={closeDialog}>
              <span>close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetialDialog;
