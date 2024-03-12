import foodData from "../../public/data/먹거리20.json";
import healingData from "../../public/data/healing.json";
import cultureData from "../../public/data/culture.json";

export default function Food() {
  return (
    <div className="category">
      <h2>먹거리</h2>
      <ul className="image-list">
        {foodData.food.map((food) => (
          <li key={food.id}>
            <img src={food.이미지} alt={food.명칭} />
            <h4>{food.명칭}</h4>
            <p>{food.주소}</p>
            <h5>{food.안내번호}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Healing() {
  return (
    <div className="category">
      <h2>힐링</h2>
      <ul className="image-list">
        {healingData.healing.map((healing) => (
          <li key={healing.id}>
            <img src={healing.이미지} alt={healing.명칭} />
            <h4>{healing.명칭}</h4>
            <p>{healing.주소}</p>
            <h5>{healing.안내번호}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Culture() {
  return (
    <div className="category">
      <h2>문화</h2>
      <ul className="image-list">
        {cultureData.culture.map((culture) => (
          <li key={culture.id}>
            <img src={culture.이미지} alt={culture.명칭} />
            <h4>{culture.명칭}</h4>
            <p>{culture.주소}</p>
            <h5>{culture.안내번호}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
}
