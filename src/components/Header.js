import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import logoImg from "../images/logo.png";
import UserMenu from "./UserMenu";
import styles from "./Header.module.css";

function Header() {
  const getLinkStyle = ({ isActive }) => ({
    textDecoration: isActive ? "underline" : "",
  });

  return (
    <div className={styles.nav}>
      <div className={styles.container}>
        <Link to={"/"}>
          <img src={logoImg} alt="로고이미지"></img>
        </Link>
        <ul className={styles.menu}>
          <li>
            <NavLink style={getLinkStyle} to={"/food"}>
              먹거리
            </NavLink>
          </li>
          <li>
            <NavLink style={getLinkStyle} to={"/culture"}>
              문화
            </NavLink>
          </li>
          <li>
            <NavLink style={getLinkStyle} to={"/healing"}>
              힐링
            </NavLink>
          </li>
          <li>
            <NavLink style={getLinkStyle} to={"/mypage"}>
              마이페이지
            </NavLink>
          </li>
          <li>
            <UserMenu />
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
}
export default Header;
