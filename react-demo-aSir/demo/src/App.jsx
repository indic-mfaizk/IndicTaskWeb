import React, { useState } from "react";
import "./App.css";
import tronImage from "./assets/hero-tron.png";
import {
  BiDownArrow,
  BiRectangle,
  BiSolidDownArrow,
  BiSolidUpArrow,
  BiUpArrow,
} from "react-icons/bi";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
  BsFillPersonFill,
  BsPersonBadgeFill,
  BsSendFill,
} from "react-icons/bs";
import { Line } from "react-chartjs-2";
import graphHeaderImage from "./assets/graph-head.svg";
import { AiTwotoneSetting } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { ImStatsBars } from "react-icons/im";
import { GiHammerBreak } from "react-icons/gi";
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
const bottomTabConst = {
  CHAT: "CHAT",
  MYBET: "MYBET",
  LEADERBOARD: "LEADERBOARD",
};
const App = () => {
  // let [categories] = useState(["Manual", "Auto"]);
  const [isManualTab, setisManualTab] = useState(true);
  const [isControlTab, setIsControlTab] = useState(true);
  const [currentBottomTab, setcurrentBottomTab] = useState(bottomTabConst.CHAT);
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
    <div className="main-container">
      <div className="top-container">
        <div className="left-container">
          <div className="left-container-tab-container">
            <button
              className={`${isManualTab && "active-tab"} tab`}
              onClick={() => setisManualTab(true)}
            >
              Manual
            </button>
            <button
              className={`${!isManualTab && "active-tab"} tab`}
              onClick={() => setisManualTab(false)}
            >
              Auto
            </button>
          </div>
          {isManualTab ? (
            <>
              <div className="tab-screen-1-container">
                <div className="tab-screen-1-input-heading">
                  <h1>Bet Amount</h1>
                  <h1>$0.00</h1>
                </div>
                <div className="tab-screen-1-input-container">
                  <input
                    type="text"
                    name="bet"
                    id="bet"
                    className="tab-screen-1-input"
                  />
                  <div className="input-img-container">
                    <img src={tronImage} alt="" className="tron-input-img" />
                  </div>
                  <div className="tab-screen-1-input-button-container">
                    <button className="tab-screen-1-input-button">1/2</button>
                    <div className="divider"></div>
                    <button className="tab-screen-1-input-button">2x</button>
                  </div>
                </div>
                {/* input-2-start */}

                <div className="tab-screen-1-input-heading">
                  <h1>Cashout At</h1>
                  <h1></h1>
                </div>
                <div className="tab-screen-1-input-container">
                  <input
                    type="text"
                    name="bet"
                    id="bet"
                    className="tab-screen-1-input"
                  />
                  <div className="input-img-container">
                    <img src={tronImage} alt="" className="tron-input-img" />
                  </div>
                  <div className="tab-screen-1-input-button-container">
                    <h1 className="tab-screen-1-input-button">
                      <BiSolidDownArrow />
                    </h1>
                    <div className="divider"></div>
                    <h1 className="tab-screen-1-input-button">
                      <BiSolidUpArrow />
                    </h1>
                  </div>
                </div>

                {/* input-2-end */}
                {/* input-3-start */}
                <div className="tab-screen-1-input-heading">
                  <h1>Profit on Win</h1>
                  <h1>$0.00</h1>
                </div>
                <div className="tab-screen-1-input-container ">
                  <input
                    type="text"
                    name="bet"
                    id="bet"
                    className="tab-screen-1-input tab-screen-1-input-variant"
                  />
                  <div className="input-img-container">
                    <img src={tronImage} alt="" className="tron-input-img" />
                  </div>
                </div>
                {/* input-3-end */}
                {/* button-start */}
                <button className="tab-screen-1-btn">BET</button>
                {/* button-end */}
                <div className="tp-tab-1-container">
                  <h1>Target Profit:</h1>
                  <h2>2 TRX</h2>
                </div>
                <div className="tp-tab-1-container">
                  <h1>Win Chance:</h1>
                  <h2>48.6%</h2>
                </div>
                <div className="tab-1-list-heading-container">
                  <div className="tab-1-heading-container-right">
                    <BsFillPersonFill />
                    <h3>123</h3>
                  </div>
                  <div className="tab-1-heading-container-left">
                    <img src={tronImage} alt="" className="tron-input-img" />
                    <h3>0.45395363</h3>
                  </div>
                </div>
                {/* list-container-start */}
                <ul className="tab-1-list-container">
                  {Array(10)
                    .fill(1)
                    .map((e, i) => (
                      <>
                        {/* list-item-start */}
                        <li className="tab-1-list-container-item" key={i}>
                          <div className="tab-1-list-container-item-right">
                            <BsFillPersonFill />
                            <h1>Hidden</h1>
                          </div>
                          <h3 className="tab-1-list-container-item-middle">
                            1.41x
                          </h3>
                          <div className="tab-1-list-container-item-left">
                            <img
                              src={tronImage}
                              alt=""
                              className="tron-input-img"
                            />
                            <h4>287.524525</h4>
                          </div>
                        </li>
                        {/* list-item-end */}
                      </>
                    ))}
                </ul>
                {/* list-container-end */}
              </div>
            </>
          ) : (
            <>
              <div className="tab-screen-1-container">
                <div className="auto-internal-tab-container">
                  <button
                    className={`auto-internal-tab-item ${
                      isControlTab && "auto-internal-tab-item-active"
                    }`}
                    onClick={() => setIsControlTab(true)}
                  >
                    Control
                  </button>
                  <button
                    className={`auto-internal-tab-item ${
                      !isControlTab && "auto-internal-tab-item-active"
                    } `}
                    onClick={() => setIsControlTab(false)}
                  >
                    Leaderboard
                  </button>
                </div>
                {isControlTab ? (
                  <>
                    <div className="auto-internal-tab-data-container">
                      <div className="tab-screen-1-input-heading">
                        <h1>Bet Amount</h1>
                        <h1>$0.00</h1>
                      </div>
                      <div className="tab-screen-1-input-container">
                        <input
                          type="text"
                          name="bet"
                          id="bet"
                          className="tab-screen-1-input"
                        />
                        <div className="input-img-container">
                          <img
                            src={tronImage}
                            alt=""
                            className="tron-input-img"
                          />
                        </div>
                        <div className="tab-screen-1-input-button-container">
                          <button className="tab-screen-1-input-button">
                            1/2
                          </button>
                          <div className="divider"></div>
                          <button className="tab-screen-1-input-button">
                            2x
                          </button>
                        </div>
                      </div>
                      {/* input-2-start */}

                      <div className="tab-screen-1-input-heading">
                        <h1>Cashout At</h1>
                        <h1>Number of Bets</h1>
                      </div>
                      <div className="auto-control-2-input-parent-container">
                        <div className="auto-control-2-input-left-container">
                          <input
                            type="text"
                            className="auto-control-2-input-left"
                          />
                          <BiSolidDownArrow />
                          <div className="divider"></div>
                          <BiSolidUpArrow />
                        </div>
                        <div className="auto-control-2-input-right-container">
                          <input
                            type="text"
                            name=""
                            id=""
                            className="auto-control-2-input-right"
                          />
                        </div>
                      </div>

                      {/* input-2-end */}

                      {/* input-3-start */}
                      <div className="tab-screen-1-input-heading">
                        <h1>On Win</h1>
                        <h1>$0.00</h1>
                      </div>
                      <div className="auto-control-3-container">
                        <button className="auto-control-3-button">Reset</button>
                        <button className="auto-control-3-button">
                          Increased By
                        </button>
                        <div className="auto-control-3-input-container">
                          <input type="text" className="auto-control-3-input" />
                          <div className="auto-control-3-input-per">%</div>
                        </div>
                      </div>
                      {/* input-3-end */}
                      {/* input-3-start */}
                      <div className="tab-screen-1-input-heading">
                        <h1>On Loss</h1>
                        <h1>$0.00</h1>
                      </div>
                      <div className="auto-control-3-container">
                        <button className="auto-control-3-button">Reset</button>
                        <button className="auto-control-3-button">
                          Increased By
                        </button>
                        <div className="auto-control-3-input-container">
                          <input type="text" className="auto-control-3-input" />
                          <div className="auto-control-3-input-per">%</div>
                        </div>
                      </div>
                      {/* input-3-end */}

                      {/* input-3-start */}
                      <div className="tab-screen-1-input-heading">
                        <h1>Profit on Win</h1>
                        <h1>$0.00</h1>
                      </div>
                      <div className="tab-screen-1-input-container ">
                        <input
                          type="text"
                          name="bet"
                          id="bet"
                          className="tab-screen-1-input tab-screen-1-input-variant"
                        />
                        <div className="input-img-container">
                          <img
                            src={tronImage}
                            alt=""
                            className="tron-input-img"
                          />
                        </div>
                      </div>
                      {/* input-3-end */}
                      {/* input-3-start */}
                      <div className="tab-screen-1-input-heading">
                        <h1>Profit on Win</h1>
                        <h1>$0.00</h1>
                      </div>
                      <div className="tab-screen-1-input-container ">
                        <input
                          type="text"
                          name="bet"
                          id="bet"
                          className="tab-screen-1-input tab-screen-1-input-variant"
                        />
                        <div className="input-img-container">
                          <img
                            src={tronImage}
                            alt=""
                            className="tron-input-img"
                          />
                        </div>
                      </div>
                      {/* input-3-end */}
                      {/* input-3-start */}
                      <div className="tab-screen-1-input-heading">
                        <h1>Profit on Win</h1>
                        <h1>$0.00</h1>
                      </div>
                      <div className="tab-screen-1-input-container ">
                        <input
                          type="text"
                          name="bet"
                          id="bet"
                          className="tab-screen-1-input tab-screen-1-input-variant"
                        />
                        <div className="input-img-container">
                          <img
                            src={tronImage}
                            alt=""
                            className="tron-input-img"
                          />
                        </div>
                      </div>
                      {/* input-3-end */}
                      <button className="tab-screen-1-btn">
                        START AUTOBET
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="leaderboard-data-container">
                      <div className="tab-1-list-heading-container">
                        <div className="tab-1-heading-container-right">
                          <BsFillPersonFill />
                          <h3>123</h3>
                        </div>
                        <div className="tab-1-heading-container-left">
                          <img
                            src={tronImage}
                            alt=""
                            className="tron-input-img"
                          />
                          <h3>0.45395363</h3>
                        </div>
                      </div>
                      {/* list-container-start */}
                      <ul className="tab-1-list-container tab-1-list-container-variant">
                        {Array(20)
                          .fill(1)
                          .map((e, i) => (
                            <>
                              {/* list-item-start */}
                              <li className="tab-1-list-container-item" key={i}>
                                <div className="tab-1-list-container-item-right">
                                  <BsFillPersonFill />
                                  <h1>Hidden</h1>
                                </div>
                                <h3 className="tab-1-list-container-item-middle">
                                  1.41x
                                </h3>
                                <div className="tab-1-list-container-item-left">
                                  <img
                                    src={tronImage}
                                    alt=""
                                    className="tron-input-img"
                                  />
                                  <h4>287.524525</h4>
                                </div>
                              </li>
                              {/* list-item-end */}
                            </>
                          ))}
                      </ul>
                      {/* list-container-end */}

                      {/* input-3-start */}
                      <div className="tab-screen-1-input-heading">
                        <h1>Profit on Win</h1>
                        <h1>$0.00</h1>
                      </div>
                      <div className="tab-screen-1-input-container ">
                        <input
                          type="text"
                          name="bet"
                          id="bet"
                          className="tab-screen-1-input tab-screen-1-input-variant"
                        />
                        <div className="input-img-container">
                          <img
                            src={tronImage}
                            alt=""
                            className="tron-input-img"
                          />
                        </div>
                      </div>
                      {/* input-3-end */}
                      <button className="tab-screen-1-btn">
                        START AUTOBET
                      </button>
                    </div>
                  </>
                )}
              </div>
            </>
          )}
        </div>
        <div className="right-container">
          <div className="top-container-header-container">
            <div className="top-container-header-chips">1.69x</div>
            <div className="top-container-header-chips">1.69x</div>
            <div className="top-container-header-chips top-container-header-chips-variant">
              1.69x
            </div>
            <div className="top-container-header-chips">1.69x</div>
            <div className="top-container-header-chips top-container-header-chips-variant">
              1.69x
            </div>
            <div className="top-container-header-chips">1.69x</div>
            <img src={graphHeaderImage} alt="" className="graph-chips-img" />
          </div>
          <div className="right-container-bottom-container">
            <div className="chart-container">
              <Line data={data} options={options} />
            </div>
            <div className="right-container-bottom-chips-container">
              {/* chips-start */}
              <div className="right-container-bottom-chips">
                <BsFillPersonFill className="right-container-bottom-chips-icon" />
                <h1 className="right-container-bottom-chips-title">Hidden</h1>
                <img src={tronImage} alt="" className="tron-input-img" />
                <h2 className="right-container-bottom-chips-subtitle">
                  287.524525
                </h2>
              </div>
              {/* chips-end */}
              {/* chips-start */}
              <div className="right-container-bottom-chips right-container-bottom-chips-variant">
                <BsFillPersonFill className="right-container-bottom-chips-icon" />
                <h1 className="right-container-bottom-chips-title">Hidden</h1>
                <img src={tronImage} alt="" className="tron-input-img" />
                <h2 className="right-container-bottom-chips-subtitle">
                  287.524
                </h2>
              </div>
              {/* chips-end */}
              {/* chips-start */}
              <div className="right-container-bottom-chips">
                <BsFillPersonFill className="right-container-bottom-chips-icon" />
                <h1 className="right-container-bottom-chips-title">Hidden</h1>
                <img src={tronImage} alt="" className="tron-input-img" />
                <h2 className="right-container-bottom-chips-subtitle">
                  287.524525
                </h2>
              </div>
              {/* chips-end */}
              {/* chips-start */}
              <div className="right-container-bottom-chips right-container-bottom-chips-variant">
                <BsFillPersonFill className="right-container-bottom-chips-icon" />
                <h1 className="right-container-bottom-chips-title">Hidden</h1>
                <img src={tronImage} alt="" className="tron-input-img" />
                <h2 className="right-container-bottom-chips-subtitle">
                  287.524
                </h2>
              </div>
              {/* chips-end */}
              {/* chips-start */}
              <div className="right-container-bottom-chips">
                <BsFillPersonFill className="right-container-bottom-chips-icon" />
                <h1 className="right-container-bottom-chips-title">Hidden</h1>
                <img src={tronImage} alt="" className="tron-input-img" />
                <h2 className="right-container-bottom-chips-subtitle">
                  287.524525
                </h2>
              </div>
              {/* chips-end */}
              <div className="network-status">
                <h1 className="network-status-heading">Total 4s</h1>
                <div className="network-status-subheading">
                  <h3 className="network-status-subheading-text">
                    Network Status
                  </h3>
                  <div className="network-status-subheading-indicator"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="middle-container">
        <div className="middle-container-icon-container">
          <button className="middle-container-icon-parent middle-container-icon-parent-variant">
            <FiSettings className="middle-container-icon" />
          </button>
          <button className="middle-container-icon-parent">
            <BiRectangle className="middle-container-icon" />
          </button>
          <button className="middle-container-icon-parent">
            <ImStatsBars className="middle-container-icon" />
          </button>
        </div>
        <div className="middle-container-right-container">
          <GiHammerBreak />
          <h3>Fairness</h3>
        </div>
      </div>
      <div className="bottom-container">
        <div className="bottom-container-tab-container">
          <button
            className={`bottom-container-tab-item ${
              currentBottomTab === bottomTabConst.CHAT &&
              "bottom-container-tab-item-active"
            }`}
            onClick={() => setcurrentBottomTab(bottomTabConst.CHAT)}
          >
            Chats
          </button>
          <button
            className={`bottom-container-tab-item ${
              currentBottomTab === bottomTabConst.MYBET &&
              "bottom-container-tab-item-active"
            }`}
            onClick={() => setcurrentBottomTab(bottomTabConst.MYBET)}
          >
            My Bets
          </button>
          <button
            className={`bottom-container-tab-item ${
              currentBottomTab === bottomTabConst.LEADERBOARD &&
              "bottom-container-tab-item-active"
            }`}
            onClick={() => setcurrentBottomTab(bottomTabConst.LEADERBOARD)}
          >
            Leaderboard
          </button>
        </div>
        {currentBottomTab === bottomTabConst.CHAT && (
          <ul className="bottom-container-list-container">
            {Array(10)
              .fill(1)
              .map((e, i) => (
                <li className="bottom-container-list-item">
                  <h2 className="bottom-container-list-item-time">01:29</h2>
                  <h2 className="bottom-container-list-item-username">
                    Luck_2901
                  </h2>
                  <h2 className="bottom-container-list-item-msg">
                    Lorem ipsum dolor sit amet.
                  </h2>
                </li>
              ))}
          </ul>
        )}
        {currentBottomTab === bottomTabConst.MYBET && (
          <div className="bottom-table-parent">
            <table className="bottom-tab-table">
              <thead className="bottom-tab-table-head">
                <tr className="bottom-tab-table-head-row">
                  <td className="bottom-tab-table-item">GAME</td>
                  <td className="bottom-tab-table-item">TIME</td>
                  <td className="bottom-tab-table-item">BET AMOUNT</td>
                  <td className="bottom-tab-table-item">MULTIPLIER</td>
                  <td className="bottom-tab-table-item">PAYOUT</td>
                </tr>
              </thead>
              <tbody className="bottom-tab-table-body">
                {Array(20)
                  .fill(1)
                  .map((e, i) => (
                    <tr
                      className={`bottom-tab-table-data-row`}
                      style={
                        i % 2 === 0
                          ? { backgroundColor: "#333438" }
                          : { backgroundColor: "#2a2b2f" }
                      }
                      // style={{ backgroundColor: "blue" }}
                      key={i}
                    >
                      <td className="bottom-tab-table-item">Crash Game</td>
                      <td className="bottom-tab-table-item">06:47 PM</td>
                      <td className="bottom-tab-table-item">
                        20090.87807876 TRX
                      </td>
                      <td className="bottom-tab-table-item">2.0x</td>
                      <td className="bottom-tab-table-item">
                        20090.87807876 TRX
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
        {currentBottomTab === bottomTabConst.LEADERBOARD && (
          <div className="bottom-table-parent">
            <table className="bottom-tab-table">
              <thead className="bottom-tab-table-head">
                <tr className="bottom-tab-table-head-row">
                  <td className="bottom-tab-table-item">RANK</td>
                  <td className="bottom-tab-table-item">USER</td>
                  <td className="bottom-tab-table-item">WAGERED</td>
                  <td className="bottom-tab-table-item">PRICE</td>
                </tr>
              </thead>
              <tbody className="bottom-tab-table-body">
                {Array(20)
                  .fill(1)
                  .map((e, i) => (
                    <tr
                      className={`bottom-tab-table-data-row`}
                      style={
                        i % 2 === 0
                          ? { backgroundColor: "#333438" }
                          : { backgroundColor: "#2a2b2f" }
                      }
                      // style={{ backgroundColor: "blue" }}
                      key={i}
                    >
                      <td className="bottom-tab-table-item">{i + 1}st</td>
                      <td className="bottom-tab-table-item">Abhinav</td>
                      <td className="bottom-tab-table-item">
                        20090.87807876 TRX
                      </td>
                      <td className="bottom-tab-table-item">
                        20090.87807876 TRX
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="bottom-chat-container">
          <h1 className="bottom-chat-container-text">
            You must be logged in to chat
          </h1>
          <div className="bottom-chat-icon-container">
            <BsSendFill className="bottom-chat-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
