import { useContext, useState } from "react";
import { Tab } from "@headlessui/react";
import heroLogo from "../../assets/hero-logo.svg";
import { RiListSettingsFill } from "react-icons/ri";
import { AiFillSetting, AiFillTrophy, AiTwotoneBank } from "react-icons/ai";
import {
  BsCodeSlash,
  BsFillPersonFill,
  BsFillSendFill,
  BsPerson,
  BsPersonFill,
} from "react-icons/bs";
import { GiHamburgerMenu, GiHammerBreak } from "react-icons/gi";
import { ImStatsBars, ImStatsDots } from "react-icons/im";
import { BiRectangle, BiSolidHelpCircle } from "react-icons/bi";
import heroTron from "./../../assets/hero-tron.png";
import { IoCaretUpSharp, IoCaretDownSharp } from "react-icons/io5";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);
import graphHead from "./../../assets/graph-head.svg";
import { AuthContext } from "../../context/authModalContext";
import { AuthModalConst } from "../../const/AuthModalConst";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ManualMainScreen = () => {
  let [categories] = useState(["Manual", "Auto"]);
  let [Auto] = useState(["Control", "Leaderboard"]);
  let [BottomPanel] = useState(["Chat", "My Bets", "Leaderboard"]);
  const { curentAuthScreen, setCurentAuthScreen } = useContext(AuthContext);
  const [isNavVisisble, setIsNavVisisble] = useState(true);
  const options = {
    responsive: true,
    tension: 0.5,
    // linetension: 0.8,
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 0,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            return value + "x";
          },
        },
      },
    },
  };
  const labels = ["1s", "2s", "3s", "4s", "5s", "6s"];

  const data = {
    labels,
    datasets: [
      {
        data: [0, 0.7, 2, 4, 7],
        // data: [1.0, 1.2, 1.3, 1.5, 1.7, 1.8],
        borderColor: "#ffffff",
        backgroundColor: "#25262a",
        fill: {
          target: "origin", // 3. Set the fill options
          above: "#eb7d2d",
        },
      },
    ],
  };

  return (
    <>
      <div className="min-h-screen min-w-full bg-[#1d1f23] xl:static flex flex-col items-center">
        <div
          className={`transition-all ease-in-out  delay-300 ${
            isNavVisisble ? "top-[-1000px]" : "top-0"
          } xl:hidden flex container mx-auto backdrop-blur fixed h-72 z-20 rounded-2xl  duration-300`}
        >
          <ul className="flex flex-col gap-2 h-96 min-w-full items-center justify-center rounded-2xl bg-[#33343a93] w-[90%] text-white ">
            <button
              type="button"
              className="flex xl:hidden self-start ml-4 mb-3"
            >
              <GiHamburgerMenu
                size={30}
                onClick={() => setIsNavVisisble((e) => !e)}
              />
            </button>
            <button className="flex items-center justify-center gap-2 bg-[#26272a]  hover:bg-[#2d2e30] transition-all duration-200 delay-200 w-[90%] px-2 py-2 rounded-md">
              <RiListSettingsFill />
              <h1 className="font-roboto_condensed font-bold">HOME</h1>
            </button>
            <button className="flex items-center justify-center gap-2 bg-[#26272a] w-[90%] hover:bg-[#2d2e30] transition-all duration-200 delay-200  px-2 py-2 rounded-md">
              <AiTwotoneBank />
              <h1 className="font-roboto_condensed font-bold">BANKROLL</h1>
            </button>
            <button className="flex items-center justify-center gap-2 bg-[#26272a] w-[90%] hover:bg-[#2d2e30] transition-all duration-200 delay-200  px-2 py-2 rounded-md">
              <BsCodeSlash />
              <h1 className="font-roboto_condensed font-bold">BACKTESTING</h1>
            </button>
            <button className="flex items-center justify-center gap-2 bg-[#26272a] w-[90%] hover:bg-[#2d2e30] transition-all duration-200 delay-200  px-2 py-2 rounded-md">
              <ImStatsDots />
              <h1 className="font-roboto_condensed font-bold">STATS</h1>
            </button>
            <button className="flex items-center justify-center gap-2 bg-[#26272a] w-[90%] hover:bg-[#2d2e30] transition-all duration-200 delay-200  px-2 py-2 rounded-md">
              <AiFillTrophy />
              <h1 className="font-roboto_condensed font-bold">LEADERBOARD</h1>
            </button>
            <button className="flex items-center justify-center gap-2 bg-[#26272a] w-[90%] hover:bg-[#2d2e30] transition-all duration-200 delay-200  px-2 py-2 rounded-md">
              <BiSolidHelpCircle />
              <h1 className="font-roboto_condensed font-bold">HELP</h1>
            </button>
          </ul>
        </div>
        <header className="container mx-auto text-white bg-[#1d1f23] flex items-center justify-between p-2">
          <button type="button" className="flex xl:hidden ">
            <GiHamburgerMenu
              size={30}
              onClick={() => setIsNavVisisble((e) => !e)}
            />
          </button>
          <div className="flex items-center justify-center gap-2 ">
            <img src={heroLogo} alt="" className="w-8 sm:w-10" />
            <h4 className="font-roboto_condensed text-lg sm:text-xl font-bold">
              BUSTATRX
            </h4>
          </div>
          <div>
            <button
              className="bg-[#1d1f23] text-xs px-4 py-2 sm:text-sm font-roboto_condensed font-bold sm:px-6 sm:py-2 rounded-md text-center"
              onClick={() => setCurentAuthScreen(AuthModalConst.SIGNIN)}
            >
              LOGIN
            </button>
            <button
              className="bg-[#eb7d2d] text-xs px-4 py-2 sm:text-sm font-roboto_condensed font-bold sm:px-6 sm:py-2 rounded-md text-center"
              onClick={() => setCurentAuthScreen(AuthModalConst.SIGNUP)}
            >
              REGISTER
            </button>
          </div>
        </header>
        <main className="container mx-auto flex items-start xl:justify-between justify-center">
          <aside className="min-w-[200px] 2xl:min-w-[280px] xl:flex hidden min-h-[980px]  bg-[#26272a] text-white self-start ">
            <ul className="flex flex-col gap-2 h-96 min-w-full items-center justify-start bg-[#26272a] pt-3 ">
              <button className="flex items-center justify-start gap-2 bg-[#26272a]  hover:bg-[#2d2e30] transition-all duration-200 delay-200 w-[90%] px-2 py-2 rounded-md">
                <RiListSettingsFill />
                <h1 className="font-roboto_condensed font-bold">HOME</h1>
              </button>
              <button className="flex items-center justify-start gap-2 bg-[#26272a] w-[90%] hover:bg-[#2d2e30] transition-all duration-200 delay-200  px-2 py-2 rounded-md">
                <AiTwotoneBank />
                <h1 className="font-roboto_condensed font-bold">BANKROLL</h1>
              </button>
              <button className="flex items-center justify-start gap-2 bg-[#26272a] w-[90%] hover:bg-[#2d2e30] transition-all duration-200 delay-200  px-2 py-2 rounded-md">
                <BsCodeSlash />
                <h1 className="font-roboto_condensed font-bold">BACKTESTING</h1>
              </button>
              <button className="flex items-center justify-start gap-2 bg-[#26272a] w-[90%] hover:bg-[#2d2e30] transition-all duration-200 delay-200  px-2 py-2 rounded-md">
                <ImStatsDots />
                <h1 className="font-roboto_condensed font-bold">STATS</h1>
              </button>
              <button className="flex items-center justify-start gap-2 bg-[#26272a] w-[90%] hover:bg-[#2d2e30] transition-all duration-200 delay-200  px-2 py-2 rounded-md">
                <AiFillTrophy />
                <h1 className="font-roboto_condensed font-bold">LEADERBOARD</h1>
              </button>
              <button className="flex items-center justify-start gap-2 bg-[#26272a] w-[90%] hover:bg-[#2d2e30] transition-all duration-200 delay-200  px-2 py-2 rounded-md">
                <BiSolidHelpCircle />
                <h1 className="font-roboto_condensed font-bold">HELP</h1>
              </button>
            </ul>
          </aside>
          <div className="min-w-[80%] min-h-max lg:min-h-[980px]  bg-[#1d1f23] flex flex-col justify-between items-center gap-3">
            {/* middle-div-start */}
            <div className="bg-[#1d1f23] min-w-full flex flex-col-reverse lg:flex-row sm:gap-3 ">
              {/* left-start */}
              <div className="bg-[#26272b] flex items-center justify-center lg:static lg:w-80 pt-2 px-1">
                <div className="w-full max-w-md  sm:px-0">
                  <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-xl bg-[#1d1f23] p-1">
                      {categories.map((category) => (
                        <Tab
                          key={category}
                          className={({ selected }) =>
                            classNames(
                              "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white",
                              "ring-transparent ring-opacity-60 ring-offset-2 ring-offset-transparent focus:outline-none focus:ring-2",
                              selected
                                ? "bg-[#484949] shadow"
                                : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                            )
                          }
                        >
                          {category}
                        </Tab>
                      ))}
                    </Tab.List>
                    <Tab.Panels className="mt-2 ">
                      <Tab.Panel
                        className={classNames(
                          "rounded-xl bg-[#26272b] p-3",
                          "ring-transparent ring-opacity-60 ring-offset-2 ring-offset-transparent focus:outline-none focus:ring-2"
                        )}
                      >
                        <form className="flex flex-col gap-3">
                          <label className="relative flex flex-col  text-white ">
                            <div className="bg-[#26272b] flex justify-between items-end font-roboto_condensed text-sm ">
                              <h4 className="opacity-40">Bet Amount</h4>
                              <h4 className="opacity-40">$0.00</h4>
                            </div>
                            <div className="flex flex-row items-center justify-between p-1 bg-[#2f3034] rounded-lg">
                              <div className="bg-[#1d1f23] flex flex-row items-center justify-between rounded-r gap-0.5 ">
                                <input
                                  type="text"
                                  className="border-none rounded h-9  lg:w-48 p-1 flex-grow bg-[#1d1f23]"
                                ></input>
                                <img
                                  src={heroTron}
                                  className="h-6 w-6 bg-[#1d1f23] "
                                />
                              </div>
                              <div className="flex justify-center items-center bg-[#2f3034] flex-grow gap-2">
                                <h5 className="text-sm">1/2</h5>
                                <div className="h-5 w-0.5 bg-[#656565]"></div>
                                <h5 className="text-sm">2x</h5>
                              </div>
                            </div>
                          </label>
                          {/* item-2-start */}
                          <label className="relative flex flex-col  text-white ">
                            <div className="bg-[#26272b] flex justify-between items-end font-roboto_condensed text-sm ">
                              <h4 className="opacity-40">Cashout At</h4>
                            </div>
                            <div className="flex flex-row items-center justify-between p-1 bg-[#2f3034] rounded-lg">
                              <div className="bg-[#1d1f23] flex flex-row items-center justify-between rounded-r gap-0.5">
                                <input
                                  type="text"
                                  className="border-none rounded h-9  lg:w-48 p-1 flex-grow bg-[#1d1f23]"
                                ></input>
                                <img
                                  src={heroTron}
                                  className="h-6 w-6 bg-[#1d1f23] "
                                />
                              </div>
                              <div className="flex justify-center items-center bg-[#2f3034] flex-grow gap-3">
                                <IoCaretUpSharp className="opacity-50" />
                                <div className="h-5 w-0.5 bg-[#656565]"></div>

                                <IoCaretDownSharp className="opacity-50" />
                              </div>
                            </div>
                          </label>
                          {/* item-2-end */}
                          {/* item-3-start */}
                          <label className="relative flex flex-col  text-white ">
                            <div className="bg-[#26272b] flex justify-between items-end font-roboto_condensed text-sm ">
                              <h4 className="opacity-40">Profit on Win</h4>
                              <h4 className="opacity-40">$0.00</h4>
                            </div>
                            <div className="flex flex-row items-center justify-between p-1 bg-[#2f3034] rounded-lg">
                              <div className="bg-[#1d1f23] flex flex-row flex-grow items-center justify-between rounded-r gap-0.5">
                                <input
                                  type="text"
                                  className="border-none rounded h-9 p-1 flex-grow bg-[#1d1f23]"
                                ></input>
                                <img
                                  src={heroTron}
                                  className="h-6 w-6 bg-[#1d1f23] "
                                />
                              </div>
                            </div>
                          </label>
                          {/* item-3-end */}
                          <button className="bg-[#eb7d2d] text-white min-w-full py-2 rounded-md text-base font-roboto_condensed">
                            BET
                          </button>
                        </form>
                        <ul className="flex flex-col text-white gap-2 mt-3">
                          <li className="flex flex-row gap-3 font-roboto_condensed font-bold text-sm">
                            <h1>Target Profit:</h1>
                            <h5 className="text-[#13EF00]">2 TRX</h5>
                          </li>
                          <li className="flex flex-row gap-3 font-roboto_condensed font-bold text-sm">
                            <h1>Win Chance:</h1>
                            <h5 className="text-[#13EF00]">48.6%</h5>
                          </li>
                        </ul>
                        <div className="flex flex-grow justify-between items-center mt-2 mb-1">
                          <h1 className="flex items-center justify-center text-white">
                            <BsFillPersonFill />{" "}
                            <span className="text-xs font-roboto_condensed">
                              125
                            </span>
                          </h1>
                          <h1 className="flex flex-row text-white items-center justify-center">
                            <img src={heroTron} alt="" className="h-5 w-5" />{" "}
                            <span className="text-xs">0.45395363</span>
                          </h1>
                        </div>
                        <div
                          className="flex flex-col  bg-[#1d1f23] w-full h-40 font-roboto_condensed p-1 overflow-y-scroll
                        no-scrollbar py-1"
                        >
                          {Array(6)
                            .fill(1)
                            .map((e, i) => (
                              <li
                                className="flex flex-row text-white bg-[#1d1f23] flex-grow h-7 justify-between items-center"
                                key={i}
                              >
                                <div className="flex flex-row text-base opacity-60 items-center gap-1">
                                  <BsFillPersonFill /> <span>Hidden</span>
                                </div>
                                <h4 className=" text-base">1.41x</h4>
                                <div className=" flex flex-row text-base gap-1">
                                  <img
                                    src={heroTron}
                                    alt=""
                                    className="h-6 w-6"
                                  />
                                  <span>287.524525</span>
                                </div>
                              </li>
                            ))}
                        </div>
                      </Tab.Panel>
                      <Tab.Panel
                        className={classNames(
                          "rounded-xl bg-[#26272b] p-3",
                          "ring-transparent ring-opacity-60 ring-offset-2 ring-offset-transparent focus:outline-none focus:ring-2"
                        )}
                      >
                        <div className="w-full max-w-md sm:px-0">
                          <Tab.Group>
                            <Tab.List className="flex space-x-1 bg-[#1d1f23] p-1">
                              {Auto.map((category) => (
                                <Tab
                                  key={category}
                                  className={({ selected }) =>
                                    classNames(
                                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white",
                                      "ring-transparent ring-opacity-60 ring-offset-2 ring-offset-transparent focus:outline-none focus:ring-2",
                                      selected
                                        ? "bg-[#484949] shadow"
                                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                                    )
                                  }
                                >
                                  {category}
                                </Tab>
                              ))}
                            </Tab.List>
                            <Tab.Panels className="mt-2">
                              <Tab.Panel>
                                <form className="flex flex-col gap-3">
                                  <label className="relative flex flex-col  text-white ">
                                    <div className="bg-[#26272b] flex justify-between items-end font-roboto_condensed text-sm ">
                                      <h4 className="opacity-40">Bet Amount</h4>
                                      <h4 className="opacity-40">$0.00</h4>
                                    </div>
                                    <div className="flex flex-row items-center justify-between p-1 bg-[#2f3034] rounded-lg">
                                      <div className="bg-[#1d1f23] flex flex-row items-center justify-between rounded-r gap-0.5">
                                        <input
                                          type="text"
                                          className="border-none rounded h-9  lg:w-48 p-1 flex-grow bg-[#1d1f23]"
                                        ></input>
                                        <img
                                          src={heroTron}
                                          className="h-6 w-6 bg-[#1d1f23] "
                                        />
                                      </div>
                                      <div className="flex justify-center items-center bg-[#2f3034] flex-grow gap-3">
                                        <h5 className="text-sm">1/2</h5>
                                        <div className="h-5 w-0.5 bg-[#656565]"></div>
                                        <h5 className="text-sm">2x</h5>
                                      </div>
                                    </div>
                                  </label>

                                  {/* item-2-start */}
                                  <div className="flex flex-col justify-between items-center text-white ">
                                    <div className="bg-[#26272b] w-full flex justify-between items-end font-roboto_condensed text-sm ">
                                      <h4 className="opacity-40">Cashout At</h4>
                                      <h4 className="opacity-40 mr-3">
                                        Number of Bets
                                      </h4>
                                    </div>
                                    <div className="flex  min-w-full items-center justify-between">
                                      <div className="flex flex-row items-center justify-between p-1 bg-[#2f3034]  rounded-lg">
                                        <input
                                          type="text"
                                          className="border-none rounded h-9 w-24 p-1 bg-[#1d1f23]"
                                        />

                                        <div className="flex justify-center items-center bg-[#2f3034] flex-grow gap-2 px-3">
                                          <IoCaretUpSharp className="opacity-50" />
                                          <div className="h-5 w-0.5 bg-[#656565]"></div>

                                          <IoCaretDownSharp className="opacity-50" />
                                        </div>
                                      </div>

                                      <div className="flex flex-row items-center justify-between  bg-[#2f3034] flex-grow p-1 rounded-lg ml-4">
                                        <input
                                          type="text"
                                          className="border-none rounded h-9 w-full  bg-[#1d1f23]"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  {/* item-2-end */}

                                  <label className="relative flex flex-col  text-white ">
                                    <div className="bg-[#26272b] flex justify-between items-end font-roboto_condensed text-sm ">
                                      <h4 className="opacity-40">On Win</h4>
                                      <h4 className="opacity-40">$0.00</h4>
                                    </div>
                                    <div className="flex flex-row items-center justify-between p-1 bg-[#2f3034] rounded-lg font-roboto_condensed gap-2 relative">
                                      <button
                                        className="bg-[#1d1f23] px-3 py-2 rounded"
                                        type="button"
                                      >
                                        Reset
                                      </button>
                                      <button
                                        className="bg-[#1d1f23] px-3 py-2 min-w-fit rounded"
                                        type="button"
                                      >
                                        Increased By
                                      </button>
                                      <input
                                        type="text"
                                        className="border-none rounded h-10  bg-[#1d1f23] w-full"
                                      />
                                      <h1 className="absolute right-3 bg-[#1d1f23]">
                                        {" "}
                                        %
                                      </h1>
                                    </div>
                                  </label>
                                  <label className="relative flex flex-col  text-white ">
                                    <div className="bg-[#26272b] flex justify-between items-end font-roboto_condensed text-sm ">
                                      <h4 className="opacity-40">On Loss</h4>
                                      <h4 className="opacity-40">$0.00</h4>
                                    </div>
                                    <div className="flex flex-row items-center justify-between p-1 bg-[#2f3034] rounded-lg font-roboto_condensed gap-2 relative">
                                      <button
                                        className="bg-[#1d1f23] px-3 py-2 rounded"
                                        type="button"
                                      >
                                        Reset
                                      </button>
                                      <button
                                        className="bg-[#1d1f23] px-3 py-2 min-w-fit rounded"
                                        type="button"
                                      >
                                        Increased By
                                      </button>
                                      <input
                                        type="text"
                                        className="border-none rounded h-10  bg-[#1d1f23] w-full"
                                      />
                                      <h1 className="absolute right-3 bg-[#1d1f23]">
                                        {" "}
                                        %
                                      </h1>
                                    </div>
                                  </label>
                                  <label className="relative flex flex-col  text-white ">
                                    <div className="bg-[#26272b] flex justify-between items-end font-roboto_condensed text-sm ">
                                      <h4 className="opacity-40">
                                        Stop on Profit
                                      </h4>
                                      <h4 className="opacity-40">$0.00</h4>
                                    </div>
                                    <div className="flex flex-row items-center justify-between p-1 bg-[#2f3034] rounded-lg">
                                      <div className="bg-[#1d1f23] flex flex-grow flex-row items-center justify-between rounded-r gap-0.5">
                                        <input
                                          type="text"
                                          className="border-none rounded h-9  lg:w-48 p-1 flex-grow bg-[#1d1f23]"
                                        ></input>
                                        <img
                                          src={heroTron}
                                          className="h-6 w-6 bg-[#1d1f23] "
                                        />
                                      </div>
                                    </div>
                                  </label>
                                  <label className="relative flex flex-col  text-white ">
                                    <div className="bg-[#26272b] flex justify-between items-end font-roboto_condensed text-sm ">
                                      <h4 className="opacity-40">
                                        Stop on Loss
                                      </h4>
                                      <h4 className="opacity-40">$0.00</h4>
                                    </div>
                                    <div className="flex flex-row items-center justify-between p-1 bg-[#2f3034] rounded-lg">
                                      <div className="bg-[#1d1f23] flex flex-grow flex-row items-center justify-between rounded-r gap-0.5">
                                        <input
                                          type="text"
                                          className="border-none rounded h-9  lg:w-48 p-1 flex-grow bg-[#1d1f23]"
                                        ></input>
                                        <img
                                          src={heroTron}
                                          className="h-6 w-6 bg-[#1d1f23] "
                                        />
                                      </div>
                                    </div>
                                  </label>
                                  <label className="relative flex flex-col  text-white ">
                                    <div className="bg-[#26272b] flex justify-between items-end font-roboto_condensed text-sm ">
                                      <h4 className="opacity-40">
                                        Profit on win
                                      </h4>
                                      <h4 className="opacity-40">$0.00</h4>
                                    </div>
                                    <div className="flex flex-row items-center justify-between p-1 bg-[#2f3034] rounded-lg">
                                      <div className="bg-[#1d1f23] flex flex-grow flex-row items-center justify-between rounded-r gap-0.5">
                                        <input
                                          type="text"
                                          className="border-none rounded h-9  lg:w-48 p-1 flex-grow bg-[#1d1f23]"
                                        ></input>
                                        <img
                                          src={heroTron}
                                          className="h-6 w-6 bg-[#1d1f23] "
                                        />
                                      </div>
                                    </div>
                                  </label>
                                  <button
                                    type="button"
                                    className="bg-[#eb7d2d] min-w-full h-9 font-roboto_condensed font-bold text-white rounded text-base"
                                  >
                                    START AUTOBET
                                  </button>
                                </form>
                              </Tab.Panel>
                              <Tab.Panel>
                                <form>
                                  <div className="text-white flex flex-row items-center justify-between">
                                    <h1 className="flex items-center justify-center text-sm">
                                      <BsFillPersonFill />
                                      <span>125</span>
                                    </h1>
                                    <h1 className="flex items-center justify-center text-sm my-2">
                                      <img src={heroTron} alt="" />
                                      <span>0.45395363</span>
                                    </h1>
                                  </div>

                                  <div className="flex flex-col  bg-[#1d1f23] w-full h-72 font-roboto_condensed overflow-y-scroll py-1 px-2 gap-2">
                                    {Array(20)
                                      .fill(1)
                                      .map((e, i) => (
                                        <li
                                          className="flex flex-row text-white  h-5 justify-between items-center "
                                          key={i}
                                        >
                                          <div className="flex flex-row text-base opacity-60 items-center gap-1">
                                            <BsFillPersonFill />{" "}
                                            <span>Hidden</span>
                                          </div>
                                          <h4 className=" text-base">1.41x</h4>
                                          <div className=" flex flex-row text-base gap-1">
                                            <img
                                              src={heroTron}
                                              alt=""
                                              className="h-6 w-6"
                                            />
                                            <span>287.524525</span>
                                          </div>
                                        </li>
                                      ))}
                                  </div>
                                  <label className="relative flex flex-col  text-white my-2">
                                    <div className="bg-[#26272b] flex justify-between items-end font-roboto_condensed text-sm ">
                                      <h4 className="opacity-40">
                                        Profit on Win
                                      </h4>
                                      <h4 className="opacity-40">$0.00</h4>
                                    </div>
                                    <div className="flex flex-row items-center justify-between p-1 bg-[#2f3034] rounded-lg">
                                      <div className="bg-[#1d1f23] flex flex-grow flex-row items-center justify-between rounded-r gap-0.5">
                                        <input
                                          type="text"
                                          className="border-none rounded h-9  lg:w-48 p-1 flex-grow bg-[#1d1f23]"
                                        ></input>
                                        <img
                                          src={heroTron}
                                          className="h-6 w-6 bg-[#1d1f23] "
                                        />
                                      </div>
                                    </div>
                                  </label>
                                  <button
                                    type="button"
                                    className="min-w-full bg-[#eb7d2d] h-10 rounded text-white font-roboto_condensed bold mt-2"
                                  >
                                    START AUTOBET
                                  </button>
                                </form>
                              </Tab.Panel>
                            </Tab.Panels>
                          </Tab.Group>
                        </div>
                      </Tab.Panel>
                    </Tab.Panels>
                  </Tab.Group>
                </div>
              </div>
              {/* left-end */}
              <div className="lg:hidden flex text-white p-3 bg-[#1d1f23] mt-1">
                <div className="lg:hidden flex flex-row items-center justify-center gap-2 flex-wrap">
                  <div
                    className="self-start flex flex-col justify-center items-center font-roboto_condensed font-bold
                  order-[0]  w-full "
                  >
                    <h1>Total 4s</h1>
                    <h4 className="flex items-center justify-center gap-2 text-xs">
                      Network status{" "}
                      <span className="h-4 w-4 rounded-full bg-green-500 block"></span>{" "}
                    </h4>
                  </div>
                  <div className=" flex flex-row bg-[#44454a] h-10 sm:w-48 p-2 sm:p-0 text-sm items-center justify-center gap-1 rounded-full  ">
                    <BsPersonFill size={20} className="opacity-40" />
                    <h3 className="opacity-50 text-xs">Hidden</h3>
                    <img src={heroTron} alt="" className="h-4 w-4" />
                    <h5>287,524525</h5>
                  </div>
                  <div className=" flex flex-row bg-[#44454a] h-10 w-40 text-sm items-center justify-center gap-1 rounded-full  ">
                    <BsPersonFill size={20} className="opacity-40" />
                    <h3 className="opacity-50 text-xs">Hidden</h3>
                    <img src={heroTron} alt="" className="h-4 w-4" />
                    <h5>287,524</h5>
                  </div>
                  <div className=" flex flex-row bg-[#44454a] h-10 sm:w-48 p-2 sm:p-0 text-sm items-center justify-center gap-1 rounded-full  ">
                    <BsPersonFill size={20} className="opacity-40" />
                    <h3 className="opacity-50 text-xs">Hidden</h3>
                    <img src={heroTron} alt="" className="h-4 w-4" />
                    <h5>287,524525</h5>
                  </div>
                  <div className=" flex flex-row bg-[#44454a] h-10 w-40 text-sm items-center justify-center gap-1 rounded-full  ">
                    <BsPersonFill size={20} className="opacity-40" />
                    <h3 className="opacity-50 text-xs">Hidden</h3>
                    <img src={heroTron} alt="" className="h-4 w-4" />
                    <h5>287,524</h5>
                  </div>
                  <div className=" flex flex-row bg-[#44454a] h-10 sm:w-48 p-2 sm:p-0 text-sm items-center justify-center gap-1 rounded-full  ">
                    <BsPersonFill size={20} className="opacity-40" />
                    <h3 className="opacity-50 text-xs">Hidden</h3>
                    <img src={heroTron} alt="" className="h-4 w-4" />
                    <h5>287,524525</h5>
                  </div>
                </div>
              </div>
              {/* right-start */}
              <div className="bg-[#232428] h-[400px] lg:h-auto flex-grow relative flex flex-col justify-between ">
                <div className="h-[9%] sm:h-[12%] lg:h-[8%] w-full bg-[#232428] flex items-center justify-end flex-wrap sm:flex-nowrap text-white font-roboto_condensed gap-2 sm:gap-3 pt-4 sm:pt-0">
                  <button
                    type="button"
                    className="bg-[#2f3034] w-12 h-6 text-xs sm:w-16  sm:h-8 flex justify-center items-center rounded-full sm:text-sm font-bold"
                  >
                    1.69x
                  </button>
                  <button
                    type="button"
                    className="bg-[#2f3034] w-12 h-6 text-xs sm:w-16  sm:h-8 flex justify-center items-center rounded-full sm:text-sm font-bold"
                  >
                    0.19x
                  </button>
                  <button
                    type="button"
                    className="bg-[#2da37f] w-12 h-6 text-xs sm:w-16  sm:h-8 flex justify-center items-center rounded-full sm:text-sm font-bold"
                  >
                    88.11x
                  </button>
                  <button
                    type="button"
                    className="bg-[#2f3034] w-12 h-6 text-xs sm:w-16  sm:h-8 flex justify-center items-center rounded-full sm:text-sm font-bold"
                  >
                    1.32x
                  </button>
                  <button
                    type="button"
                    className="bg-[#2da37f] w-12 h-6 text-xs sm:w-16  sm:h-8 flex justify-center items-center rounded-full sm:text-sm font-bold"
                  >
                    45.42x
                  </button>
                  <button
                    type="button"
                    className="bg-[#2f3034] w-12 h-6 text-xs sm:w-16  sm:h-8 flex justify-center items-center rounded-full sm:text-sm font-bold"
                  >
                    0.21x
                  </button>
                  <button>
                    <img src={graphHead} alt="" className="px-3" />
                  </button>
                </div>

                <div className=" h-[80%] w-[100%] p-3 flex flex-row justify-between">
                  <div className="w-[95%] sm:w-[70%] self-end h-full">
                    <Line options={options} data={data} />
                  </div>
                  <div className="pl-3 w-auto h-[100%]  bg-[#232428] text-white hidden lg:flex flex-col justify-end gap-20 relative ">
                    <div className=" flex flex-col items-end gap-2">
                      <div className=" flex flex-row bg-[#44454a] h-10 w-48 text-sm items-center justify-center gap-1 rounded-full  ">
                        <BsPersonFill size={20} className="opacity-40" />
                        <h3 className="opacity-50 text-xs">Hidden</h3>
                        <img src={heroTron} alt="" className="h-4 w-4" />
                        <h5>287,524525</h5>
                      </div>
                      <div className=" flex flex-row bg-[#44454a] h-10 w-40 text-sm items-center justify-center gap-1 rounded-full  ">
                        <BsPersonFill size={20} className="opacity-40" />
                        <h3 className="opacity-50 text-xs">Hidden</h3>
                        <img src={heroTron} alt="" className="h-4 w-4" />
                        <h5>287,524</h5>
                      </div>
                      <div className=" flex flex-row bg-[#44454a] h-10 w-48 text-sm items-center justify-center gap-1 rounded-full  ">
                        <BsPersonFill size={20} className="opacity-40" />
                        <h3 className="opacity-50 text-xs">Hidden</h3>
                        <img src={heroTron} alt="" className="h-4 w-4" />
                        <h5>287,524525</h5>
                      </div>
                      <div className=" flex flex-row bg-[#44454a] h-10 w-40 text-sm items-center justify-center gap-1 rounded-full  ">
                        <BsPersonFill size={20} className="opacity-40" />
                        <h3 className="opacity-50 text-xs">Hidden</h3>
                        <img src={heroTron} alt="" className="h-4 w-4" />
                        <h5>287,524</h5>
                      </div>
                      <div className=" flex flex-row bg-[#44454a] h-10 w-48 text-sm items-center justify-center gap-1 rounded-full  ">
                        <BsPersonFill size={20} className="opacity-40" />
                        <h3 className="opacity-50 text-xs">Hidden</h3>
                        <img src={heroTron} alt="" className="h-4 w-4" />
                        <h5>287,524525</h5>
                      </div>
                    </div>
                    <div className="self-start flex flex-col justify-center items-end font-roboto_condensed font-bold">
                      <h1>Total 4s</h1>
                      <h4 className="flex items-center justify-center gap-2 text-xs">
                        Network status{" "}
                        <span className="h-4 w-4 rounded-full bg-green-500 block"></span>{" "}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              {/* right-end */}
            </div>
            {/* middle-div-end */}
            <div className="bg-[#26272b] h-11 min-w-full flex items-center justify-between pr-2">
              <div className="w-52 bg-[#26272b] h-full flex items-center justify-start gap-1 rounded-tl-md rounded-bl-md text-white">
                <button
                  type="button"
                  className="bg-[#2f3034] h-full w-[32%] rounded-tl-md rounded-bl-md flex items-center justify-center"
                >
                  <AiFillSetting size={25} className="opacity-60" />
                </button>
                <button
                  type="button"
                  className="bg-[#2f3034] h-full w-[32%]  flex items-center justify-center"
                >
                  <BiRectangle size={25} className="opacity-60" />
                </button>
                <button
                  type="button"
                  className="bg-[#2f3034] h-full w-[32%]  flex items-center justify-center"
                >
                  <ImStatsBars size={25} className="opacity-60" />
                </button>
              </div>
              <button
                type="button"
                className="flex gap-2 text-white  items-center justify-center "
              >
                <GiHammerBreak className="opacity-60" />
                <h4>Fairness</h4>
              </button>
            </div>

            {/* lower-div-start */}
            <div className="bg-[#26272b] flex-grow min-w-full h-[350px] lg:h-[290px] p-3">
              <div
                className="h-14 w-full bg-[#1d1f23] rounded-full p-1 px-2
            
            "
              >
                <Tab.Group>
                  <Tab.List className="flex space-x-1 rounded-full bg-[#1d1f23] p-1 lg:w-[30%]">
                    {BottomPanel.map((e) => (
                      <Tab
                        key={e}
                        className={({ selected }) =>
                          classNames(
                            "w-full rounded-full py-2.5 px-2 text-sm font-medium leading-5 text-white",
                            "ring-transparent ring-opacity-60 ring-offset-2 ring-offset-transparent focus:outline-none focus:ring-2",
                            selected
                              ? "bg-[#484949] shadow"
                              : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                          )
                        }
                      >
                        {e}
                      </Tab>
                    ))}
                  </Tab.List>
                  <Tab.Panels className="mt-2">
                    <Tab.Panel>
                      <div className="bg-[#26272b] h-[165px] overflow-x-scroll no-scrollbar">
                        <ul className="flex flex-col gap-2">
                          {Array(10)
                            .fill(1)
                            .map((e, i) => (
                              <li className="flex gap-2 text-xs" key={i}>
                                <h1 className="opacity-60 text-white ">
                                  01.29
                                </h1>
                                <h4 className="text-[#EB7D2D] underline">
                                  Lucky_2901
                                </h4>
                                <h5 className="text-white">
                                  Lorem ipsum dolor sit amet.
                                </h5>
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="h-12 w-full bg-[#1d1f23]  flex items-center justify-between rounded-md mt-2">
                        <h1 className="opacity-60 flex-grow ml-2 text-[#A1A3AA] text-base font-normal font-roboto_condensed">
                          You must be logged in to chat
                        </h1>
                        <div className="h-10 w-12 bg-[#484949] flex justify-center items-center text-white mr-2">
                          <BsFillSendFill size={28} />
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="overflow-scroll no-scrollbar  h-[175px]">
                        <table className="table-auto w-full  overflow-scroll font-roboto_condensed text-white border-collapse rounded-t-xl text-xs sm:text-base">
                          <thead className=" bg-[#484949] font-bold sticky top-0 rounded-t-xl z-10">
                            <tr className=" border-spacing-0">
                              <th className="py-2">GAME</th>
                              <th>TIME</th>
                              <th>BET AMOUNT</th>
                              <th>MULTIPLIER</th>
                              <th>PAYOUT</th>
                            </tr>
                          </thead>
                          <tbody className="text-center opacity-80 overflow-scroll ">
                            {Array(15)
                              .fill(1)
                              .map((e, i) => (
                                <tr
                                  key={i}
                                  className={`${
                                    i % 2 === 0
                                      ? "bg-[#2a2b2f]"
                                      : "bg-[#333438]"
                                  }`}
                                >
                                  <td className="py-2">Crash Game</td>
                                  <td>06:47pm</td>
                                  <td>20090.87808798 TRX</td>
                                  <td>2.0x</td>
                                  <td>20090.87808798 TRX</td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="h-12 w-full bg-[#1d1f23]  flex items-center justify-between rounded-md mt-2">
                        <h1 className="opacity-60 flex-grow ml-2 text-[#A1A3AA] text-base font-normal font-roboto_condensed">
                          You must be logged in to chat
                        </h1>
                        <div className="h-10 w-12 bg-[#484949] flex justify-center items-center text-white mr-2">
                          <BsFillSendFill size={28} />
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="overflow-scroll no-scrollbar h-[175px]">
                        <table className="table-auto w-full  overflow-scroll font-roboto_condensed text-white border-collapse rounded-t-xl text-xs sm:text-base">
                          <thead className=" bg-[#484949]  font-bold sticky top-0 rounded-t-xl z-10">
                            <tr className="border-spacing-0">
                              <th className="py-2">RANK</th>
                              <th>USER</th>
                              <th>WAGERED</th>
                              <th>PRICE</th>
                            </tr>
                          </thead>
                          <tbody className="text-center opacity-80 overflow-scroll ">
                            {Array(15)
                              .fill(1)
                              .map((e, i) => (
                                <tr
                                  key={i}
                                  className={`${
                                    i % 2 === 0
                                      ? "bg-[#2a2b2f]"
                                      : "bg-[#333438]"
                                  }`}
                                >
                                  <td className="py-2">{i + 1}st</td>
                                  <td>Abhinav</td>
                                  <td>20090.87808798</td>
                                  <td>20090.87808798</td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="h-12 w-full bg-[#1d1f23]  flex items-center justify-between rounded-md mt-2">
                        <h1 className="opacity-60 flex-grow ml-2 text-[#A1A3AA] text-base font-normal font-roboto_condensed">
                          You must be logged in to chat
                        </h1>
                        <div className="h-10 w-12 bg-[#484949] flex justify-center items-center text-white mr-2">
                          <BsFillSendFill size={28} />
                        </div>
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </div>
            {/* lower-div-end */}
          </div>
        </main>
      </div>
    </>
  );
};

export default ManualMainScreen;
