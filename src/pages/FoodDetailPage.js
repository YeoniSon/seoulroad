import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./FoodDetailPage.module.css";
import Button from "../components/Button";

function FoodDetailPage() {
  const [jsonData, setJsonData] = useState("");
  const { name } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/먹거리20.json");
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
            (restaurant, index) =>
              restaurant.명칭 === name && (
                <div className={styles.details} key={index}>
                  <img
                    className={styles.foodImages}
                    src={restaurant.이미지[0]}
                    alt={restaurant.명칭}
                  />
                  <h2>
                    {restaurant.명칭}
                    <Button />
                  </h2>

                  <p>{restaurant.개요}</p>
                  <h3>전화번호</h3>
                  <span>{restaurant.안내번호}</span>
                  <h3>주소</h3>
                  <span>{restaurant.주소}</span>
                  <h3>대표메뉴</h3>
                  <spn>{restaurant.대표메뉴}</spn>
                  <h3>영업시간</h3>
                  <span>{restaurant.영업시간}</span>
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
}

export default FoodDetailPage;
