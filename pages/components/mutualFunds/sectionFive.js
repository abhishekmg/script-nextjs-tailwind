import React from 'react';
import styles from '../../../styles/Home.module.css'

const SectionFive = props => {
  return (
    <section className="bg-white pb-20  px-0 md:px-8 lg:px-0 ">
      <div className={`${styles.section_five_parent_div} mx-auto px-4 lg:px-0 bg-scriptbox-brown rounded-lg`}>
        <div className="flex justify-center">
          <div className="pt-10 text-center max-w-lg relative">
            <figure className={`absolute ${styles.section_five_logo}`}>
              <img
                src="https://deploy-preview-52--evergreen-gulp.netlify.app/assets/images/svg/mark.svg"
                className="w-12 h-12"
              />
            </figure>
            <span className="text-scriptbox-orange py-1 px-4 bg-white rounded-full font-semibold">
              The Scripbox Promise
            </span>
            <h3 className="text-scriptbox-black-1 pt-3 pb-6 text-xl font-semibold">
              Scripbox has helped over 2500 people become millionaires in the last 7
              years
            </h3>
            <a
              href="#"
              className=" text-sm font-semibold text-white rounded-md bg-scriptbox-green py-2 px-3"
            >
              Start Investing Now
            </a>

          </div>

        </div>

        <div className="pt-12 pb-16 md:px-8 grid grid-cols-1 gap-5  md:grid-cols-2 md:gap-6  lg:grid-cols-4 lg:gap-0">
        <div className="flex flex-row md:flex-col md:text-center md:px-4">
            <figure className="flex justify-center mr-4 md:mr-0">
              <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 39 40" id="portion"><g clip-path="url(#eiclip0)"><path d="M25.502 5.745L18 21l15.255 7.502" fill="#fff"></path><path d="M10.498 36.255c8.426 4.143 18.614.672 22.758-7.753 4.142-8.426.671-18.614-7.754-22.757-8.426-4.143-18.614-.672-22.757 7.753-4.143 8.426-.672 18.614 7.753 22.757z" fill="#fff"></path><path d="M24.829 5.414l-7.502 15.255 1.346.662 7.502-15.255-1.346-.662zm-7.16 16.259l15.256 7.502.661-1.346-15.255-7.502-.662 1.346zm.116-1.391L1.41 25.192l.431 1.437 16.374-4.91-.431-1.437zm14.798 7.889c-3.96 8.053-13.7 11.372-21.753 7.411l-.662 1.346c8.797 4.326 19.435.702 23.76-8.095l-1.345-.662zM10.83 35.582C2.775 31.622-.543 21.883 3.417 13.83l-1.346-.662c-4.326 8.798-.701 19.436 8.096 23.761l.662-1.346zM3.417 13.83c3.96-8.053 13.7-11.372 21.753-7.411l.662-1.346C17.036.746 6.398 4.37 2.072 13.168l1.346.661zM25.17 6.418c8.053 3.96 11.372 13.699 7.412 21.753l1.346.662c4.325-8.797.7-19.436-8.096-23.761l-.662 1.346z" fill="#9F7AEA"></path><path d="M18 1v19a1 1 0 001 1h19" fill="#E7FEF8"></path><path d="M18 1v19a1 1 0 001 1h19C38 9.954 29.046 1 18 1z" fill="#E7FEF8"></path><path d="M18 1V.25h-.75V1H18zm20 20v.75h.75V21H38zM17.25 1v19h1.5V1h-1.5zm.75.75c10.631 0 19.25 8.618 19.25 19.25h1.5C38.75 9.54 29.46.25 18 .25v1.5zm1 20h11.778v-1.5H19v1.5zm11.778 0H38v-1.5h-7.222v1.5zM17.25 20c0 .966.784 1.75 1.75 1.75v-1.5a.25.25 0 01-.25-.25h-1.5z" fill="#11C095"></path></g></svg>

            </figure>
            <div>
              <h3 className="font-semibold md:pt-4 md:px-3">
                Fund Selection
              </h3>
              <p className="text-scriptbox-gray-5 text-sm">
                You'll never have to worry about what funds to choose. We'll suggest what's best for you.
            </p>
            </div>

          </div>
          <div className="flex flex-row md:flex-col md:text-center md:px-4">
            <figure className="flex justify-center mr-4 md:mr-0">
              <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 39 40" id="portion"><g clip-path="url(#eiclip0)"><path d="M25.502 5.745L18 21l15.255 7.502" fill="#fff"></path><path d="M10.498 36.255c8.426 4.143 18.614.672 22.758-7.753 4.142-8.426.671-18.614-7.754-22.757-8.426-4.143-18.614-.672-22.757 7.753-4.143 8.426-.672 18.614 7.753 22.757z" fill="#fff"></path><path d="M24.829 5.414l-7.502 15.255 1.346.662 7.502-15.255-1.346-.662zm-7.16 16.259l15.256 7.502.661-1.346-15.255-7.502-.662 1.346zm.116-1.391L1.41 25.192l.431 1.437 16.374-4.91-.431-1.437zm14.798 7.889c-3.96 8.053-13.7 11.372-21.753 7.411l-.662 1.346c8.797 4.326 19.435.702 23.76-8.095l-1.345-.662zM10.83 35.582C2.775 31.622-.543 21.883 3.417 13.83l-1.346-.662c-4.326 8.798-.701 19.436 8.096 23.761l.662-1.346zM3.417 13.83c3.96-8.053 13.7-11.372 21.753-7.411l.662-1.346C17.036.746 6.398 4.37 2.072 13.168l1.346.661zM25.17 6.418c8.053 3.96 11.372 13.699 7.412 21.753l1.346.662c4.325-8.797.7-19.436-8.096-23.761l-.662 1.346z" fill="#9F7AEA"></path><path d="M18 1v19a1 1 0 001 1h19" fill="#E7FEF8"></path><path d="M18 1v19a1 1 0 001 1h19C38 9.954 29.046 1 18 1z" fill="#E7FEF8"></path><path d="M18 1V.25h-.75V1H18zm20 20v.75h.75V21H38zM17.25 1v19h1.5V1h-1.5zm.75.75c10.631 0 19.25 8.618 19.25 19.25h1.5C38.75 9.54 29.46.25 18 .25v1.5zm1 20h11.778v-1.5H19v1.5zm11.778 0H38v-1.5h-7.222v1.5zM17.25 20c0 .966.784 1.75 1.75 1.75v-1.5a.25.25 0 01-.25-.25h-1.5z" fill="#11C095"></path></g></svg>

            </figure>
            <div>
              <h3 className="font-semibold md:pt-4 md:px-3">
                Fund Selection
            </h3>
              <p className="text-scriptbox-gray-5 text-sm">
                You'll never have to worry about what funds to choose. We'll suggest what's best for you.
            </p>
            </div>

          </div>
          <div className="flex flex-row md:flex-col md:text-center md:px-4">
            <figure className="flex justify-center mr-4 md:mr-0">
              <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 39 40" id="portion"><g clip-path="url(#eiclip0)"><path d="M25.502 5.745L18 21l15.255 7.502" fill="#fff"></path><path d="M10.498 36.255c8.426 4.143 18.614.672 22.758-7.753 4.142-8.426.671-18.614-7.754-22.757-8.426-4.143-18.614-.672-22.757 7.753-4.143 8.426-.672 18.614 7.753 22.757z" fill="#fff"></path><path d="M24.829 5.414l-7.502 15.255 1.346.662 7.502-15.255-1.346-.662zm-7.16 16.259l15.256 7.502.661-1.346-15.255-7.502-.662 1.346zm.116-1.391L1.41 25.192l.431 1.437 16.374-4.91-.431-1.437zm14.798 7.889c-3.96 8.053-13.7 11.372-21.753 7.411l-.662 1.346c8.797 4.326 19.435.702 23.76-8.095l-1.345-.662zM10.83 35.582C2.775 31.622-.543 21.883 3.417 13.83l-1.346-.662c-4.326 8.798-.701 19.436 8.096 23.761l.662-1.346zM3.417 13.83c3.96-8.053 13.7-11.372 21.753-7.411l.662-1.346C17.036.746 6.398 4.37 2.072 13.168l1.346.661zM25.17 6.418c8.053 3.96 11.372 13.699 7.412 21.753l1.346.662c4.325-8.797.7-19.436-8.096-23.761l-.662 1.346z" fill="#9F7AEA"></path><path d="M18 1v19a1 1 0 001 1h19" fill="#E7FEF8"></path><path d="M18 1v19a1 1 0 001 1h19C38 9.954 29.046 1 18 1z" fill="#E7FEF8"></path><path d="M18 1V.25h-.75V1H18zm20 20v.75h.75V21H38zM17.25 1v19h1.5V1h-1.5zm.75.75c10.631 0 19.25 8.618 19.25 19.25h1.5C38.75 9.54 29.46.25 18 .25v1.5zm1 20h11.778v-1.5H19v1.5zm11.778 0H38v-1.5h-7.222v1.5zM17.25 20c0 .966.784 1.75 1.75 1.75v-1.5a.25.25 0 01-.25-.25h-1.5z" fill="#11C095"></path></g></svg>

            </figure>
            <div>
              <h3 className="font-semibold md:pt-4 md:px-3">
                Fund Selection
            </h3>
              <p className="text-scriptbox-gray-5 text-sm">
                You'll never have to worry about what funds to choose. We'll suggest what's best for you.
            </p>
            </div>

          </div>
          <div className="flex flex-row md:flex-col md:text-center md:px-4">
            <figure className="flex justify-center mr-4 md:mr-0">
              <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 39 40" id="portion"><g clip-path="url(#eiclip0)"><path d="M25.502 5.745L18 21l15.255 7.502" fill="#fff"></path><path d="M10.498 36.255c8.426 4.143 18.614.672 22.758-7.753 4.142-8.426.671-18.614-7.754-22.757-8.426-4.143-18.614-.672-22.757 7.753-4.143 8.426-.672 18.614 7.753 22.757z" fill="#fff"></path><path d="M24.829 5.414l-7.502 15.255 1.346.662 7.502-15.255-1.346-.662zm-7.16 16.259l15.256 7.502.661-1.346-15.255-7.502-.662 1.346zm.116-1.391L1.41 25.192l.431 1.437 16.374-4.91-.431-1.437zm14.798 7.889c-3.96 8.053-13.7 11.372-21.753 7.411l-.662 1.346c8.797 4.326 19.435.702 23.76-8.095l-1.345-.662zM10.83 35.582C2.775 31.622-.543 21.883 3.417 13.83l-1.346-.662c-4.326 8.798-.701 19.436 8.096 23.761l.662-1.346zM3.417 13.83c3.96-8.053 13.7-11.372 21.753-7.411l.662-1.346C17.036.746 6.398 4.37 2.072 13.168l1.346.661zM25.17 6.418c8.053 3.96 11.372 13.699 7.412 21.753l1.346.662c4.325-8.797.7-19.436-8.096-23.761l-.662 1.346z" fill="#9F7AEA"></path><path d="M18 1v19a1 1 0 001 1h19" fill="#E7FEF8"></path><path d="M18 1v19a1 1 0 001 1h19C38 9.954 29.046 1 18 1z" fill="#E7FEF8"></path><path d="M18 1V.25h-.75V1H18zm20 20v.75h.75V21H38zM17.25 1v19h1.5V1h-1.5zm.75.75c10.631 0 19.25 8.618 19.25 19.25h1.5C38.75 9.54 29.46.25 18 .25v1.5zm1 20h11.778v-1.5H19v1.5zm11.778 0H38v-1.5h-7.222v1.5zM17.25 20c0 .966.784 1.75 1.75 1.75v-1.5a.25.25 0 01-.25-.25h-1.5z" fill="#11C095"></path></g></svg>

            </figure>
            <div>
              <h3 className="font-semibold md:pt-4 md:px-3">
                Fund Selection
            </h3>
              <p className="text-scriptbox-gray-5 text-sm">
                You'll never have to worry about what funds to choose. We'll suggest what's best for you.
            </p>
            </div>

          </div>
          
        </div>

      </div>
    </section>
  );
};



export default SectionFive;