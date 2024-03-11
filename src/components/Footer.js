import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <ul className={styles.content}>
        <h1>멀티캠퍼스 스켈레톤 프로젝트</h1>
        <p>제작자 | 손지연 전윤하 박우정 양재식 송운정</p>
      </ul>
    </div>
  );
}
export default Footer;
