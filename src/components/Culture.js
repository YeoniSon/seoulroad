import cultureData from "../api/culture.json";

export default function Culture() {
  console.log(cultureData);
  return (
    <>
      <ul>
        {cultureData.culture.map((culture) => (
          <li>
            <img src={culture.이미지} alt={culture.명칭} />
            <h2>{culture.명칭}</h2>
            <p>{culture.주소}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
