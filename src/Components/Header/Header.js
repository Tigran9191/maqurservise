import React from "react";
import "../../Styles/Header/Header.css";
// import header1 from "../../Img/Header/header.png";

const Header = () => {
  return (
    <div>
      <div class="h-15 w-screen bg-[#fcf5eb] flex algin items-center fixed backdrop-opacity-60  bg-[#fcf5eb]/50 ">
        <div className="h-12 w-screen flex">
          <div class="h-12 w-1/5 flex algin items-center justify-center">
            LOGO
          </div>
          <div class="h-12 w-3/5 flex justify-around algin items-center">
            <a href="#">funkcion</a>
            <a>komfim</a>
            <a>call centr</a>
            <a>vlog</a>
            <a>company</a>
          </div>
          <div class="h-12 w-1/5 flex justify-around algin items-center">
            <a>WEB</a>
            <button class="border border-solid border-gray-800 bg-green-500 m-1 mx-10 rounded-full">
              download
            </button>
          </div>
        </div>
      </div>
      <div class="w-screen h-screen bg-[#fcf5eb]  flex justify-center items-center">
        <div className="tik">
          <div className="textContainer">
            <div className="CildernContainer">
              <h1>Общайтесь безопасно</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
