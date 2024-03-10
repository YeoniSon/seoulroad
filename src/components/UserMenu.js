import { Link } from "react-router-dom";
import personIcon from "../images/loginImg.png";
import { useCallback, useEffect, useState } from "react";
import styles from "./UserMenu.module.css";

function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = useCallback((e) => {
    e.stopPropagation();
    setIsOpen((nextIsOpen) => !nextIsOpen);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleclickOutside = () => setIsOpen(false);
    window.addEventListener("click", handleclickOutside);

    return () => {
      window.removeEventListener("click", handleclickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.userMenu}>
      <button className={styles.iconButton} onClick={handleButtonClick}>
        <img src={personIcon} alt="로그인"></img>
      </button>
      {isOpen && (
        <ul className={styles.popup}>
          <li>
            <Link to={"/login"}>로그인</Link>
          </li>
          <li>
            <Link to={"/signup"}>회원가입</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
export default UserMenu;
