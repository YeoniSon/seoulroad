import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./CultureDetailPage.module.css";
import Button from "../components/Button";

function CultureDetailPage() {
  const [jsonData, setJsonData] = useState("");
  const { name } = useParams();

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
    <div>
      {jsonData && (
        <div className={styles.container}>
          {jsonData.map(
            (healing, index) =>
              healing.명칭.trim() === name && (
                <div className={styles.details} key={index}>
                  <img
                    className={styles.cultureImages}
                    src={healing.이미지[0]}
                    alt={healing.명칭}
                  />
                  <h2>
                    {healing.명칭}
                    <Button />
                  </h2>

                  <p>{healing.개요}</p>
                  <h3>전화번호</h3>
                  <span>{healing.안내번호}</span>
                  <h3>주소</h3>
                  <span>{healing.주소}</span>
                  <h3>영업시간</h3>
                  <span>{healing.이용시간}</span>
                  <h3>상세정보</h3>
                  <span className="info">
                    <span>휴일 :</span> {healing.쉬는날},{" "}
                    <span>주차시설 : </span>
                    {healing.주차시설}
                  </span>
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
}

export default CultureDetailPage;
