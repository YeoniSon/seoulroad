import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../images/logo.png";
import UserMenu from "./UserMenu";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.nav}>
      <div className={styles.container}>
        <Link to={"/"}>
          <img src={logoImg} alt="로고이미지"></img>
        </Link>
        <ul className={styles.menu}>
          <li>
            <Link to={"/food"}>먹거리</Link>
          </li>
          <li>
            <Link to={"/culture"}>문화</Link>
          </li>
          <li>
            <Link to={"/healing"}>힐링</Link>
          </li>
          <li>
            <Link to={"/mypage"}>마이페이지</Link>
          </li>
          <li>
            <UserMenu />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
