import { useState } from "react";
import Head from "next/head";
import styles from "../../../styles/Home.module.css";

import Layout from "../layout";
import Link from "next/link";
import { useQuery } from "react-query";
import axios from "axios";
import useFundsList from "../../apiHooks/useFundsList";
import Pagination from "react-js-pagination";
import ReactModal from "react-modal";
import SectionOne from "./sectionOne";

import SectionTwo from "./sectionTwo";
import SectionThree from "./sectionThree";
import SectionFour from "./sectionFour";
import SectionFive from "./sectionFive";

const Home = ({ initialFundsList }) => {
  const FundsCard = ({ figure, title, description, label }) => (
    <Link href="/">
      <a className="mr-2.25">
        <div
          className={`${styles.fund_card_container} relative p-3 bg-white rounded-lg hover:bg-scriptbox-gray-4 max-w-12 min-w-12 shadow-1`}
        >
          <figure>{figure}</figure>
          <h4 className="pt-3 pb-1 text-base font-semibold">{title}</h4>
          <p className="text-scriptbox-gray-3 text-sm font-normal leading-normal">
            {description}
          </p>

          {label}
        </div>
      </a>
    </Link>
  );

  return (
    <Layout>
      <div className="bg-scriptbox-gray-1">
        <section className="pt-16 px-2 lg:px-4 max-w-screen-lg mx-auto bg-scriptbox-gray-1">
          <ul className="flex items-center">
            <li className={`${styles.breadcrumb_list_item} flex relative pr-6`}>
              <Link href="/">
                <a>
                  <figure>
                    <img src="https://deploy-preview-52--evergreen-gulp.netlify.app/assets/images/svg/home-icon.svg"></img>
                  </figure>
                </a>
              </Link>
            </li>
            <li className={`flex relative pr-6`}>
              <span
                className={`text-sm text-scriptbox-black bg-white ${styles.breadcrum}`}
              >
                Mutual funds
              </span>
            </li>
          </ul>
          <h1 className="text-4xl font-bold py-3">Mutual Funds</h1>
          <p className="text-lg text-scriptbox-gray-2 max-w-lg font-normal leading-7">
            Invest in the best mutual funds recommended by Scripbox that are
            algorithmically selected that best suit your needs.
          </p>
          {/* funds card */}
          <div className="pt-6 pb-4 hidden sm:flex items-center overflow-x-scroll pl-1">
            <FundsCard
              figure={
                <svg
                  className="w-8 h-12"
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
              title="Long term funds"
              description="Top equity mutual funds for long-term goals"
              label={
                <div
                  className={`absolute right-0 bg-scriptbox-green-3 text-scriptbox-green-2 text-xs font-medium top-0.75 py-0.31 pr-0.375 pl-4  leading-1.2 ${styles.funds_card_label}`}
                >
                  <p>5+ years</p>
                </div>
              }
            />
            <FundsCard
              figure={
                <svg
                  className="w-12 h-12"
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
              title="Short term funds"
              description="Beat FD returns with the best debt mutual funds"
              label={
                <div
                  className={`absolute right-0 bg-scriptbox-brown-1 text-scriptbox-brown-2 text-xs font-medium top-0.75 py-0.31 pr-0.375 pl-4  leading-1.2 ${styles.funds_card_label}`}
                >
                  <p>1-5 years</p>
                </div>
              }
            />
            <FundsCard
              figure={
                <svg
                  className="w-12 h-12"
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
              title="Tax Saving Funds"
              description="Top ELSS funds to save tax the smart way"
              label={
                <div
                  className={`absolute right-0 bg-scriptbox-blue-5 text-scriptbox-blue-4 text-xs font-medium top-0.75 py-0.31 pr-0.375 pl-4  leading-1.2 ${styles.funds_card_label}`}
                >
                  <p>Lowest lock-in</p>
                </div>
              }
            />
            <FundsCard
              figure={
                <svg
                  className="w-12 h-12"
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
              title=" Emergency Funds"
              description="Top liquid funds for life's surprise expenses"
              label={
                <div
                  className={`absolute right-0 bg-scriptbox-red-2 text-scriptbox-red-1 text-xs font-medium top-0.75 py-0.31 pr-0.375 pl-4  leading-1.2 ${styles.funds_card_label}`}
                >
                  <p>Under 1 year</p>
                </div>
              }
            />

            <Link href="/">
              <a className="mr-8">
                <div
                  className={`p-3 rounded-lg bg-scriptbox-gray-4 max-w-12 min-w-12`}
                >
                  <figure>
                    <svg
                      className="w-12 h-12"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 48 48"
                      id="down-arrow-rounded"
                    >
                      <circle cx="24" cy="24" r="24" fill="#E6E6E6"></circle>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M30.708 24.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L23 28.586V17a1 1 0 112 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                        fill="#737373"
                      ></path>
                    </svg>
                  </figure>
                  <h4 className="pt-3 pb-1 text-base font-semibold">
                    See all equity funds
                  </h4>
                  <p className="text-scriptbox-gray-3 text-sm font-normal leading-normal">
                    Top Equity mutual funds for long-term growth
                  </p>
                </div>
              </a>
            </Link>
          </div>
        </section>
        <SectionOne initialFundsList={initialFundsList} />

        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </div>
    </Layout>
  );
};

export default Home;
