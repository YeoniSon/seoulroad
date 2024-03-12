import React, { useState, useEffect } from "react";
import styles from "./HealingListPage.module.css";
import { Link } from "react-router-dom";

const HealingListPage = () => {
  const [jsonData, setJsonData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/healing.json");
        const jsonData = await response.json();
        setJsonData(jsonData);
      } catch (error) {
        console.error("JSON 데이터를 가져오는 중 오류가 발생했습니다.", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.titlename}>
        <span className={styles.spans}>
          <span>서울</span>
          <span className={styles.healing}> 힐링</span>
          <span> 🍃</span>
        </span>
      </div>
      {jsonData ? (
        jsonData.map((healing, index) => (
          <Link to={`/healing/${healing.명칭}`} className={styles.link}>
            <div className={styles.card} key={index}>
              <figure className={styles.imgs}>
                <img src={healing.이미지[0]} alt={healing.명칭} />
              </figure>
              <div className={styles.detail}>
                <h3 className={styles.title}>{healing.명칭}</h3>
                <p className={styles.address}>주소: {healing.주소}</p>
                <p>{healing.개요}</p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default HealingListPage;
