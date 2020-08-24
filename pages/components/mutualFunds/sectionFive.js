import React from "react";
import styles from "../../../styles/Home.module.css";
import containerStyles from "../../../styles/customContainer.module.css";

const SectionFive = (props) => {
  return (
    <section className="bg-white pb-20">
      <div
        className={`${containerStyles.container} mx-auto `}
      >
        <div className="bg-scriptbox-brown rounded-lg -mx-10">
          <div className="flex justify-center">
            <div className="pt-10 text-center max-w-lg relative">
              <figure className={`absolute ${styles.section_five_logo}`}>
                <img
                  src="https://deploy-preview-52--evergreen-gulp.netlify.app/assets/images/svg/mark.svg"
                  className="w-12 h-12"
                  alt="scriptbox"
                />
              </figure>
              <span className="text-scriptbox-orange py-1 px-4 bg-white rounded-full font-semibold">
                The Scripbox Promise
            </span>
              <h3 className="text-scriptbox-black-1 pt-3 pb-6 text-xl font-semibold">
                Scripbox has helped over 2500 people become millionaires in the
                last 7 years
            </h3>
              <a
                href="#"
                className=" text-sm font-semibold text-white rounded-md bg-scriptbox-green py-2 px-3"
              >
                Start Investing Now
            </a>
            </div>
          </div>

          <div className="pt-12 pb-16 md:px-4 grid grid-cols-1 gap-5  md:grid-cols-2 md:gap-6  lg:grid-cols-4 lg:gap-0">
            <div className="flex flex-row md:flex-col md:text-center md:px-4">
              <figure className="flex justify-center mr-4 md:mr-0">
                <svg
                  className="w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 39 40"
                  id="portion"
                >
                  <g clip-path="url(#eiclip0)">
                    <path d="M25.502 5.745L18 21l15.255 7.502" fill="#fff"></path>
                    <path
                      d="M10.498 36.255c8.426 4.143 18.614.672 22.758-7.753 4.142-8.426.671-18.614-7.754-22.757-8.426-4.143-18.614-.672-22.757 7.753-4.143 8.426-.672 18.614 7.753 22.757z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M24.829 5.414l-7.502 15.255 1.346.662 7.502-15.255-1.346-.662zm-7.16 16.259l15.256 7.502.661-1.346-15.255-7.502-.662 1.346zm.116-1.391L1.41 25.192l.431 1.437 16.374-4.91-.431-1.437zm14.798 7.889c-3.96 8.053-13.7 11.372-21.753 7.411l-.662 1.346c8.797 4.326 19.435.702 23.76-8.095l-1.345-.662zM10.83 35.582C2.775 31.622-.543 21.883 3.417 13.83l-1.346-.662c-4.326 8.798-.701 19.436 8.096 23.761l.662-1.346zM3.417 13.83c3.96-8.053 13.7-11.372 21.753-7.411l.662-1.346C17.036.746 6.398 4.37 2.072 13.168l1.346.661zM25.17 6.418c8.053 3.96 11.372 13.699 7.412 21.753l1.346.662c4.325-8.797.7-19.436-8.096-23.761l-.662 1.346z"
                      fill="#9F7AEA"
                    ></path>
                    <path d="M18 1v19a1 1 0 001 1h19" fill="#E7FEF8"></path>
                    <path
                      d="M18 1v19a1 1 0 001 1h19C38 9.954 29.046 1 18 1z"
                      fill="#E7FEF8"
                    ></path>
                    <path
                      d="M18 1V.25h-.75V1H18zm20 20v.75h.75V21H38zM17.25 1v19h1.5V1h-1.5zm.75.75c10.631 0 19.25 8.618 19.25 19.25h1.5C38.75 9.54 29.46.25 18 .25v1.5zm1 20h11.778v-1.5H19v1.5zm11.778 0H38v-1.5h-7.222v1.5zM17.25 20c0 .966.784 1.75 1.75 1.75v-1.5a.25.25 0 01-.25-.25h-1.5z"
                      fill="#11C095"
                    ></path>
                  </g>
                </svg>
              </figure>
              <div>
                <h3 className="font-semibold md:pt-4 md:px-3">Fund Selection</h3>
                <p className="text-scriptbox-gray-5 text-sm">
                  You'll never have to worry about what funds to choose. We'll
                  suggest what's best for you.
              </p>
              </div>
            </div>
            <div className="flex flex-row md:flex-col md:text-center md:px-4">
              <figure className="flex justify-center mr-4 md:mr-0">
                <svg
                  className="w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 41 40"
                  id="cup"
                >
                  <path
                    d="M10.1 19.355H8.8a5.22 5.22 0 01-3.677-1.512 5.142 5.142 0 01-1.523-3.65V3.872h6.5M30.9 19.355h1.3a5.22 5.22 0 003.677-1.512 5.142 5.142 0 001.523-3.65V3.872h-6.5M20.5 33.548v-7.742"
                    stroke="#B77A0A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M20.5 25.806a11.745 11.745 0 01-8.273-3.4A11.57 11.57 0 018.8 14.193V1.29h23.4v12.904c0 1.524-.303 3.035-.89 4.444a11.608 11.608 0 01-2.537 3.767 11.706 11.706 0 01-3.796 2.517c-1.42.584-2.94.884-4.477.884z"
                    fill="#FFE1A8"
                    stroke="#B77A0A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="square"
                  ></path>
                  <path
                    d="M20.31 9.032v3.871M16.6 11.707l3.709 1.196M18.017 16.035l2.292-3.132M22.601 16.035l-2.292-3.132M24.018 11.707l-3.709 1.196"
                    stroke="#B77A0A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M32.2 38.71H8.8c0-1.711-.267-3.952 1.3-5.162 1.567-1.21 4.84-1.29 7.057-1.29h6.686c2.195 0 5.505.092 7.057 1.29 1.552 1.199 1.3 3.467 1.3 5.162z"
                    fill="#FFE1A8"
                    stroke="#B77A0A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="square"
                  ></path>
                </svg>
              </figure>
              <div>
                <h3 className="font-semibold md:pt-4 md:px-3">Fund Selection</h3>
                <p className="text-scriptbox-gray-5 text-sm">
                  {
                    "  We will track our recommendations and suggest changes & fund exists whenever required."
                  }
                </p>
              </div>
            </div>
            <div className="flex flex-row md:flex-col md:text-center md:px-4">
              <figure className="flex justify-center mr-4 md:mr-0">
                <svg
                  className="w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 41 40"
                  id="archery-target"
                >
                  <g
                    clip-path="url(#anclip0)"
                    stroke="#007AFF"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  >
                    <path
                      d="M16.5 39c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15z"
                      fill="#fff"
                      stroke-linecap="square"
                    ></path>
                    <path
                      d="M16.5 32a8 8 0 100-16 8 8 0 000 16z"
                      fill="#CBE3F6"
                      stroke-linecap="square"
                    ></path>
                    <path
                      d="M16.5 25a1 1 0 100-2 1 1 0 000 2z"
                      fill="#fff"
                      stroke-linecap="square"
                    ></path>
                    <path d="M16.75 23.75l20-20"></path>
                    <path
                      d="M31.75 8.75L30.5 2.5l-5 5 1.25 6.25L33 15l5-5-6.25-1.25z"
                      fill="#CBE3F6"
                      stroke-linecap="square"
                    ></path>
                  </g>
                </svg>
              </figure>
              <div>
                <h3 className="font-semibold md:pt-4 md:px-3">
                  All week call assistance
              </h3>
                <p className="text-scriptbox-gray-5 text-sm">
                  Our customer champions are available 7 days a week from 8AM to
                  8PM.
              </p>
              </div>
            </div>
            <div className="flex flex-row md:flex-col md:text-center md:px-4">
              <figure className="flex justify-center mr-4 md:mr-0">
                <svg
                  className="w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 41 40"
                  id="savings"
                >
                  <path
                    d="M17.22 21.521c-2.03 1.988-4.648 3.086-7.36 3.086-2.711 0-5.33-1.098-7.36-3.086 1.609-1.57 3.593-2.595 5.715-2.948a10.175 10.175 0 016.245.956c1.956.978 3.614 2.56 4.777 4.555 1.163 1.996 1.78 4.32 1.777 6.695"
                    fill="#fff"
                  ></path>
                  <path
                    d="M17.22 21.521c-2.03 1.988-4.648 3.086-7.36 3.086-2.711 0-5.33-1.098-7.36-3.086 1.609-1.57 3.593-2.595 5.715-2.948a10.175 10.175 0 016.245.956c1.956.978 3.614 2.56 4.777 4.555 1.163 1.996 1.78 4.32 1.777 6.695"
                    stroke="#1C9778"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M23.78 21.521c2.03 1.988 4.648 3.086 7.36 3.086 2.711 0 5.329-1.098 7.36-3.086-1.609-1.57-3.593-2.595-5.715-2.948a10.175 10.175 0 00-6.245.956c-1.956.978-3.614 2.56-4.777 4.555-1.163 1.996-1.78 4.32-1.777 6.695"
                    fill="#fff"
                  ></path>
                  <path
                    d="M23.78 21.521c2.03 1.988 4.648 3.086 7.36 3.086 2.711 0 5.329-1.098 7.36-3.086-1.609-1.57-3.593-2.595-5.715-2.948a10.175 10.175 0 00-6.245.956c-1.956.978-3.614 2.56-4.777 4.555-1.163 1.996-1.78 4.32-1.777 6.695"
                    stroke="#1C9778"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M20.602 16.636a7.714 7.714 0 100-15.429 7.714 7.714 0 000 15.429z"
                    fill="#FEFCBF"
                    stroke="#1C9778"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="square"
                  ></path>
                  <path
                    d="M20.602 16.893v6.685M20.602 6.607v4.629"
                    stroke="#1C9778"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="square"
                  ></path>
                  <path
                    d="M8.773 28.464H32.43l-1.067 8.534a2 2 0 01-1.984 1.752H11.824a2 2 0 01-1.984-1.752l-1.067-8.534z"
                    fill="#B6F1E0"
                    stroke="#1C9778"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="square"
                  ></path>
                </svg>
              </figure>
              <div>
                <h3 className="font-semibold md:pt-4 md:px-3">Fund Selection</h3>
                <p className="text-scriptbox-gray-5 text-sm">
                  We review your investments and make course corrections every
                  year to make the best out of your investments
              </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SectionFive;
