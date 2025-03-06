import { useState, useEffect } from "react";
import styles from "./SearchBar.module.scss";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { searchState } from "@/recoil/atoms/searchState";
import { pageState } from "@/recoil/atoms/pageState";
import { imageData } from "@/recoil/selectors/imageSelectors";

function SearchBar() {
  const [, setSearch] = useRecoilState(searchState);
  const [, setPage] = useRecoilState(pageState);
  // 검색 결과 가져오기
  const imagesLoadable = useRecoilValueLoadable(imageData);

  // 검색 텍스트
  const [text, setText] = useState("");
  // 검색 타이핑
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  // 검색
  const handleSearch = () => {
    const query = text.trim() === "" ? "Korea" : text;
    setSearch(query);
    setPage(1);
  };
  // 검색 버튼
  const onSearch = () => {
    handleSearch();
  };
  // 엔터키
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  // 토스트 메시지 실행 제어
  useEffect(() => {
    if (
      imagesLoadable.state === "hasValue" &&
      imagesLoadable.contents.results.length === 0
    ) {
      alert("검색 결과가 없습니다. 😢");
    }
  }, [imagesLoadable]); // imagesLoadable이 변경될 때 실행

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBar__search}>
        <input
          type="text"
          placeholder="찾으실 이미지를 검색하세요."
          className={styles.searchBar__search__input}
          value={text}
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />
        <img src="src/assets/icons/icon-search.svg" alt="" onClick={onSearch} />
      </div>
    </div>
  );
}

export default SearchBar;
