import foodData from "../api/food.json";

export default function Food() {
  console.log(foodData);
  return (
    <>
      <ul>
        {foodData.food.map((food) => (
          <li>
            <img src={food.이미지} alt={food.명칭} />
            <h2>{food.명칭}</h2>
            <p>{food.주소}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
