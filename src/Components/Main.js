import React from "react";
import "../../src/Styles/Header/Header.css";

const Main = () => {
  return (
    <div>
      <div className="w-screen h-96 bg-[#fcf5eb]  flex justify-center items-center">
        <div className="MainTextContainer">
          <h2 className="text-black text-center text-[5vh]">
            Благодаря возможности конфиденциально писать и звонить вы можете
            оставаться собой, общаться свободно и быть на связи с самыми
            дорогими людьми в вашей жизни, где бы они ни находились.
          </h2>
        </div>
      </div>
      <div class="w-screen h-screen bg-[#fcf5eb] flex justify-around items-center">
        <div className="main-text">
          <h2 class="text-black text-center text-[5vh]">
            Аудио- и видеозвонки помогут вам не пропустить ни одного важного
            момента
          </h2>
          <p>
            И при групповом звонке одноклассникам, и при коротком созвоне с
            мамой аудио- и видеозвонки создадут эффект присутствия: как будто
            собеседники находятся в одной комнате с вами.
          </p>
        </div>
        <div className="main-img"></div>
      </div>
    </div>
  );
};

export default Main;
