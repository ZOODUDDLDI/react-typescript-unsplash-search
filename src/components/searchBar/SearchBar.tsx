import { useState } from "react";
import styles from "./SearchBar.module.scss";

function SearchBar() {
  // 검색 텍스트
  const [text, setText] = useState("");

  // 검색 기능
  const onSearch = () => {};

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBar__search}>
        <input
          type="text"
          placeholder="찾으실 이미지를 검색하세요."
          className={styles.searchBar__search__input}
          value={text}
        />
        <img src="src/assets/icons/icon-search.svg" alt="" onClick={onSearch} />
      </div>
    </div>
  );
}

export default SearchBar;
