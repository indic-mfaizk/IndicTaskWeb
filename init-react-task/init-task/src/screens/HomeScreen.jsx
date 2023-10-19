import React from "react";
import heroLogo from "../assets/hero-logo.svg";
import heroText from "../assets/hero-text.png";
import heroTron from "../assets/hero-tron.png";
import card1Img1 from "../assets/card1-cont-2.svg";
import card1Img2 from "../assets/card2-cont-2.svg";
import card1Img3 from "../assets/card3-cont-2.svg";
import card1SlideImage1 from "../assets/slide1-cont-2.svg";
import card1SlideImage2 from "../assets/slide2-cont-2.svg";
import card1SlideImage3 from "../assets/slide3-cont-2.svg";
import cont31Image from "../assets/cont3-1.svg";
import cont32Image from "../assets/cont3-2.svg";
import cont34Image from "../assets/cont3-4.svg";
import prize from "../assets/prize.svg";
import telegram from "../assets/telegram.svg";
import twitter from "../assets/twitter.svg";
import listMedal1 from "../assets/list-medal1.svg";
import listMedal2 from "../assets/list-medal2.svg";
import listMedal3 from "../assets/list-medal3.svg";
import listMedal4 from "../assets/list-medal4.svg";
import listMedal5 from "../assets/list-medal5.svg";
import { useNavigate, useNavigation } from "react-router-dom";
const HomeScreen = () => {
  const nav = useNavigate();
  const listImageData = [
    {
      name: "UMAIR",
      img: listMedal1,
      val: "4.89",
    },
    {
      name: "ARVIND",
      img: listMedal2,
      val: "1.89",
    },
    {
      name: "FAIZAN",
      img: listMedal3,
      val: "3.89",
    },
    {
      name: "SHUBHAM",
      img: listMedal4,
      val: "1.89",
    },
    {
      name: "SWATI",
      img: listMedal5,
      val: "0.89",
    },
  ];
  return (
    <div>
      <div className="flex min-w-full bg-cover bg-hero-bg items-center justify-center flex-col text-white container bg-no-repeat">
        <div className="flex items-center justify-center gap-3 mb-8 mt-14 ">
          <img src={heroLogo} alt="" className="w-8 sm:w-14" />
          <h4 className="font-roboto_condensed text-white text-2xl sm:text-3xl font-bold">
            BUSTATRX
          </h4>
        </div>
        <img src={heroText} alt="" className="w-[200px] sm:w-[350px]" />
        <p className="font-roboto_condensed text-sm sm:text-lg mt-1">
          TRX GAMBLING SINCE 2014
        </p>
        <button
          className="flex min-w-[240px] sm:min-w-[296px] py-1 bg-[#EB7D2D] justify-center items-center rounded-md font-bebas_neue text-xl sm:text-2xl mt-6"
          onClick={() => nav("/manual")}
        >
          PLAY NOW
        </button>
        {/* card-container-start-here */}

        <div className="flex min-w-full min-h-[200px]  sm:mt-7 justify-center items-center gap-3 sm:gap-52 font-bold font-bebas_neue sm:flex-nowrap flex-wrap ">
          {/* card-start-here */}
          <div className="text-center flex justify-center items-center flex-col gap-3 min-h-[100px] min-w-[100px] ">
            <h4 className="text-xl font-bebas_neue">HOUSE EDGE</h4>
            <p>1 %</p>
          </div>
          {/* card-end-here */}
          {/* card-start-here */}
          <div className="text-center flex justify-center items-center flex-col gap-3 min-h-[100px] min-w-[100px] ">
            <h4 className="text-xl font-bebas_neue">WAGERED</h4>
            <div className="flex flex-row items-center justify-center ">
              <img src={heroTron} alt="" className="" />
              <p className="text-xl">2,200,000</p>
            </div>
          </div>
          {/* card-end-here */}
          {/* card-start-here */}
          <div className="text-center flex justify-center items-center flex-col gap-3 min-h-[100px] min-w-[100px] ">
            <h4 className="text-xl font-bebas_neue">BANKROLL</h4>
            <div className="flex flex-row items-center justify-center ">
              <img src={heroTron} alt="" className="" />
              <p className="text-xl">1,900</p>
            </div>
          </div>
          {/* card-end-here */}
        </div>
        {/* card-container-end-here */}
      </div>
      {/* main-container-2-start-here */}
      <div className="bg-[#1d1f23] flex items-center justify-center gap-8 flex-col lg:flex-row text-white sm:pt-16 ">
        {/* card-start-here */}
        <div className="h-[430px] w-80  flex flex-col items-center justify-center px-4 z-20 relative gap-3 bg-[#26272B] mt-9 sm:mt-0">
          <h1 className="font-bebas_neue text-3xl mt-5">SOCIAL & REAL TIME</h1>
          <img src={card1Img1} alt="" className="w-48 h-48" />
          <p className="text-xs text-center font-roboto_condensed z-20">
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document or a typeface without relying on
            meaningful content.
          </p>
          <img
            src={card1SlideImage1}
            alt=""
            className=" absolute z-10  w-80 bottom-0 hidden lg:flex"
          />
        </div>
        {/* card-end-here */}
        {/* card-start-here */}
        <div className="h-[430px] w-80 flex flex-col items-center justify-center px-4 z-20 relative gap-3 bg-[#26272B]">
          <h1 className="font-bebas_neue text-3xl mt-5">Provably Fair</h1>
          <img src={card1Img2} alt="" className="w-48 h-48 z-20" />
          <p className="text-xs text-center font-roboto_condensed z-20">
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document or a typeface without relying on
            meaningful content.
          </p>
          <img
            src={card1SlideImage2}
            alt=""
            className=" absolute z-10  w-80 bottom-0 hidden lg:flex"
          />
        </div>
        {/* card-end-here */}
        {/* card-start-here */}
        <div className="h-[430px] w-80  flex flex-col items-center justify-center px-4 z-20 relative gap-3 bg-[#26272B]">
          <h1 className="font-bebas_neue text-3xl mt-5">Be the Bankroll</h1>
          <img src={card1Img3} alt="" className="w-48 h-48 z-20" />
          <p className="text-xs text-center font-roboto_condensed z-20">
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document or a typeface without relying on
            meaningful content.
          </p>
          <img
            src={card1SlideImage3}
            alt=""
            className=" absolute z-10  w-[235px] left-0 bottom-0 hidden lg:flex"
          />
        </div>
        {/* card-end-here */}
      </div>
      {/* main-container-2-end-here */}
      {/* main-container-3-start-here */}
      <div className="bg-[#1d1f23] flex flex-col justify-center items-center lg:flex-row pt-7 sm:pt-14 gap-14">
        {/* cont-1-start */}
        <div className="bg-[#1d1f23] w-80 lg:w-1/2 flex flex-col items-end justify-end gap-7 sm:gap-3 lg:mt-36 ">
          {/* card-1-start */}
          <div className="bg-[#27292d] h-[380px] lg:w-[480px] text-white flex  flex-col items-start justify-center px-5 gap-3">
            <img src={cont31Image} alt="" className="w-16 h-16" />
            <h1 className="font-roboto_condensed text-2xl font-bold">
              HOW DOES IT WORK
            </h1>
            <p className="font-roboto_condensed text-xs leading-5 capitalize ">
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content.Lorem ipsum is a placeholder text commonly used
              to demonstrate the visual form of a document or a typeface without
              relying on meaningful content.Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content.
            </p>
            <a href="#" className="text-[#EB7D2D] underline mt-4 text-xs">
              Learn more
            </a>
          </div>
          {/* card-1-end */}
          {/* card-2-start */}
          <div className="bg-[#27292d] h-[380px] lg:w-[480px] text-white flex  flex-col items-start justify-center px-5 gap-3">
            <img src={cont32Image} alt="" className="w-16 h-16" />
            <h1 className="font-roboto_condensed text-2xl font-bold">
              ENHANCED PRIVACY
            </h1>
            <p className="font-roboto_condensed text-xs capitalize">
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content.Lorem ipsum is a placeholder text commonly used
              to demonstrate the visual form of a document or a typeface without
              relying on meaningful content.Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relyinsm:w-[60%]g on meaningful content.
            </p>
            <a href="#" className="text-[#EB7D2D] underline mt-4 text-xs">
              Learn more
            </a>
          </div>
          {/* card-2-end */}
        </div>
        {/* cont-1-end */}
        {/* cont-2-start */}
        <div className="bg-[#1d1f23] w-80 lg:w-1/2 flex flex-col gap-7 sm:gap-5 sm:mb-20">
          {/* card-1-start */}
          <div className="bg-[#27292d] h-[380px] lg:w-[480px] text-white flex  flex-col items-start justify-center px-5 gap-3">
            <img src={heroLogo} alt="" className="w-16 h-16" />
            <h1 className="font-roboto_condensed text-2xl font-bold capitalize">
              WHAT'S BUSTATRX ?
            </h1>
            <p className="font-roboto_condensed text-xs capitalize">
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content.Lorem ipsum is a placeholder text commonly used
              to demonstrate the visual form of a document or a typeface without
              relying on meaningful content.Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content.
            </p>
            <a href="#" className="text-[#EB7D2D] underline mt-4 text-xs">
              Learn more
            </a>
          </div>
          {/* card-1-end */}
          {/* card-2-start */}
          <div className="bg-[#27292d] h-[380px] lg:w-[480px] text-white flex  flex-col items-start justify-center px-5 gap-3">
            <img src={cont34Image} alt="" className="w-16 h-16" />
            <h1 className="font-roboto_condensed text-2xl font-bold capitalize">
              ADVANCED AUTOBET.
            </h1>
            <p className="font-roboto_condensed text-xs capitalize">
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content.Lorem ipsum is a placeholder text commonly used
              to demonstrate the visual form of a document or a typeface without
              relying on meaningful content.Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content.
            </p>
            <a href="#" className="text-[#EB7D2D] underline mt-4 text-xs">
              Learn more
            </a>
          </div>
          {/* card-2-end */}
        </div>
        {/* cont-2-end */}
      </div>
      {/* main-container-3-end-here */}
      {/* main-container-4-start-here */}
      <div className="bg-[#1d1f23] min-w-full flex items-center justify-center text-white">
        <div className="bg-[#27292d] lg:bg-bottom-bg  w-80  lg:w-[1015px] lg:h-48 my-10 bg-no-repeat flex items-center justify-between lg:flex-row flex-col">
          <img src={prize} alt="" className="w-56 lg:w-auto mb-4 lg:mb-0" />
          <div className="lg:w-[65%] lg:h-[75%] flex flex-col gap-4 p-4">
            <div className=" flex flex-col lg:flex-row lg:gap-10 justify-start items-center ">
              <h4 className="font-bebas_neue mt-2 text-lg">BIGGEST WINNER</h4>
              <div className="flex flex-row items-center justify-center gap-2">
                <img src={heroLogo} alt="" className="w-9" />
                <h4 className="font-roboto_condensed text-lg">BUSTATRX</h4>
              </div>
            </div>
            <h2 className="capitalize text-sm font-roboto_condensed">
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content. Lorem ipsum is a placeholder text commonly
              used to demonstrate the visual form of a document.
            </h2>
          </div>
        </div>
      </div>
      {/* main-container-4-end-here */}
      {/* main-list-container-5-start-here */}
      <div className="bg-[#1d1f23] min-w-full h-96 flex items-start justify-center">
        <table className=" w-80  lg:w-[1015px]  table-fixed text-center border-separate border-spacing-y-2 text-white bg-[#26272b] p-3 shadow-md rounded-md">
          <tr className="">
            <th> </th>
            <th className="font-roboto_condensed">PLAYER</th>
            <th className="relative right-8 font-roboto_condensed float-right">
              PROFIT
            </th>
          </tr>
          {listImageData.map((e, i) => (
            <tr className="bg-list-bg relative h-12 p-9" key={i}>
              <td className="">
                <img
                  src={e.img}
                  alt=""
                  className="w-12 absolute top-1 left-4"
                />
              </td>
              <td className="relative  text-[#1BD8F2]  w-28">{e.name}</td>
              <td className="relative right-8 top-2 flex items-center justify-end">
                <img src={heroTron} alt="" className="w-5" />
                <h4>{e.val}</h4>
              </td>
            </tr>
          ))}
        </table>
      </div>
      {/* main-list-container-5-end-here */}

      {/* pre-footer-start-here */}
      <div className="min-w-full h-52 bg-[#1d1f23] flex items-center justify-center flex-col text-white p-7 gap-3 sm:p-0 sm:gap-0 text-center">
        <h1 className="font-bebas_neue text-3xl">LEARN MORE</h1>
        <p className="text-sm font-roboto_condensed">
          If you still have questions or simply want to learn more you can check
        </p>
        <p className="text-sm font-roboto_condensed">
          {" "}
          Our <span className="underline cursor-pointer">Help Docs</span> or our{" "}
          <span className="text-[#EB7D2D] ">BUSTATRX</span>
        </p>
        <button
          className="flex min-w-[240px] sm:min-w-[296px] py-1 bg-[#EB7D2D] justify-center items-center rounded-md font-bebas_neue text-xl sm:text-2xl mt-6"
          onClick={() => nav("/manual")}
        >
          PLAY NOW
        </button>
      </div>
      {/* pre-footer-end-here */}
      {/* footer-start-here */}
      <footer className="h-72 min-w-full bg-[#26272b] flex items-center justify-center flex-col text-white gap-8">
        <div className="flex flex-row items-center justify-center gap-2 text-white ">
          <img src={heroLogo} alt="" className="w-10" />
          <h3 className="capitalize font-roboto_condensed font-extrabold text-xl">
            BUSTATRX
          </h3>
        </div>
        <div>
          <button className="border-r px-4 sm:px-7 font-roboto_condensed text-base">
            Backtesting
          </button>
          <button className="border-r px-4 sm:px-7  font-roboto_condensed text-base">
            Leaderboard
          </button>
          <button className="px-4 sm:px-7 font-roboto_condensed text-base">
            Term of Service
          </button>
        </div>
        <div className="flex flex-row gap-3 items-center justify-center ">
          <img src={twitter} alt="" className="w-9" />
          <img src={telegram} alt="" className="w-9" />
        </div>
      </footer>
      {/* footer-end-here */}
    </div>
  );
};

export default HomeScreen;
