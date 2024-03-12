import healingData from "../api/healing.json";

export default function Healing() {
  console.log(healingData);
  return (
    <>
      <ul>
        {healingData.healing.map((healing) => (
          <li>
            <img src={healing.이미지} alt={healing.명칭} />
            <h2>{healing.명칭}</h2>
            <p>{healing.주소}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
