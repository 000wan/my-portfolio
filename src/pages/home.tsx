import React from "react";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import "../css/home.css";

const HomePage = () => {
  return (
    <div className="home-page page">
      <div className="home-top">
        <img
          src="https://user-images.githubusercontent.com/87213416/218112645-ceac15d4-b401-41d6-95d4-74668f19137b.jpg"
          width="600px"
        />
        <h1 className="home-name">권영완</h1>
        <p className="home-name">YoungWan Kweon</p>
      </div>
      <div className="home-bottom">
        <h1 className="home-title">Business Card</h1>
        <Carousel
          Items={[
            (props: { className: string }) => (
              <Card
                className={props.className}
                logoSrc="/images/kaist_logo_trans.png"
                logoWhiteSrc="/images/kaist_logo_trans(white).png"
                FrontItem={() => (
                  <div className="card-text">
                    <p>KAIST, Undergraduate student (2022~)</p>
                    <p>Double Major in</p>
                    <ul>
                      <li>Mathematical Science</li>
                      <li>Computer Science</li>
                    </ul>
                  </div>
                )}
                BFrontItem={() => (
                  <p>
                    291 Daehak-ro, Yuseong-gu, Daejeon, South Korea
                    <br />
                    Contact via: 0wankweon@kaist.ac.kr
                  </p>
                )}
                backColor="#01438f"
                backText="Korea Advanced Institute of Science and Technology"
              />
            ),
            (props: { className: string }) => (
              <Card
                className={props.className}
                logoSrc="/images/sparcs_logo.png"
                logoWhiteSrc="/images/sparcs_logo_white.png"
                FrontItem={() => (
                  <div className="card-text">
                    <p>SPARCS</p>
                    <p>권영완 (phenol)</p>
                    <ul>
                      <li>Developer</li>
                      <li>2022 Fall~</li>
                    </ul>
                  </div>
                )}
                BFrontItem={() => (
                  <p>
                    291 Daehak-ro, Yuseong-gu, Daejeon, South Korea
                    <br />
                    <a href="https://sparcs.org/">https://sparcs.org/</a>
                  </p>
                )}
                backColor="#eba12a"
                backText="System Programmers' Association for Researching Computer Systems"
              />
            ),
          ]}
        />
      </div>
    </div>
  );
};

export default HomePage;
