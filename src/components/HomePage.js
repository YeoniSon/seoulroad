import { useCallback, useState } from "react";
import ImageSlider from "./ImageSlider";

import styles from "./HomePage.module.css";
import more from "../assets/more.png";
import next from "../assets/next.png";
import prev from "../assets/prev.png"

import 칼국수 from "../assets/강릉형제장칼국수.jpg";
import 경복궁 from "../assets/경복궁.jpg";
import 광화문 from "../assets/광화문.jpg";
import 금고깃집 from "../assets/금고깃집.jpg";
import 도봉산 from "../assets/도봉산.jpg";
import 망우산 from "../assets/망우산.jpg";
import 봉화산 from "../assets/봉화산.jpg";
import 서울숲 from "../assets/서울숲.jpg";
import 수구레 from "../assets/원조수구레.jpg";
import 이태원 from "../assets/이태원.jpg";
import 팔오삼 from "../assets/팔오삼.jpg";
import 세종대왕 from "../assets/세종대왕.JPG"

const HomePage = () => {
  const onVectorIconClick = useCallback(() => {
    // Please sync "먹거리" to the project
  }, []);

  const onLinkImageClick = useCallback(() => {
    // Please sync "상세페이지" to the project
  }, []);

  const onVectorIcon2Click = useCallback(() => {
    // Please sync "볼거리" to the project
  }, []);

  const onVectorIcon3Click = useCallback(() => {
    // Please sync "힐링" to the project
  }, []);

  // const [slideIndex, setSlideIndex] = useState(0);

  const onNextClickLeft = useCallback(() => {
    // setSlideIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  }, []);

  const onNextClickRight = useCallback(() => {
    // setSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  }, []);


  return (
    <>
    <ImageSlider />
    <main className={styles.main}>
      <div className={styles.main1}>
        <div className={styles.div}>
          <div className={styles.sectionParent}>
            <div className={styles.section}>
              <div className={styles.heading1Parent}>
                <b className={styles.heading1Container}>
                  <span className={styles.heading1Container1}>
                    <span>{`서울 `}</span>
                    <span className={styles.span}>먹거리</span>
                    <span> 🍽️</span>
                  </span>
                </b>
                <div className={styles.div1}>
                  <img
                    className={styles.child}
                    alt=""
                    src={more}
                    onClick={onVectorIconClick}
                  />
                </div>
              </div>
              <div className={styles.divswiper}>
              <div className={styles.before} />
                <img
                  className={styles.buttonNextSlideLeft}
                  alt=""
                  src={prev}
                  onClick={onNextClickLeft}
                />
                <img
                  className={styles.linkIcon}
                  alt=""
                  src={팔오삼}
                  onClick={onLinkImageClick}
                />
                <div className={styles.link}>
                  <b className={styles.b}>팔오삼</b>
                </div>
                <div className={styles.link1}>
                  <div className={styles.div2}>종로구</div>
                </div>
                <img className={styles.linkIcon1} alt="" src={금고깃집} />
                <div className={styles.link2}>
                  <b className={styles.b1}>금고깃집</b>
                </div>
                <div className={styles.link3}>
                  <div className={styles.div3}>강서구</div>
                </div>
                <img className={styles.linkIcon2} alt="" src={수구레} />
                <div className={styles.link4}>
                  <b className={styles.b2}>원조 수구레</b>
                </div>
                <div className={styles.link5}>
                  <div className={styles.div3}>강서구</div>
                </div>
                <img className={styles.linkIcon3} alt="" src={칼국수} />
                <div className={styles.link6}>
                  <b className={styles.b3}>강릉형제장칼국수</b>
                </div>
                <div className={styles.link7}>
                  <div className={styles.div3}>관악구</div>
                </div>
                <div className={styles.before} />
                <div className={styles.after} />
                <img
                  className={styles.buttonNextSlide}
                  alt=""
                  src={next}
                  onClick={onNextClickRight}
                />
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.heading1Parent}>
                <b className={styles.heading1Container}>
                  <span className={styles.heading1Container1}>
                    <span>{`서울 `}</span>
                    <span className={styles.span}>볼거리</span>
                    <span> 🧐</span>
                  </span>
                </b>
                <img
                  className={styles.child}
                  alt=""
                  src={prev}
                  onClick={onVectorIcon2Click}
                />
              </div>
              <div className={styles.divswiper}>
              <div className={styles.before} />
                <img
                  className={styles.buttonNextSlideLeft}
                  alt=""
                  src={prev}
                  onClick={onNextClickLeft}
                />
                <img className={styles.linkIcon4} alt="" src={이태원} />
                <div className={styles.link}>
                  <b className={styles.b4}>이태원 앤틱 가구 거리</b>
                </div>
                <div className={styles.link9}>
                  <div className={styles.div3}>용산구</div>
                </div>
                <img className={styles.linkIcon1} alt="" src={경복궁} />
                <div className={styles.link2}>
                  <b className={styles.b5}>경복궁</b>
                </div>
                <div className={styles.link11}>
                  <div className={styles.div3}>종로구</div>
                </div>
                <img className={styles.linkIcon2} alt="" src={광화문} />
                <div className={styles.link4}>
                  <b className={styles.b1}>광화문</b>
                </div>
                <div className={styles.link5}>
                  <div className={styles.div3}>종로구</div>
                </div>
                <img className={styles.linkIcon3} alt="" src={세종대왕} />
                <div className={styles.link6}>
                  <b className={styles.b4}>세종대왕 동상</b>
                </div>
                <div className={styles.link7}>
                  <div className={styles.div3}>종로구</div>
                </div>
                <div className={styles.before} />
                <div className={styles.after} />
                <img
                  className={styles.buttonNextSlide}
                  alt=""
                  src={next}
                />
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.heading1Parent}>
                <b className={styles.heading1Container}>
                  <span className={styles.heading1Container1}>
                    <span>{`서울 `}</span>
                    <span className={styles.span}>힐링</span>
                    <span> 🍃</span>
                  </span>
                </b>
                <img
                  className={styles.child}
                  alt=""
                  src={more}
                  onClick={onVectorIcon3Click}
                />
              </div>
              <div className={styles.divswiper}>
              <div className={styles.before} />
                <img
                  className={styles.buttonNextSlideLeft}
                  alt=""
                  src={prev}
                  onClick={onNextClickLeft}
                />
                <img className={styles.linkIcon4} alt="" src={봉화산} />
                <div className={styles.link}>
                  <b className={styles.b4}>봉화산</b>
                </div>
                <div className={styles.link9}>
                  <div className={styles.div3}>중랑구</div>
                </div>
                <img className={styles.linkIcon1} alt="" src={망우산} />
                <div className={styles.link2}>
                  <b className={styles.b5}>망우산</b>
                </div>
                <div className={styles.link11}>
                  <div className={styles.div3}>중랑구</div>
                </div>
                <img className={styles.linkIcon2} alt="" src={도봉산} />
                <div className={styles.link4}>
                  <b className={styles.b1}>도봉산</b>
                </div>
                <div className={styles.link5}>
                  <div className={styles.div3}>도봉구</div>
                </div>
                <img className={styles.linkIcon3} alt="" src={서울숲} />
                <div className={styles.link6}>
                  <b className={styles.b4}>서울숲</b>
                </div>
                <div className={styles.link7}>
                  <div className={styles.div3}>성동구</div>
                </div>
                <div className={styles.before} />
                <div className={styles.after} />
                <img
                  className={styles.buttonNextSlide}
                  alt=""
                  src={next}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
};

export default HomePage;
