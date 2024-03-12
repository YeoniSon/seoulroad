import React, { useState, useEffect } from "react";
import styles from "./CultureListPage.module.css";
import { Link } from "react-router-dom";

const CultureListPage = () => {
  const [jsonData, setJsonData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/culture.json");
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
          <span>서울</span> <span className={styles.culture}>볼거리</span>
          <span> 🧐</span>
        </span>
      </div>
      {jsonData ? (
        jsonData.map((culture, index) => (
          <Link to={`/culture/${culture.명칭}`} className={styles.link}>
            <div className={styles.card} key={index}>
              <figure className={styles.imgs}>
                <img src={culture.이미지[0]} alt={culture.명칭} width="200" />
              </figure>
              <div className={styles.detail}>
                <h3 className={styles.title}>{culture.명칭}</h3>
                <p className="address">주소: {culture.주소}</p>
                <p>{culture.개요}</p>
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

export default CultureListPage;
