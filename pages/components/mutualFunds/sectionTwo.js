import React, { useState } from "react";
import styles from "../../../styles/Home.module.css";
import containerStyles from "../../../styles/customContainer.module.css";

import AnimateHeight from "react-animate-height";

const SectionTwo = (props) => {
  const [state, setState] = useState({
    sectionTwoActiveTab: 0,
    activeAccordianElement: 0,
  });

  const onAccordianElementClick = (activeNumber) => {
    setState({ ...state, activeAccordianElement: activeNumber });
  };

  const AccordianActiveElement = ({ children, number }) => (
    <div
      onClick={() => onAccordianElementClick(number)}
      className=" cursor-pointer pt-3 pr-3 pb-4 pl-3 text-sm font-medium text-scriptbox-gray-3 border-b"
    >
      {children}
    </div>
  );

  const AccordianNonActiveElement = ({ children, number }) => (
    <div
      onClick={() => onAccordianElementClick(number)}
      className="bg-white rounded-md"
    >
      <div className=" pt-3 pr-3 pl-3 pb-4 font-medium text-scriptbox-gray-3 text-sm">
        {children}
      </div>
      <div className="px-3 pb-3 text-sm text-scriptbox-gray-2">
        Scripbox algorithm recommends 2-4 funds for investment for an investment
        asset class such as large cap, diversified, liquid etc. When you invest
        for an objective, the algorithm suggests the appropriate asset class and
        funds.
      </div>
    </div>
  );

  const renderHeading = () => (
    <div className="sm:text-center text-left xl:max-w-lg max-w-full mx-auto">
      <h6 className="text-scriptbox-gray-2 text-sm font-medium">
        How does scriptbox rate funds ?
      </h6>
      <h2 className="text-scriptbox-black-1  text-my1 font-bold pt-3 pb-2 leading-tight">
        Proprietary 4-step system to rate mutual funds
      </h2>
      <p className={`text-scriptbox-gray-2 text-base lg:max-w-none ${styles.section_two_desktop_para} pb-6`}>
        We use a proprietary system to rate mutual funds and based on that make
        a recommendation or top ranking
      </p>
    </div>
  );

  const renderTab = () => (
    <div className={`xl:max-w-none max-w-lg`}>
      <div className="w-14-875 mx-auto cursor-pointer mt-4 flex items-center bg-scriptbox-blue-2 rounded-md text-sm">
        <div
          className="p-0-1875"
          onClick={() => setState({ ...state, sectionTwoActiveTab: 0 })}
        >
          <p
            className={`leading-1-35 py-1 px-4 ${
              !state.sectionTwoActiveTab ? `bg-white rounded-md shadow-2` : ""
            }`}
          >
            Equity Funds
          </p>
        </div>
        <div
          className="p-0-1875"
          onClick={() => setState({ ...state, sectionTwoActiveTab: 1 })}
        >
          <p
            className={`leading-1-35 py-1 px-4 ${
              state.sectionTwoActiveTab ? `bg-white rounded-md shadow-2` : ""
            }`}
          >
            Dept Funds
          </p>
        </div>
      </div>
    </div>
  );

  const renderRightGrid = () => (
    <div className="mt-4  rounded-md max-w-lg w-full">
      {/* first row */}
      <div className="flex  items-center">
        <div
          className={`rounded-tl-md md:p-4 p-6 bg-white shadow-2 w-full relative ${styles.section_two_top_left_div}`}
        >
          <svg
            className="sm:hidden block h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 32 31"
            id="calender-event-icon"
          >
            <path
              d="M28 4H4a3 3 0 00-3 3v20a3 3 0 003 3h24a3 3 0 003-3V7a3 3 0 00-3-3z"
              fill="#E6E6E6"
              stroke="#181818"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="square"
            ></path>
            <path
              d="M28 4H4a3 3 0 00-3 3v5h30V7a3 3 0 00-3-3z"
              fill="#fff"
              stroke="#181818"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="square"
            ></path>
            <path
              d="M11 21l3 3 7-7"
              stroke="#181818"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M31 12H1"
              stroke="#181818"
              stroke-width="1.5"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M8 1v3M24 1v3"
              stroke="#181818"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
            ></path>
          </svg>
          <h4 className="leading-1-125 font-semibold text-base pt-4 pb-2">
            Track Record
          </h4>
          <p className=" text-sm text-scriptbox-gray-5">
            We look at consistent and long historical performance for our
            analysis
          </p>
        </div>
        <div
          className={` rounded-tr-md md:p-4 p-6 bg-white relative w-full shadow-2 ${styles.section_two_top_right_div}`}
        >
          <svg
            className="sm:hidden block  h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 32 32"
            id="safe-1"
          >
            <g
              clip-path="url(#fbclip0)"
              stroke="#181818"
              stroke-width="1.5"
              stroke-miterlimit="10"
            >
              <path
                d="M26 1H6a5 5 0 00-5 5v20a5 5 0 005 5h20a5 5 0 005-5V6a5 5 0 00-5-5z"
                fill="#E6E6E6"
                stroke-linecap="square"
              ></path>
              <path d="M23 16h8M1 16h8" stroke-linecap="round"></path>
              <path
                d="M16 23a7 7 0 100-14 7 7 0 000 14z"
                fill="#fff"
                stroke-linecap="square"
              ></path>
              <path d="M17 15l3-3" stroke-linecap="round"></path>
            </g>
          </svg>
          <h4 className="leading-1-125 font-semibold text-base pt-4 pb-2">
            {state.sectionTwoActiveTab ? "Fund size" : "Relative Size"}
          </h4>
          <p className=" text-sm text-scriptbox-gray-5">
            We look at consistent and long historical performance for our
            analysis
          </p>
        </div>
      </div>
      {/* second row */}
      <div className="flex items-center">
        <div className={`rounded-bl-md p-4 md:p-6 bg-white  shadow-2 ${styles.section_two_bottom_left_div} w-full `}>
          {state.sectionTwoActiveTab ? (
            <svg
              className="sm:hidden block  h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 32 32"
              id="three-dimensional-world"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1 16c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15H1zm30 0H1c0 2.761 6.716 5 15 5 8.284 0 15-2.239 15-5z"
                fill="#E6E6E6"
              ></path>
              <path
                d="M16 31c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C7.716 1 1 7.716 1 16c0 8.284 6.716 15 15 15zM13 11.107c-.86.06-1.7.139-2.5.245M19 11.107c.86.06 1.7.139 2.5.245"
                stroke="#181818"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="square"
              ></path>
              <path
                d="M27.194 12.68C29.554 13.563 31 14.724 31 16c0 2.761-6.716 5-15 5-8.284 0-15-2.239-15-5 0-1.276 1.446-2.437 3.806-3.32"
                stroke="#181818"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="square"
              ></path>
            </svg>
          ) : (
            <svg
              className="sm:hidden block  h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 32 32"
              id="impact-of-interestrates"
            >
              <path
                d="M16 31c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C7.716 1 1 7.716 1 16c0 8.284 6.716 15 15 15z"
                fill="#E6E6E6"
                stroke="#181818"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="square"
              ></path>
              <path
                d="M11.179 13.857a2.678 2.678 0 100-5.357 2.678 2.678 0 000 5.357zM20.821 23.5a2.679 2.679 0 100-5.357 2.679 2.679 0 000 5.357z"
                fill="#fff"
                stroke="#181818"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="square"
              ></path>
              <path
                d="M9.572 22.429L23.5 8.5"
                stroke="#181818"
                stroke-width="1.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M18.143 8.5H23.5v5.357"
                stroke="#181818"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="square"
              ></path>
            </svg>
          )}
          <h4 className="leading-1-125 font-semibold text-base pt-4 pb-2">
            {state.sectionTwoActiveTab
              ? "Sub-asset class view"
              : "Impact of interest rates"}
          </h4>
          <p className=" text-sm text-scriptbox-gray-5">
            We look at consistent and long historical performance for our
            analysis
          </p>
        </div>
        <div className={`rounded-br-md p-4 md:p-6 bg-white shadow-2 ${styles.section_two_bottom_right_div} w-full`}>
          {state.sectionTwoActiveTab ? (
            <svg
              className="sm:hidden block  h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 32 32"
              id="speedometer-2"
            >
              <path
                d="M16 31C7.716 31 1 24.284 1 16 1 7.716 7.716 1 16 1c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15z"
                fill="#E6E6E6"
                stroke="#181818"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="square"
              ></path>
              <path
                d="M20 6.6c-1.2-.5-2.6-.8-4-.8-3.788 0-7.118 2.105-8.877 5.2M19 13l4-4.5"
                stroke="#181818"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
              ></path>
              <path
                d="M16 20a4 4 0 110-8 4 4 0 010 8z"
                fill="#fff"
                stroke="#181818"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="square"
              ></path>
            </svg>
          ) : (
            <svg
              className="sm:hidden block  h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 32 32"
              id="speedometer-1"
            >
              <g clip-path="url(#fyclip0)">
                <path
                  d="M23.586 18.731V31l-7.241-3.103L9.104 31V18.731"
                  fill="#E6E6E6"
                ></path>
                <path
                  d="M23.586 18.731V31l-7.241-3.103L9.104 31V18.731"
                  stroke="#181818"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.134 3.091a4.407 4.407 0 002.508-1.039 4.407 4.407 0 015.716 0 4.408 4.408 0 002.508 1.04 4.408 4.408 0 014.043 4.042 4.401 4.401 0 001.039 2.508 4.407 4.407 0 010 5.716 4.407 4.407 0 00-1.04 2.508 4.408 4.408 0 01-4.042 4.043 4.407 4.407 0 00-2.508 1.039 4.407 4.407 0 01-5.716 0 4.407 4.407 0 00-2.508-1.04 4.408 4.408 0 01-4.043-4.042 4.408 4.408 0 00-1.039-2.508 4.407 4.407 0 010-5.716 4.407 4.407 0 001.04-2.508 4.407 4.407 0 014.042-4.043z"
                  fill="#E6E6E6"
                  stroke="#181818"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="square"
                ></path>
                <circle
                  cx="16.5"
                  cy="12.5"
                  r="6.5"
                  fill="#fff"
                  stroke="#181818"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="square"
                ></circle>
                <path
                  d="M14 12l2.5 2.5 5-5.5"
                  stroke="#181818"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
          )}
          <h4 className="leading-1-125 font-semibold text-base pt-4 pb-2">
            {state.sectionTwoActiveTab
              ? "Fund Performance"
              : "Credit Attractiveness"}
          </h4>
          <p className=" text-sm text-scriptbox-gray-5">
            We look at consistent and long historical performance for our
            analysis
          </p>
        </div>
      </div>
    </div>
  );

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  const defaultStyle = {
    transition: `opacity ${300}ms ease-in-out`,
    opacity: 0,
  };

  console.log("state", state);

  const renderAccordian = () => {
    return (
      <>
        <AnimateHeight
          id="example-panel"
          duration={500}
          height={state.activeAccordianElement !== 0 ? 50 : "auto"} // see props documentation below
        >
          <div>
            <div
              onClick={() => onAccordianElementClick(0)}
              className={` cursor-pointer ${
                state.activeAccordianElement === 0 ? "bg-white" : ""
              } rounded-md`}
            >
              <div
                className={`pt-3 pr-3 pl-3 pb-4 font-medium text-scriptbox-gray-3 text-sm`}
              >
                <p className="flex items-center">
                  <img
                    className="w-4 h-4 mr-2"
                    alt="scriptbox"
                    src="https://deploy-preview-52--evergreen-gulp.netlify.app//assets/images/svg/mark.svg"
                  />
                  Recommended
                </p>
              </div>
              <div className="px-3 pb-3 text-sm text-scriptbox-gray-2">
                Scripbox algorithm recommends 2-4 funds for investment for an
                investment asset class such as large cap, diversified, liquid
                etc. When you invest for an objective, the algorithm suggests
                the appropriate asset class and funds.
              </div>
            </div>
          </div>
        </AnimateHeight>
        <AnimateHeight
          id="example-panel"
          duration={500}
          height={state.activeAccordianElement !== 1 ? 50 : "auto"} // see props documentation below
        >
          <div className="border-t">
            <div
              onClick={() => onAccordianElementClick(1)}
              className={` cursor-pointer ${
                state.activeAccordianElement === 1 ? "bg-white" : ""
              } rounded-md`}
            >
              <div
                className={`pt-3 pr-3 pl-3 pb-4 font-medium text-scriptbox-gray-3 text-sm`}
              >
                <p className="flex items-center">
                  <img
                    className="w-4 h-4 mr-2"
                    alt="scriptbox"
                    src="https://deploy-preview-52--evergreen-gulp.netlify.app//assets/images/svg/star-circled.svg"
                  />
                  Top Ranked
                </p>
              </div>
              <div className="px-3 pb-3 text-sm text-scriptbox-gray-2">
                Scripbox algorithm recommends 2-4 funds for investment for an
                investment asset class such as large cap, diversified, liquid
                etc. When you invest for an objective, the algorithm suggests
                the appropriate asset class and funds.
              </div>
            </div>
          </div>
        </AnimateHeight>
        <AnimateHeight
          id="example-panel"
          duration={500}
          height={state.activeAccordianElement !== 2 ? 50 : "auto"} // see props documentation below
        >
          <div className="border-t">
            <div
              onClick={() => onAccordianElementClick(2)}
              className={` cursor-pointer ${
                state.activeAccordianElement === 2 ? "bg-white" : ""
              } rounded-md`}
            >
              <div
                className={`pt-3 pr-3 pl-3 pb-4 font-medium text-scriptbox-gray-3 text-sm`}
              >
                <p className="flex items-center">
                  <img
                    className="w-4 h-4 mr-2"
                    alt="scriptbox"
                    src="https://deploy-preview-52--evergreen-gulp.netlify.app//assets/images/svg/not-recommended.svg"
                  />
                  Not Recommended
                </p>
              </div>
              <div className="px-3 pb-3 text-sm text-scriptbox-gray-2">
                Scripbox algorithm recommends 2-4 funds for investment for an
                investment asset class such as large cap, diversified, liquid
                etc. When you invest for an objective, the algorithm suggests
                the appropriate asset class and funds.
              </div>
            </div>
          </div>
        </AnimateHeight>
      </>
    );
  };

  // MAIN RETURN
  return (
    <section className="pt-24 pb-20 bg-scriptbox-blue-1">
      <div className={`mx-auto ${containerStyles.container}`}>
        <div className="sm:px-2">
        {/* desktop */}
        <div
          className={`lg:hidden grid grid-cols-2 ${styles.section_two_parent_grid}`}
        >
          <div className="max-w-sm">
            {renderHeading()}

            <div className={styles.section_two_desktop_accordian} style={{ maxHeight: 266 }}>
              {renderAccordian()}
            </div>
          </div>
          <div className={`${styles.section_two_right} relative`}>
            {renderRightGrid()}
            {renderTab()}
          </div>
        </div>

        {/* non desktop */}
        <div className="lg:block hidden max-w-2xl mx-auto">
          <div>
            {renderHeading()}
            {renderTab()}
            <div className="flex justify-center">{renderRightGrid()}</div>
            <h6 className=" font-semibold text-sm py-5 text-scriptbox-black text-center">
              What Scripbox recommendations mean?
            </h6>
            <div className="xl:max-w-lg max-w-full mx-auto">
              {renderAccordian()}
            </div>
          </div>
        </div>
        </div>
       
      </div>
    </section>
  );
};

export default SectionTwo;
