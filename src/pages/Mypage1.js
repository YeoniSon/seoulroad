import Food, { Healing, Culture } from "../components/MyPickup";
import styles from "./Mypage.module.css";

export default function MyPickup() {
  return (
    <div className={styles.container}>
      <div className={styles.category}>
        <Food />
      </div>
      <div className={styles.category}>
        <Healing />
      </div>
      <div className={styles.category}>
        <Culture />
      </div>
    </div>
  );
}
