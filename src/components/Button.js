import { useState } from "react";
import unbookmark from "../images/bookmark/unbookmark.png";
import bookMark from "../images/bookmark/bookmark.png";
import styles from "./Button.module.css";

function Button() {
  const [bookmark, setBookmark] = useState(unbookmark);
  const [isClicked, setIsClicked] = useState(false);

  const handleBookmarkClick = () => {
    // 버튼 클릭 상태를 변경하고, 이미지를 변경합니다.
    setIsClicked(!isClicked);
    setBookmark(isClicked ? unbookmark : bookMark);
  };

  return (
    <button className={styles.Button} onClick={handleBookmarkClick}>
      <img className={styles.img} src={bookmark} alt="bookmark" width="50px" />
    </button>
  );
}

export default Button;
