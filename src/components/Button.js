import { useState } from "react";
import unbookmark from "../images/bookmark/unbookmark.png";
import bookMark from "../images/bookmark/bookmark.png";

function Button() {
  const [bookmark, setBookmark] = useState(bookMark);
  const [isClicked, setIsClicked] = useState(false);

  const handleBookmarkClick = () => {
    if (isClicked) {
      setBookmark(unbookmark);
      setIsClicked(true);
    } else {
      setBookmark(bookmark);
      setIsClicked(false);
    }
  };
}
export default Button;
