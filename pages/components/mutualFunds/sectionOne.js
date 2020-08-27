import React, { useState } from "react";
import styles from "../../../styles/Home.module.css";
import containerStyles from "../../../styles/customContainer.module.css";
import Pagination from "react-js-pagination";

import useFundsList from "../../apiHooks/useFundsList";
import ReactModal from "react-modal";
import axios from "axios";
import Slider from "../common/slider";

const SectionOne = ({ initialFundsList }) => {
  const [text, setText] = useState("");
  const [filter, setFilter] = useState([]);

  const [state, setState] = useState({
    offset: 0,
    limit: 20,
    currentPage: 1,
    subAssetFilter: [],
    moreFilters: false,
    isFilterModalOpen: false,
    isFilterModalBasic: true,
    riskLevel: [],
  });

  const [sliderValue, setSliderValue] = useState(50);

  const { data, isLoading, resolvedData, latestData } = useFundsList(
    state.offset,
    text,
    filter,
    state.subAssetFilter,
    initialFundsList
  );

  const FilterCheckBox = ({ name, value, onChange, checked, renderLabel }) => {
    return (
      <div
        onClick={() => onChange(value)}
        className="flex items-center space-x-2 rounded-md hover:bg-scriptbox-gray-4  cursor-pointer -ml-0375 -mr-0375 p-0375 leading-1-2"
      >
        <input
          type="checkbox"
          className="w-4 h-4 form-checkbox text-scriptbox-blue-6 shadow-3 border-scriptbox-gray-8"
          defaultChecked={checked}
          name={name}
          checked={
            filter.includes(value) || state.subAssetFilter.includes(value)
          }
        />
        {renderLabel ? (
          renderLabel
        ) : (
          <label
            for={name}
            className=" cursor-pointer text-sm text-scriptbox-gray-2"
          >
            {name}
          </label>
        )}
      </div>
    );
  };

  FilterCheckBox.defaultProps = {
    checked: false,
    limit: 20,
    onChange: () => {},
  };

  const AchiveLifeGoalsCard = ({ img, name, wrapperClassName }) => (
    <a href="#" className={wrapperClassName}>
      <div
        className={`rounded-lg py-0-625 px-4 xl:p-0-625 lg:py-0-625 lg:px-4 shadow-1 flex items-center w-full ${styles.achive_life_goals_div} bg-white hover:bg-scriptbox-gray-4 transition ease-in-out duration-150`}
      >
        <figure className="h-10 w-10 mr-3">{img}</figure>
        <p className="font-medium leading-1-2 text-sm text-scriptbox-black-1">
          {name}
        </p>
      </div>
    </a>
  );

  AchiveLifeGoalsCard.defaultProps = {
    wrapperClassName: "",
  };

  const ScripboxPlansCard = ({ img, name, wrapperClassName, description }) => (
    <a href="#" className={wrapperClassName}>
      <div
        className={`${styles.scripbox_plans_card}  w-full text-center py-0-625 px-4 rounded-lg shadow-1 bg-white  hover:bg-scriptbox-gray-4 transition ease-in-out duration-150`}
      >
        <figure className="h-10 w-10 mx-auto">{img}</figure>
        <p className="text-scriptbox-black-1 font-medium leading-1-2 text-sm pt-3 pb-1">
          {name}
        </p>
        <small className="text-scriptbox-gray-5 font-normal leading-1-2 text-0-8125">
          {description}
        </small>
      </div>
    </a>
  );

  ScripboxPlansCard.defaultProps = {
    wrapperClassName: "",
  };

  const renderFundsList = () => {
    if (isLoading) {
      return "Loading...";
    } else {
      return (
        <>
          {resolvedData &&
            resolvedData.results &&
            resolvedData.results.map((item, index) => (
              <>
                <a
                  key={index}
                  href="#"
                  className={`block transition ease-in-out duration-200  ${styles.fund_list_item} relative block`}
                >
                  <div
                    className={`md:px-2 px-0 py-4 flex items-center justify-between ${styles.list_div} min-w-0`}
                  >
                    {/* left side */}
                    <div className="flex items-center min-w-0 flex-my1">
                      <div
                        className={`bg-scriptbox-orange w-1 h-12 rounded-full`}
                      />
                      <figure className="mx-3">
                        <img
                          src={item._source.amc_logo_url}
                          className=" w-8 h-8"
                          alt="scriptbox"
                        />
                      </figure>
                      <div className="min-w-0 flex-my1">
                        <h4
                          className={`leading-1-2 truncate text-scriptbox-black-1 md:text-sm text-base font-semibold`}
                        >
                          {item._source.fund_name}
                        </h4>
                        <div className="pt-3 flex items-center space-x-1">
                          <p className="sm:text-0-8125 text-sm font-normal text-scriptbox-gray-5">
                            Large cap
                          </p>
                          {item._source.sb_view_value !== null &&
                            item._source.sb_view_value ===
                              "Scripbox Recommended" && (
                              <p
                                className={` sm:text-0-8125 text-sm font-normal rounded bg-scriptbox-orange-3 text-scriptbox-orange ${styles.recommended_badge} ${styles.badge_atom}`}
                              >
                                Recommended
                              </p>
                            )}
                          {item._source.sb_view_value !== null &&
                            item._source.sb_view_value === "Top Ranked" && (
                              <p
                                className={`sm:text-0-8125 text-sm font-normal rounded text-scriptbox-green  ${styles.topranked_badge} ${styles.badge_atom}`}
                              >
                                Top Ranked
                              </p>
                            )}
                          {item._source.sb_view_value !== null &&
                            item._source.sb_view_value ===
                              "Not Recommended" && (
                              <p
                                className={`sm:text-0-8125 text-sm font-normal rounded text-scriptbox-red ${styles.notRecommended_badge} ${styles.badge_atom}`}
                              >
                                Not Recommended
                              </p>
                            )}
                        </div>
                      </div>
                    </div>
                    {/* right side */}
                    <div className="px-2 sm:pr-0 flex items-center">
                      <div className="sm:hidden block mr-6">
                        <p className="font-normal text-sm text-scriptbox-black pb-3">
                          {item._source.first_investment_amount} cr
                        </p>
                        <p className="text-sm text-scriptbox-gray-5 font-normal">
                          Fund size
                        </p>
                      </div>
                      <div>
                        <svg
                          class="sparkline-growth"
                          width="64"
                          height="13"
                          stroke-width="2"
                          stroke="blue"
                          fill="rgba(0, 0, 255, .2)"
                        >
                          <path
                            class="sparkline--fill"
                            d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07 V 13 L 4 13 Z"
                            stroke="none"
                          ></path>
                          <path
                            class="sparkline--line"
                            d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07"
                            fill="none"
                          ></path>
                          <line
                            class="sparkline--cursor"
                            x1="-1000"
                            x2="-1000"
                            y1="0"
                            y2="13"
                            stroke-width="2"
                          ></line>
                          <circle
                            class="sparkline--spot"
                            cx="-1000"
                            cy="4.86"
                            r="2"
                          ></circle>
                        </svg>
                        <p className="text-sm text-scriptbox-gray-5 font-normal pt-3">
                          5Y returns
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                {index === 5 && (
                  <div className="hidden md:block px-4 pt-4 pb-0375  bg-scriptbox-gray-1">
                    <h4 className="pb-1 leading-1-15 text-base font-semibold text-scriptbox-black-1">
                      Scripbox Plans
                    </h4>
                    <small className="text-sm text-scriptbox-gray-5 leading-1-2">
                      Our offerings that align with your goals
                    </small>
                    <div className="flex pt-4 space-x-4 w-screen relative -ml-50vw left-50p overflow-scroll pb-0-625">
                      <ScripboxPlansCard
                        wrapperClassName="ml-4"
                        img={
                          <svg
                            className="w-10 h-10"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 34 46"
                            id="growth-fund-filters"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M17.207 1c-2.384 0-4.915.813-6.634 3.182-1.068 1.47-1.828 3.625-2.233 6.485-1.914.662-3.157 1.851-3.781 3.515-.613 1.633-.67 3.406-.143 5.32-.97 1.612-1.51 3.011-1.654 4.186-.23 1.86.106 4.235.575 5.823.767 2.598 2.085 4.961 3.826 6.622 1.641 1.565 3.654 2.515 5.944 2.515h7.828c3.162 0 5.878-2.705 7.558-4.692 1.86-2.2 2.9-4.783 2.9-9.777 0-2.633-.888-4.685-2.625-6.18.412-4.184-.173-7.085-1.562-8.79-1.075-1.32-2.22-2.202-3.414-2.677-.26-2.152-1.198-3.66-2.728-4.582C19.865 1.227 18.68 1 17.207 1z"
                              fill="#ACE0A2"
                              stroke="#54894A"
                              strokeWidth="1.5"
                            ></path>
                            <path
                              d="M16.986 44.91V20.53M1 45.084h31.982M20.935 22.277l-3.949 4.856M12.482 25.783l4.51 3.903v5.603l5.514-6.754"
                              stroke="#54894A"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            ></path>
                          </svg>
                        }
                        name="Life Plans"
                        description="5+ Years"
                      />
                      <ScripboxPlansCard
                        wrapperClassName="ml-4"
                        img={
                          <svg
                            className="w-10 h-10"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 44 43"
                            id="coin-fund-filters"
                          >
                            <path
                              d="M18.876 41.694c9.872 0 17.876-8.004 17.876-17.876 0-9.873-8.004-17.876-17.876-17.876C9.003 5.942 1 13.945 1 23.818c0 9.872 8.003 17.876 17.876 17.876z"
                              fill="#FFE1A8"
                              stroke="#B77A0A"
                              strokeWidth="1.5"
                            ></path>
                            <path
                              d="M30.902 4.165h6.33M34.066 1v6.33M39.438 12.469H43M41.219 10.687v3.563"
                              stroke="#B77A0A"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            ></path>
                            <path
                              d="M21.585 34.135l-7.97-9.389h1.68c3.473 0 6.29-1.83 6.29-4.647s-2.817-4.647-6.29-4.647h-1.68"
                              stroke="#B77A0A"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M13.607 20.107h10.788M13.61 15.443h10.787"
                              stroke="#B77A0A"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            ></path>
                          </svg>
                        }
                        name="Short Term"
                        description="1-2 years"
                      />
                      <ScripboxPlansCard
                        wrapperClassName="ml-4"
                        img={
                          <svg
                            className="w-10 h-10"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 37 42"
                            id="tax-saving-fund-filters"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.174 41.15c-.598 0-1.14-.246-1.535-.64A2.167 2.167 0 011 38.976V2.086l2.956 1.478L7.086 2l3.128 1.564L13.343 2l3.129 1.564L19.6 2l3.129 1.564L25.859 2l3.129 1.564 2.955-1.477-.079 37.16c-.108.132-.302.236-.587.352-.803.33-2.156.606-4.408.843-4.207.443-11.403.708-23.695.708z"
                              fill="#fff"
                              stroke="#5890DA"
                              strokeWidth="1.5"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M36 33.324H5.373v5.078c0 1.572-.65 2.744-2.304 2.744h31.368a1.57 1.57 0 001.565-1.564v-6.258z"
                              fill="#8DBFFF"
                              stroke="#5890DA"
                              strokeWidth="1.5"
                            ></path>
                            <path
                              d="M11.216 24.23L23.95 11.36"
                              stroke="#5890DA"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            ></path>
                            <path
                              d="M18.652 21.802a1.875 1.875 0 100 3.75 1.875 1.875 0 000-3.75zM16.576 9.949a1.875 1.875 0 100 3.75 1.875 1.875 0 000-3.75z"
                              stroke="#5890DA"
                              strokeWidth="1.5"
                            ></path>
                          </svg>
                        }
                        name="Tax Saver"
                        description="3+ years"
                      />
                      <ScripboxPlansCard
                        wrapperClassName="ml-4"
                        img={
                          <svg
                            className="w-10 h-10"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 49 37"
                            id="emergency-fund-filters"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.361 27.854a.33.33 0 00-.323.383l1.162 6.78a1.182 1.182 0 001.166.983h2.845a1.182 1.182 0 001.168-.998l1.066-6.769a.335.335 0 00-.093-.284.33.33 0 00-.234-.097l-6.757.002zM30.152 27.854a.329.329 0 00-.323.383l1.165 6.78a1.182 1.182 0 001.165.983h2.716a1.182 1.182 0 001.166-.981l1.17-6.781a.331.331 0 00-.324-.384h-6.735z"
                              fill="#FFBDBD"
                              stroke="#B26868"
                              strokeWidth="1.5"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.499 1.018l3.649.636a2.471 2.471 0 012.042 2.26l.062.878a25.992 25.992 0 019.874-1.786c10.375 0 18.79 5.069 18.79 14.467 0 9.399-8.413 14.454-18.79 14.454-9.085 0-16.665-3.76-18.41-11.102l-3.831-1.324A1.313 1.313 0 011 18.259v-2.713a1.314 1.314 0 01.893-1.246l4.182-1.414A12.354 12.354 0 019.169 8.05a2.455 2.455 0 01-1.101-1.512l-.98-4.008a1.236 1.236 0 011.41-1.512z"
                              fill="#FFBDBD"
                              stroke="#B26868"
                              strokeWidth="1.5"
                            ></path>
                            <path
                              d="M11.623 14.046a1.446 1.446 0 100-2.89 1.446 1.446 0 000 2.89z"
                              fill="#C56565"
                            ></path>
                            <path
                              d="M20.29 5.938a27.144 27.144 0 018.662.1M42.914 12.886c2.447-.608 4.04-.111 4.778 1.492"
                              stroke="#B26868"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            ></path>
                          </svg>
                        }
                        name="Emergency"
                        description="5+ years"
                      />
                      <div
                        className={`xl:block hidden ${styles.spacing_empty} h-3`}
                      ></div>
                    </div>
                  </div>
                )}
                {index === 10 && (
                  <div className="p-4 bg-scriptbox-gray-1">
                    <h4 className="pb-1 leading-1-15 text-base font-semibold text-scriptbox-black-1">
                      Achieve Life Goals
                    </h4>
                    <small className="text-sm text-scriptbox-gray-5 leading-1-2">
                      Find funds that suit your investment objective
                    </small>
                    <div className="pt-4 flex space-x-4  md:w-screen md:relative md:-ml-50vw md:left-50p md:overflow-scroll md:pb-0-625">
                      <AchiveLifeGoalsCard
                        wrapperClassName="md:ml-4"
                        img={
                          <svg
                            className="h-10 w-10"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 40 40"
                            id="chair"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M33.5 14.3c-.027-.003-.054-.002-.082-.005-.22-6.598-5.652-11.898-12.302-11.898h-3.001c-6.65 0-12.083 5.3-12.303 11.898-.027.003-.054.002-.081.005-1.234.146-.54 6.767 2.08 19.865h23.61C34.04 21.067 34.732 14.446 33.5 14.3z"
                              fill="#E9A97A"
                            ></path>
                            <path
                              d="M9.023 23.603c11.232-2.78 19.97-.377 21.179-.013"
                              stroke="#B66428"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M37.17 17.43c.246 1.515-.458 2.962-1.794 3.686a.463.463 0 00-.243.408v14.962a.724.724 0 01-.723.723h-3.5a.724.724 0 01-.723-.723V18.024a3.52 3.52 0 013.51-3.516 3.5 3.5 0 013.472 2.922zM2.049 17.43c-.246 1.515.458 2.962 1.794 3.686.15.081.242.238.242.408v14.962c0 .399.325.723.723.723h3.5a.724.724 0 00.723-.723V18.024a3.52 3.52 0 00-3.944-3.49 3.5 3.5 0 00-3.038 2.896z"
                              fill="#E6965B"
                              stroke="#B66428"
                              stroke-width="1.5"
                            ></path>
                            <path
                              d="M5.998 13.612C6.228 7.17 11.536 2 18.032 2h3.162c6.497 0 11.805 5.17 12.034 11.612"
                              stroke="#B66428"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            ></path>
                            <path
                              clip-rule="evenodd"
                              d="M8.773 34.269h21.179H8.773z"
                              stroke="#B66428"
                              stroke-width="1.5"
                            ></path>
                          </svg>
                        }
                        name="Retire Confidently"
                      />
                      <AchiveLifeGoalsCard
                        img={
                          <svg
                            className="h-10 w-10"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 40 40"
                            id="paper-diploma"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M32.778 27.998c0 2.61-2.114 4.746-4.698 4.746H12.11c-2.584 0-4.698-2.135-4.698-4.746V16.851h25.366v11.147z"
                              fill="#93B4FF"
                              stroke="#5A82DF"
                              stroke-width="1.5"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M20.1 22.445L1.286 15.44a.44.44 0 01.008-.828L20.15 8l18.66 6.562a.44.44 0 01.008.827L20.1 22.445z"
                              fill="#BDD1FF"
                              stroke="#5A82DF"
                              stroke-width="1.5"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M37.834 15.848v12.07"
                              stroke="#5A82DF"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            ></path>
                          </svg>
                        }
                        name="Child Education"
                      />
                      <AchiveLifeGoalsCard
                        img={
                          <svg
                            className="h-10 w-10"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 40 40"
                            id="cloud"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M26.44 23.637c-.224.135.991-.15 3.094-.15 3.489 0 6.352 2.771 6.352 6.126 0 3.398-2.863 6.172-6.352 6.172H7.351C3.863 35.785 1 33.013 1 29.659c0-3.233 2.592-5.862 5.849-6.108.165-.011.629-1.09.495-1.078 1.162-3.846 4.919-6.575 9.436-6.575 4.964 0 9.035 3.31 9.66 7.737v.002z"
                              fill="#B1ACF5"
                            ></path>
                            <path
                              d="M35.598 6.042c-3.65-.222-6.79.456-9.053 1.624-3.458 1.784-6.537 4.947-8 8.359m20.412-5.648a14.84 14.84 0 00-10.778 1.306 14.265 14.265 0 00-5.912 6.042m14.06-3.428c-2.618-.246-4.65.11-7.006 1.536-1.8 1.1-3.234 2.783-4.16 4.787"
                              stroke="#6F66D1"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            ></path>
                            <path
                              d="M7.023 22.788c1.163-3.846 4.92-6.574 9.437-6.574 4.964 0 9.034 3.31 9.66 7.737"
                              stroke="#6F66D1"
                              stroke-width="1.3"
                              stroke-linecap="round"
                            ></path>
                            <path
                              d="M24.255 26.144c1.163-1.7 3.175-2.727 5.28-2.727 3.488 0 6.35 2.771 6.35 6.125 0 3.399-2.862 6.172-6.35 6.172H7.35C3.863 35.714 1 32.943 1 29.59c0-3.399 2.863-6.126 6.351-6.126 1.925 0 3.712.85 4.92 2.28"
                              stroke="#6F66D1"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            ></path>
                          </svg>
                        }
                        name="Dream Planner"
                      />
                      <AchiveLifeGoalsCard
                        img={
                          <svg
                            className="h-10 w-10"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 40 40"
                            id="diamond"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M32.053 6.143l-4.79 7.15-7.28-7.15h12.07zM18.69 6.399l-7.254 6.753L6.62 6.4H18.69z"
                              fill="#E9F1FC"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M32.527 6.599l4.818 6.603H28.08l4.447-6.603z"
                              fill="#AED1FD"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M1.38 13.99h9.963l6.765 17.504L1.381 13.991z"
                              fill="#8DBFFF"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.2 6.583l4.518 6.752H1.682L6.2 6.583zM19.555 32.29l-7.768-18.793h15.328l-7.56 18.794z"
                              fill="#AED1FD"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M20.2 32.648l7.38-18.517h10.104L20.199 32.648z"
                              fill="#8DBFFF"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M19.412 6.399l6.884 6.936h-13.64l6.756-6.937z"
                              fill="#CCE2FF"
                            ></path>
                            <path
                              d="M1.682 13.732h35.664"
                              stroke="#5890DA"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            ></path>
                            <path
                              d="M6.5 6.232l4.975 7.5 8.081 19.399 7.77-19.399 4.999-7.5"
                              stroke="#5890DA"
                              stroke-width="1.5"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M11.68 13.732L19.41 6l7.913 7.732"
                              stroke="#5890DA"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              clip-rule="evenodd"
                              d="M19.555 33.484l18.588-19.752L32.537 6H6.32L1 13.732l18.555 19.752z"
                              stroke="#5890DA"
                              stroke-width="1.5"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        }
                        name="My First Core"
                      />
                      <div
                        className={`xl:block hidden ${styles.spacing_empty} h-3`}
                      ></div>
                    </div>
                  </div>
                )}
              </>
            ))}
        </>
      );
    }
  };

  const renderBasicFilters = () => (
    <>
      <div className="py-4">
        <p className="font-semibold text-sm text-scriptbox-black-1 pb-2">
          Scripbox Verdict
        </p>
        <div>
          <FilterCheckBox
            name="Recommended"
            value="Recommended"
            renderLabel={
              <p
                className={`text-sm font-normal rounded bg-scriptbox-orange-3 text-scriptbox-orange ${styles.recommended_badge} ${styles.badge_atom}`}
              >
                Recommended
              </p>
            }
            // onChange={(value) => {
            //   if (filter.includes(value)) {
            //     setFilter(filter.filter(item => item !== value))
            //   } else {
            //     setFilter(filter.concat(value))
            //   }
            // }}
          />
          <FilterCheckBox
            name="Top Ranked"
            value="Top Ranked"
            renderLabel={
              <p
                className={`text-sm font-normal rounded text-scriptbox-green  ${styles.topranked_badge} ${styles.badge_atom}`}
              >
                Top Ranked
              </p>
            }
            // onChange={(value) => {
            //   if (filter.includes(value)) {
            //     setFilter(filter.filter(item => item !== value))
            //   } else {
            //     setFilter(filter.concat(value))
            //   }
            // }}
          />
          <FilterCheckBox
            name="Not Recommended"
            value="Not Recommended"
            renderLabel={
              <p
                className={`text-sm font-normal rounded text-scriptbox-red ${styles.notRecommended_badge} ${styles.badge_atom}`}
              >
                Not Recommended
              </p>
            }
            // onChange={(value) => {
            //   if (filter.includes(value)) {
            //     setFilter(filter.filter(item => item !== value))
            //   } else {
            //     setFilter(filter.concat(value))
            //   }
            // }}
          />
        </div>
      </div>

      <div className="py-4">
        <p className="font-semibold text-sm text-scriptbox-black-1 pb-2">
          Fund Category
        </p>
        <div>
          <FilterCheckBox
            name="Equity"
            value="Equity"
            onChange={(value) => {
              if (filter.includes(value)) {
                setFilter(filter.filter((item) => item !== value));
              } else {
                setFilter(filter.concat(value));
              }
            }}
          />
          <FilterCheckBox
            name="Debt"
            value="Debt"
            onChange={(value) => {
              if (filter.includes(value)) {
                setFilter(filter.filter((item) => item !== value));
              } else {
                setFilter(filter.concat(value));
              }
            }}
          />
          <FilterCheckBox
            name="Hybrid"
            value="Hybrid"
            onChange={(value) => {
              if (filter.includes(value)) {
                setFilter(filter.filter((item) => item !== value));
              } else {
                setFilter(filter.concat(value));
              }
            }}
          />
          <FilterCheckBox
            name="International Equity"
            value="International Equity"
            onChange={(value) => {
              if (filter.includes(value)) {
                setFilter(filter.filter((item) => item !== value));
              } else {
                setFilter(filter.concat(value));
              }
            }}
          />
        </div>
      </div>
      <div className="py-4">
        <div className="flex items-center justify-between pb-5">
          <p className="text-sm leading-1-2 font-medium text-scriptbox-black-1">
            Minimum Investment
          </p>
          <p className="text-scriptbox-blue text-sm leading-1-2 font-medium">
            ₹{sliderValue * 100}+
          </p>
        </div>
        <Slider
          value={sliderValue}
          onChange={(value) => setSliderValue(value)}
        />
      </div>
      <div className="py-4">
        <p className="font-semibold text-sm text-scriptbox-black-1 pb-2">
          Fund House
        </p>
        <div>
          <FilterCheckBox
            name="Aditya Birla Mutual Fund"
            value="Aditya Birla Mutual Fund"
            // onChange={(value) => {
            //   if (filter.includes(value)) {
            //     setFilter(filter.filter(item => item !== value))
            //   } else {
            //     setFilter(filter.concat(value))
            //   }
            // }}
          />
          <FilterCheckBox
            name="HDFC Mutual Fund"
            value="HDFC Mutual Fund"
            // onChange={(value) => {
            //   if (filter.includes(value)) {
            //     setFilter(filter.filter(item => item !== value))
            //   } else {
            //     setFilter(filter.concat(value))
            //   }
            // }}
          />
          <FilterCheckBox
            name="Birla Mutual Fund"
            value="Birla Mutual Fund"
            // onChange={(value) => {
            //   if (filter.includes(value)) {
            //     setFilter(filter.filter(item => item !== value))
            //   } else {
            //     setFilter(filter.concat(value))
            //   }
            // }}
          />
          <FilterCheckBox
            name="Aditya Birla Mutual Fund"
            value="Aditya Birla Mutual Fund"
            // onChange={(value) => {
            //   if (filter.includes(value)) {
            //     setFilter(filter.filter(item => item !== value))
            //   } else {
            //     setFilter(filter.concat(value))
            //   }
            // }}
          />
        </div>
      </div>
    </>
  );

  const RiskCheckBox = ({ number, img, name }) => (
    <div
      onClick={() => {
        if (!state.riskLevel.includes(number)) {
          setState({ ...state, riskLevel: state.riskLevel.concat(number) });
        } else {
          setState({
            ...state,
            riskLevel: state.riskLevel.filter((item) => item !== number),
          });
        }
      }}
      className={`${
        state.riskLevel.includes(number)
          ? `border-2 border-scriptbox-blue ${styles.risk_level}`
          : "border-2 border-white"
      }  relative cursor-pointer text-center w-24 p-0-625 rounded-lg bg-white shadow-1`}
    >
      {img}
      <p className=" text-scriptbox-black-1 font-medium leading-1-2 text-sm pt-2">
        {name}
      </p>
    </div>
  );

  const renderRiskLevelFilter = () => {
    if (state.isFilterModalOpen) {
      return (
        <div className="flex items-center space-x-4">
          <RiskCheckBox
            number={0}
            img={
              <svg
                className="h-10 w-10 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 40 40"
                id="risk-level-low"
              >
                <g clip-path="url(#eqclip0)">
                  <path
                    d="M36.18 36.756a19.999 19.999 0 003.466-15.504l-4.912.937a15 15 0 01-2.599 11.628l4.045 2.939zM39.349 19.938A20 20 0 0029.555 7.43l-2.389 4.393a15 15 0 017.346 9.38l4.837-1.265zM27.9 6.627a20 20 0 00-15.885.036l1.996 4.584a15 15 0 0111.915-.027L27.9 6.627z"
                    fill="#E6E6E6"
                  ></path>
                  <path
                    d="M10.597 7.348A20 20 0 00.696 19.771l4.826 1.307a15 15 0 017.426-9.317l-2.35-4.413z"
                    fill="#E5E5E5"
                  ></path>
                  <path
                    d="M.331 21.375a20 20 0 003.562 15.481l4.027-2.964a15 15 0 01-2.672-11.61l-4.917-.907z"
                    fill="#13DCAA"
                  ></path>
                  <path
                    d="M24.38 28.923c-.157 2.753-2.618 4.86-5.486 4.699-2.87-.162-11.634-5.594-11.634-5.594s9.332-4.552 12.2-4.39c2.869.162 5.076 2.533 4.92 5.285z"
                    fill="#737373"
                  ></path>
                </g>
              </svg>
            }
            name="Low"
          />
          <RiskCheckBox
            number={1}
            img={
              <svg
                className="h-10 w-10 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 40 40"
                id="risk-level-moderately-low"
              >
                <g clip-path="url(#etclip0)">
                  <path
                    d="M36.18 36.756a19.999 19.999 0 003.466-15.504l-4.912.937a15 15 0 01-2.599 11.628l4.045 2.939zM39.349 19.938A20 20 0 0029.555 7.43l-2.389 4.393a15 15 0 017.346 9.38l4.837-1.265zM27.9 6.627a20 20 0 00-15.885.036l1.996 4.584a15 15 0 0111.915-.027L27.9 6.627z"
                    fill="#E6E6E6"
                  ></path>
                  <path
                    d="M10.597 7.348A20 20 0 00.696 19.771l4.826 1.307a15 15 0 017.426-9.317l-2.35-4.413z"
                    fill="#F6E05E"
                  ></path>
                  <path
                    d="M.331 21.375a20 20 0 003.562 15.481l4.027-2.964a15 15 0 01-2.672-11.61l-4.917-.907z"
                    fill="#E5E5E5"
                  ></path>
                  <path
                    d="M23.883 31.205c-1.969 1.93-5.208 1.83-7.22-.22-2.012-2.052-4.834-11.97-4.834-11.97s9.964 2.919 11.976 4.97c2.012 2.051 2.047 5.29.078 7.22z"
                    fill="#737373"
                  ></path>
                </g>
              </svg>
            }
            name="Low"
          />
          <RiskCheckBox
            number={2}
            img={
              <svg
                className="h-10 w-10 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 40 40"
                id="risk-level-medium"
              >
                <g clip-path="url(#erclip0)">
                  <path
                    d="M36.18 36.756a19.999 19.999 0 003.466-15.504l-4.912.937a15 15 0 01-2.599 11.628l4.045 2.939z"
                    fill="#E6E6E6"
                  ></path>
                  <path
                    d="M39.349 19.938A20 20 0 0029.555 7.43l-2.389 4.393a15 15 0 017.346 9.38l4.837-1.265z"
                    fill="#E5E5E5"
                  ></path>
                  <path
                    d="M27.9 6.627a20 20 0 00-15.885.036l1.996 4.584a15 15 0 0111.915-.027L27.9 6.627z"
                    fill="#F6AD55"
                  ></path>
                  <path
                    d="M10.597 7.348A20 20 0 00.696 19.771l4.826 1.307a15 15 0 017.426-9.317l-2.35-4.413zM.331 21.375a20 20 0 003.562 15.481l4.027-2.964a15 15 0 01-2.672-11.61l-4.917-.907z"
                    fill="#E6E6E6"
                  ></path>
                  <path
                    d="M19.979 33.143c-2.757-.012-4.99-2.36-4.979-5.233.012-2.873 4.979-11.91 4.979-11.91S25.012 25.081 25 27.954c-.012 2.873-2.265 5.201-5.021 5.189z"
                    fill="#737373"
                  ></path>
                </g>
              </svg>
            }
            name="Medium"
          />
          <RiskCheckBox
            number={3}
            img={
              <svg
                className="h-10 w-10 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 40 40"
                id="risk-level-moderately-high"
              >
                <g clip-path="url(#esclip0)">
                  <path
                    d="M36.18 36.756a19.999 19.999 0 003.466-15.504l-4.912.937a15 15 0 01-2.599 11.628l4.045 2.939z"
                    fill="#E5E5E5"
                  ></path>
                  <path
                    d="M39.349 19.938A20 20 0 0029.555 7.43l-2.389 4.393a15 15 0 017.346 9.38l4.837-1.265z"
                    fill="#F58024"
                  ></path>
                  <path
                    d="M27.9 6.627a20 20 0 00-15.885.036l1.996 4.584a15 15 0 0111.915-.027L27.9 6.627zM10.597 7.348A20 20 0 00.696 19.771l4.826 1.307a15 15 0 017.426-9.317l-2.35-4.413zM.331 21.375a20 20 0 003.562 15.481l4.027-2.964a15 15 0 01-2.672-11.61l-4.917-.907z"
                    fill="#E6E6E6"
                  ></path>
                  <path
                    d="M16.606 30.943c1.885 2.011 5.125 2.05 7.222.086 2.097-1.963 5.339-11.752 5.339-11.752s-10.08 2.492-12.177 4.456c-2.097 1.963-2.27 5.198-.384 7.21z"
                    fill="#737373"
                  ></path>
                </g>
              </svg>
            }
            name="High"
          />
          <RiskCheckBox
            number={4}
            img={
              <svg
                className="h-10 w-10 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 40 40"
                id="risk-level-high"
              >
                <g clip-path="url(#epclip0)">
                  <path
                    d="M36.18 36.756a19.999 19.999 0 003.466-15.504l-4.912.937a15 15 0 01-2.599 11.628l4.045 2.939z"
                    fill="#E53E3E"
                  ></path>
                  <path
                    d="M39.349 19.938A20 20 0 0029.555 7.43l-2.389 4.393a15 15 0 017.346 9.38l4.837-1.265z"
                    fill="#E5E5E5"
                  ></path>
                  <path
                    d="M27.9 6.627a20 20 0 00-15.885.036l1.996 4.584a15 15 0 0111.915-.027L27.9 6.627zM10.597 7.348A20 20 0 00.696 19.771l4.826 1.307a15 15 0 017.426-9.317l-2.35-4.413zM.331 21.375a20 20 0 003.562 15.481l4.027-2.964a15 15 0 01-2.672-11.61l-4.917-.907z"
                    fill="#E6E6E6"
                  ></path>
                  <path
                    d="M15.064 28.896c.302 2.74 2.871 4.715 5.727 4.402 2.856-.314 11.32-6.203 11.32-6.203s-9.56-4.05-12.415-3.737c-2.856.313-4.934 2.798-4.632 5.538z"
                    fill="#737373"
                  ></path>
                </g>
              </svg>
            }
            name="High"
          />
        </div>
      );
    } else {
      return (
        <div>
          <FilterCheckBox
            name="Low"
            value="Low"
            // onChange={(value) => {
            //   if (state.subAssetFilter.includes(value)) {
            //     setState({ ...state, subAssetFilter: state.subAssetFilter.filter(item => item !== value) })
            //   } else {
            //     setState({ ...state, subAssetFilter: state.subAssetFilter.concat(value) })

            //   }
            // }}
          />
          <FilterCheckBox
            name="Medium"
            value="Medium"
            // onChange={(value) => {
            //   if (state.subAssetFilter.includes(value)) {
            //     setState({ ...state, subAssetFilter: state.subAssetFilter.filter(item => item !== value) })
            //   } else {
            //     setState({ ...state, subAssetFilter: state.subAssetFilter.concat(value) })

            //   }
            // }}
          />
          <FilterCheckBox
            name="High"
            value="High"
            // onChange={(value) => {
            //   if (state.subAssetFilter.includes(value)) {
            //     setState({ ...state, subAssetFilter: state.subAssetFilter.filter(item => item !== value) })
            //   } else {
            //     setState({ ...state, subAssetFilter: state.subAssetFilter.concat(value) })

            //   }
            // }}
          />
        </div>
      );
    }
  };

  const renderAdvancedFilters = () => (
    <>
      <div className="py-4">
        <p className="font-semibold text-sm text-scriptbox-black-1 pb-2">
          Risk Level
        </p>
        {renderRiskLevelFilter()}
      </div>
      <div className="py-4">
        <p className="font-semibold text-sm text-scriptbox-black-1 pb-2">
          Fund Option
        </p>
        <div>
          <FilterCheckBox
            name="Divided Payout"
            value="Divided Payout"
            // onChange={(value) => {
            //   if (state.subAssetFilter.includes(value)) {
            //     setState({ ...state, subAssetFilter: state.subAssetFilter.filter(item => item !== value) })
            //   } else {
            //     setState({ ...state, subAssetFilter: state.subAssetFilter.concat(value) })

            //   }
            // }}
          />
          <FilterCheckBox
            name="Divided Reinvestment"
            value="Divided Reinvestment"
            // onChange={(value) => {
            //   if (state.subAssetFilter.includes(value)) {
            //     setState({ ...state, subAssetFilter: state.subAssetFilter.filter(item => item !== value) })
            //   } else {
            //     setState({ ...state, subAssetFilter: state.subAssetFilter.concat(value) })

            //   }
            // }}
          />
          <FilterCheckBox
            name="Reinventment"
            value="Reinventment"
            // onChange={(value) => {
            //   if (state.subAssetFilter.includes(value)) {
            //     setState({ ...state, subAssetFilter: state.subAssetFilter.filter(item => item !== value) })
            //   } else {
            //     setState({ ...state, subAssetFilter: state.subAssetFilter.concat(value) })

            //   }
            // }}
          />
        </div>
      </div>
      <div className="py-4">
        <p className="font-semibold text-sm text-scriptbox-black-1 pb-2">
          Sub Category
        </p>
        <div>
          <FilterCheckBox
            name="Large Cap"
            value="Large Cap"
            onChange={(value) => {
              if (state.subAssetFilter.includes(value)) {
                setState({
                  ...state,
                  subAssetFilter: state.subAssetFilter.filter(
                    (item) => item !== value
                  ),
                });
              } else {
                setState({
                  ...state,
                  subAssetFilter: state.subAssetFilter.concat(value),
                });
              }
            }}
          />
          <FilterCheckBox
            name="Mid Cap"
            value="Mid Cap"
            onChange={(value) => {
              if (state.subAssetFilter.includes(value)) {
                setState({
                  ...state,
                  subAssetFilter: state.subAssetFilter.filter(
                    (item) => item !== value
                  ),
                });
              } else {
                setState({
                  ...state,
                  subAssetFilter: state.subAssetFilter.concat(value),
                });
              }
            }}
          />
          <FilterCheckBox
            name="Small Cap"
            value="Small Cap"
            onChange={(value) => {
              if (state.subAssetFilter.includes(value)) {
                setState({
                  ...state,
                  subAssetFilter: state.subAssetFilter.filter(
                    (item) => item !== value
                  ),
                });
              } else {
                setState({
                  ...state,
                  subAssetFilter: state.subAssetFilter.concat(value),
                });
              }
            }}
          />
          <FilterCheckBox
            name="Sectoral / Thematic"
            value="Sectoral / Thematic - BFSI"
            onChange={(value) => {
              if (state.subAssetFilter.includes(value)) {
                setState({
                  ...state,
                  subAssetFilter: state.subAssetFilter.filter(
                    (item) => item !== value
                  ),
                });
              } else {
                setState({
                  ...state,
                  subAssetFilter: state.subAssetFilter.concat(value),
                });
              }
            }}
          />
        </div>
      </div>
      <div className="py-4">
        <p className="font-semibold text-sm text-scriptbox-black-1 pb-2">
          Fund Size
        </p>
        <div>
          <FilterCheckBox
            name="Below 500 Crores"
            value="Below 500 Crores"
            // onChange={(value) => {
            //   if (state.subAssetFilter.includes(value)) {
            //     setState({ ...state, subAssetFilter: state.subAssetFilter.filter(item => item !== value) })
            //   } else {
            //     setState({ ...state, subAssetFilter: state.subAssetFilter.concat(value) })

            //   }
            // }}
          />
          <FilterCheckBox
            name="500 - 1000 Crores"
            value="500 - 1000 Crores"
            // onChange={(value) => {
            //   if (state.subAssetFilter.includes(value)) {
            //     setState({ ...state, subAssetFilter: state.subAssetFilter.filter(item => item !== value) })
            //   } else {
            //     setState({ ...state, subAssetFilter: state.subAssetFilter.concat(value) })

            //   }
            // }}
          />
          <FilterCheckBox
            name="Above 1000 Crores"
            value="Above 1000 Crores"
            // onChange={(value) => {
            //   if (state.subAssetFilter.includes(value)) {
            //     setState({ ...state, subAssetFilter: state.subAssetFilter.filter(item => item !== value) })
            //   } else {
            //     setState({ ...state, subAssetFilter: state.subAssetFilter.concat(value) })

            //   }
            // }}
          />
        </div>
      </div>

      <div className="py-4">
        <input
          className={`h-8 rounded-md shadow-1 p-1 mr-3`}
          placeholder="search"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </>
  );

  const renderFundsFilter = () => {
    if (!state.moreFilters) {
      // show first set  filters
      return renderBasicFilters();
    } else {
      // show second set  filters
      return renderAdvancedFilters();
    }
  };

  const RenderSortBySelect = ({ wrapperClassName }) => (
    <select
      className={`${wrapperClassName} ${styles.sortby_select} h-8 leading-1-2 py-2 pr-6 pl-3 text-sm bg-white text-scriptbox-gray-3 font-medium border-none rounded-md cursor-pointer`}
    >
      <option>Recommended</option>
      <option>Track Record</option>
      <option>Relative Size</option>
      <option>Catogory View</option>
      <option>Consistancy</option>
    </select>
  );

  RenderSortBySelect.defaultProps = {
    wrapperClassName: "",
  };

  const RenderFilterTag = () => (
    <div
      className={`${styles.filter_tag} h-8 flex items-center py-2 px-3 shadow-1 text-sm bg-white text-scriptbox-gray-3 font-medium border-none rounded-md cursor-pointer`}
    >
      Tata Mutual Fund
      <figure className="pl-0375">
        <svg
          className="w-3 h-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 12 12"
          id="close-icon-gray"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.433 2.44a.624.624 0 01.883 0l2.68 2.684 2.68-2.683a.624.624 0 11.883.884L6.88 6.008l2.68 2.683a.625.625 0 01-.882.884L5.997 6.89 3.315 9.575a.624.624 0 01-.883-.884l2.68-2.683-2.68-2.683a.625.625 0 010-.884z"
            fill="#737373"
          ></path>
        </svg>
      </figure>
    </div>
  );

  return (
    // <section className={`sm:px-2 lg:px-4 xl:px-4 sm:pt-4 pb-20  bg-scriptbox-gray-1`}>
    <section className={`sm:pt-0 pt-4 pb-20  bg-scriptbox-gray-1`}>
      <div className={`mx-auto ${containerStyles.container}`}>
        <div className={`flex  ${styles.funds_filter_wrapper}`}>
          {/* funds filters */}
          <div className={`lg:hidden block mr-12 max-w-1/4 min-w-1/4 w-full`}>
            <div className="sticky top-0  divide-y ">
              <div className="pb-4 pt-2 flex items-center justify-between">
                <p className="text-base font-medium text-scriptbox-gray-2">
                  Filters
                </p>

                <div
                  className="relative"
                  onClick={() => {
                    setFilter([]);
                    setState({ ...state, subAssetFilter: [] });
                  }}
                >
                  <span className="bg-scriptbox-gray-4 py-2 pl-2 pr-8 text-xs font-medium rounded-md text-scriptbox-gray-3 leading-1-2">
                    Reset Filters
                  </span>
                  <span
                    className={`absolute text-scriptbox-gray-3 bg-scriptbox-gray-6 font-medium text-xs py-0-125 px-0375 rounded-md leading-1-2 ${styles.reset_filters_count}`}
                  >
                    {filter.length + state.subAssetFilter.length}
                  </span>
                </div>
              </div>
              {renderFundsFilter()}
              <div className="py-4">
                <p
                  className={`relative -mx-0375 py-0-125 pr-0375 pl-8 ${
                    !state.moreFilters
                      ? styles.advanced_filters
                      : styles.back_filters
                  } text-sm text-scriptbox-blue font-medium relative hover:bg-scriptbox-gray-4 rounded-md cursor-pointer`}
                  onClick={() =>
                    setState({ ...state, moreFilters: !state.moreFilters })
                  }
                >
                  {!state.moreFilters
                    ? "Show Advanced Filters"
                    : "Back To Basic Filters"}
                </p>
              </div>
            </div>
          </div>

          {/* funds list section */}
          <div className="w-full pt-2 max-w-3/4 lg:max-w-full min-w-0">
            <div className="lg:hidden flex sm:pb-0 pb-3 items-center justify-between">
              <p className="font-medium text-base text-scriptbox-gray-2">
                Showing{" "}
                {resolvedData &&
                  resolvedData.results &&
                  resolvedData.results.length}{" "}
                of {resolvedData && resolvedData.total && resolvedData.total}{" "}
                funds
              </p>
              <div className="flex items-center">
                <p className="text-xs text-scriptbox-gray-2 mr-2">Sort by</p>
                <RenderSortBySelect />
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-3 w-screen relative -ml-50vw left-50p overflow-scroll pb-3 pt-1">
              <RenderSortBySelect wrapperClassName="ml-3" />
              <RenderFilterTag />
              <RenderFilterTag />
              <RenderFilterTag />
              <RenderFilterTag />
              <RenderFilterTag />
              <RenderFilterTag />
            </div>

            <div
              className={`sm:py-0 py-2 px-6 md:px-0 bg-white rounded-lg md:rounded-none shadow-4 :shadow-none`}
            >
              {renderFundsList()}
            </div>
            <div className="sm:px-4 px-0 flex justify-between mt-6 overflow-x-scroll">
              <button
                className={`py-2 px-4 bg-white rounded-md hover:bg-scriptbox-gray-4 text-scriptbox-gray-2 text-sm ${styles.pagination_button}`}
                onClick={() =>
                  setState({
                    ...state,
                    offset: state.offset - state.limit,
                    currentPage: state.currentPage - 1,
                  })
                }
                disabled={state.offset === 0}
              >
                Previous
              </button>
              <span className="sm:hidden block">
                <Pagination
                  innerClass={styles.pagination_div}
                  activeClass={styles.pagination_active}
                  itemClass={styles.pagination_item}
                  itemClassFirst="rounded-l-md"
                  itemClassLast={`rounded-r-md ${styles.pagination_last}`}
                  itemClassPrev="hidden"
                  itemClassNext="hidden"
                  activePage={state.currentPage}
                  itemsCountPerPage={state.limit}
                  totalItemsCount={
                    resolvedData && resolvedData.total && resolvedData.total
                  }
                  pageRangeDisplayed={5}
                  onChange={(page) => {
                    if (page === 1) {
                      setState({ ...state, offset: 0, currentPage: 1 });
                    } else {
                      setState({
                        ...state,
                        offset: (page - 1) * state.limit,
                        currentPage: page,
                      });
                    }
                  }}
                />
              </span>

              <button
                className={`py-2 px-4 bg-white rounded-md hover:bg-scriptbox-gray-4 text-scriptbox-gray-2 text-sm ${styles.pagination_button}`}
                onClick={() =>
                  setState({
                    ...state,
                    offset: state.offset + state.limit,
                    currentPage: state.currentPage + 1,
                  })
                }
              >
                Next
              </button>
            </div>
          </div>
        </div>
        {!state.isFilterModalOpen && (
          <button
            className={`lg:block hidden px-4 py-3 rounded-md shadow-4 z-10 bg-scriptbox-black text-sm font-medium text-white fixed  bottom-1 ${styles.addfilter_button}`}
            onClick={() => setState({ ...state, isFilterModalOpen: true })}
          >
            Add Filter
          </button>
        )}
      </div>

      <ReactModal
        isOpen={state.isFilterModalOpen}
        style={{
          content: {
            height: "100vh",
            width: "100vw",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            padding: "0",
            border: "0",
            borderRadius: "0",
            overflow: "hidden",
          },
        }}
      >
        <header className=" flex items-center justify-between px-4 py-2 bg-scriptbox-black">
          <button
            className={`${styles.filter_modal_back}`}
            onClick={() => setState({ ...state, isFilterModalOpen: false })}
          />

          <h2 className="text-white font-semibold text-base">Filter Results</h2>

          <button className="text-white bg-scriptbox-gray-3 px-1 text-sm rounded-md">
            Reset
          </button>
        </header>
        <div className="flex items-center">
          <div
            className={`cursor-pointer w-1/2 py-3 text-center ${
              state.isFilterModalBasic
                ? "border-b border-scriptbox-blue text-scriptbox-blue"
                : "border-b text-scriptbox-gray-5"
            } font-semibold`}
            onClick={() => setState({ ...state, isFilterModalBasic: true })}
          >
            Basic
          </div>

          <div
            className={`cursor-pointer w-1/2 py-3 text-center ${
              !state.isFilterModalBasic
                ? "border-b border-scriptbox-blue text-scriptbox-blue"
                : "border-b text-scriptbox-gray-5"
            } font-semibold`}
            onClick={() => setState({ ...state, isFilterModalBasic: false })}
          >
            Advanced
          </div>
        </div>
        <div className={`${styles.filter_modal_body} px-4 overflow-scroll`}>
          {state.isFilterModalBasic
            ? renderBasicFilters()
            : renderAdvancedFilters()}
        </div>

        <div className="fixed bottom-1 w-full px-4">
          <button
            className="text-white font-semibold text-base rounded-md p-4 bg-scriptbox-black w-full"
            onClick={() => setState({ ...state, isFilterModalOpen: false })}
          >
            Showing{" "}
            {resolvedData &&
              resolvedData.results &&
              resolvedData.results.length}{" "}
            of {resolvedData && resolvedData.total && resolvedData.total} funds
          </button>
        </div>
      </ReactModal>
    </section>
  );
};

export default SectionOne;
