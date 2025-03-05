import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import navJson from "./nav.json";
// Recoil 상태 관리 라이브러리에서 전역 상태 관리에 사용.
import { useRecoilState } from "recoil";
// 현재 페이지 및 검색어 상태를 관리하는 Recoil 상태.
import { pageState } from "@/recoil/atoms/pageState";
import { searchState } from "@/recoil/atoms/searchState";

import styles from "./Navigation.module.scss";

// Navigation 타입 정의
interface Navigation {
  index: number;
  path: string;
  label: string;
  searchValue: string;
  isActive: boolean;
}

function Navigation() {
  const location = useLocation(); // 현재 경로 정보 가져오기

  const [navigation, setNavigation] = useState<Navigation[]>(navJson); // 네비게이션 데이터 상태관리
  // Recoil 상태
  const [, setPage] = useRecoilState(pageState);
  const [, setSearch] = useRecoilState(searchState);

  // url 변경 감지후 네비게이션 업데이트
  useEffect(() => {
    navigation.forEach((nav: Navigation) => {
      nav.isActive = false;

      if (
        nav.path === location.pathname ||
        location.pathname.includes(nav.path)
      ) {
        nav.isActive = true;
        setSearch(nav.searchValue); // 현재 페이지의 검색어 설정
        setPage(1);
      }
    });
    setNavigation([...navigation]);
  }, [location.pathname]);

  // 네비게이션 UI 생성
  // useState로 선언한 반응성을 가진 데이터를 기반으로 UI를 반복호출해보도록 한다.
  const navLinks = navigation.map((item: Navigation) => {
    return (
      <Link
        to={item.path}
        className={
          item.isActive
            ? `${styles.navigation__menu} ${styles.active}`
            : `${styles.navigation__menu} ${styles.inactive}`
        }
        key={item.path}
      >
        <span className={styles.navigation__menu__label}>{item.label}</span>
      </Link>
    );
  });
  return <nav className={styles.navigation}>{navLinks}</nav>;
}

export default Navigation;
