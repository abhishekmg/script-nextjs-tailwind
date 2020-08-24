import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'what-input';

import styles from "../../styles/Home.module.css"
import containerStyles from "../../styles/customContainer.module.css";



const Footer = props => {

  const [accState, setAccState] = useState(0)

  const scripboxLogo = <svg className="w-20 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 81 22" id="logo-orange"><g clip-path="url(#dnclip0)" fill-rule="evenodd" clip-rule="evenodd" fill="#F58024"><path d="M18.219 12.787l-.094 5.2h3.158v-5.2c0-1.189.958-2.156 2.137-2.156h1.485V7.586L23.42 7.54c-2.873 0-5.201 2.348-5.201 5.247zM56.984 7.54c-2.873 0-5.203 2.348-5.203 5.247 0 2.898 2.33 5.247 5.203 5.247 2.872 0 5.2-2.35 5.2-5.247 0-2.899-2.328-5.247-5.2-5.247zm1.857 5.247a1.868 1.868 0 01-1.857 1.873 1.868 1.868 0 01-1.858-1.873c0-1.034.833-1.875 1.858-1.875 1.023 0 1.857.841 1.857 1.875zM34.998 15.114c-1.17 0-2.12-.96-2.12-2.14 0-1.179.95-2.138 2.12-2.138 1.169 0 2.12.96 2.12 2.139 0 1.18-.952 2.139-2.12 2.139zm-5.158-2.29l-.005 9.221h2.875v-4.402c.69.345 1.466.54 2.288.54 2.85 0 5.161-2.332 5.161-5.208 0-2.876-2.31-5.208-5.161-5.208-2.801 0-5.08 2.251-5.158 5.057zM45.82 15.117c-1.169 0-2.12-.96-2.12-2.14 0-1.179.951-2.138 2.12-2.138s2.12.96 2.12 2.138c0 1.18-.951 2.14-2.12 2.14zm-2.287-6.808V3.907h-2.875v9.222c.084 2.805 2.361 5.056 5.162 5.056 2.85 0 5.162-2.332 5.162-5.207 0-2.876-2.311-5.208-5.162-5.208-.821 0-1.598.195-2.287.54zM25.74 7.575l3.267-.008v10.424h-3.268V7.575zM73.507.005v7.409h7.224V0H78.01v.993h1.737V6.42h-5.256V.997h1.795V.005h-2.78z"></path><path d="M76.368 5.542c-.28-.097-.54-.24-.779-.428l.388-.594c.206.155.415.272.629.352.212.08.417.12.614.12.186 0 .331-.038.434-.113a.354.354 0 00.154-.3v-.015a.282.282 0 00-.068-.189.62.62 0 00-.187-.141 1.626 1.626 0 00-.272-.109l-.32-.098a4.881 4.881 0 01-.42-.137 1.52 1.52 0 01-.381-.206 1.032 1.032 0 01-.277-.316.923.923 0 01-.107-.464V2.89c0-.184.034-.347.104-.489.07-.142.165-.265.287-.366.122-.101.266-.179.431-.232a1.72 1.72 0 01.528-.08 2.593 2.593 0 011.393.435l-.344.623c-.182-.11-.367-.199-.553-.264a1.582 1.582 0 00-.517-.098c-.168 0-.299.036-.392.109a.335.335 0 00-.14.275v.015c0 .067.024.126.072.177.048.05.111.097.19.138.08.04.17.078.273.112.103.034.21.07.32.109.139.043.277.094.416.152.14.058.265.13.377.214.113.084.205.187.277.307a.85.85 0 01.107.443v.014c0 .203-.035.38-.107.529a1.03 1.03 0 01-.298.373 1.33 1.33 0 01-.45.224c-.171.051-.356.077-.552.077-.273 0-.55-.049-.83-.145zM13.852 14.942a2.148 2.148 0 01-2.136-2.155c0-1.189.958-2.156 2.136-2.156.662 0 1.247.312 1.64.79l2.37-1.976a5.173 5.173 0 00-4.01-1.905c-2.873 0-5.202 2.348-5.202 5.247 0 2.898 2.33 5.247 5.202 5.247a5.17 5.17 0 003.992-1.885l-2.36-1.988a2.115 2.115 0 01-1.632.781zM8.211 16.023a3.447 3.447 0 01-.924 1.124 4.115 4.115 0 01-1.352.702c-.515.16-1.064.24-1.649.24-.8 0-1.565-.097-2.295-.288A7.2 7.2 0 010 16.954l1.258-2.403c.177.129.387.247.628.356.241.11.492.205.753.288.26.084.52.148.78.193.261.045.5.067.716.067.723 0 1.085-.224 1.085-.673 0-.217-.11-.384-.333-.5a5.154 5.154 0 00-.828-.326l-1.077-.337a4.261 4.261 0 01-1.077-.51 2.793 2.793 0 01-.829-.854c-.222-.353-.333-.81-.333-1.375 0-.5.105-.95.315-1.354.209-.404.495-.75.856-1.038a4 4 0 011.305-.673 5.415 5.415 0 011.639-.24c.699 0 1.302.06 1.81.182a8.453 8.453 0 011.524.529L7.05 10.632a5.492 5.492 0 00-.933-.385 3.154 3.154 0 00-.934-.154c-.356 0-.635.067-.838.202-.203.135-.305.31-.305.529 0 .18.111.324.333.432.223.11.502.212.839.308.336.096.698.201 1.086.316.387.116.75.28 1.086.491.336.212.615.487.838.827.222.34.333.778.333 1.316 0 .564-.114 1.066-.343 1.51zM29.103 4.236a1.868 1.868 0 01-1.857 1.874 1.868 1.868 0 01-1.858-1.874c0-1.034.833-1.875 1.858-1.875 1.024 0 1.857.841 1.857 1.875zM66.828 10.302L64.817 7.53h-3.635l3.85 5.248-3.775 5.202h3.552l2.02-2.752 2.018 2.752H72.4l-3.775-5.202 3.85-5.248H68.84l-2.012 2.772z"></path></g></svg>


  const FirstPartLi = ({
    img,
    name
  }) => (
      <li className="flex items-center">
        {img}
        <a
          href="#"
          className="text-scriptbox-gray-7 text-sm font-normal hover:underline"
        >
          {name}
        </a>
      </li>
    )

  FirstPartLi.defaultProps = {
    img: <></>
  }

  const FirstPartHeading = ({
    name
  }) => (
      <h6 className="text-white opacity-50 text-sm font-semibold pb-5">
        {name}
      </h6>
    )


  const SecondPartHeading = ({
    img,
    name
  }) => (
      <div className="flex items-center pb-5">
        {img}
        <h6 className="text-white opacity-50 text-sm font-semibold">
          {name}
        </h6>

      </div>

    )

  SecondPartHeading.defaultProps = {
    img: <></>
  }


  const contactsList = (
    <ul className="space-y-4">

      <FirstPartLi
        name="1800-102-1265"
        img={<svg className="w-4 h-4 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="tel-icon-gray"><g opacity=".4" clip-path="url(#ghclip0)"><path d="M2.294.737a1 1 0 011.413 0l2.577 2.58a.998.998 0 010 1.41l-1.96 1.958a.47.47 0 000 .665l4.33 4.325a.472.472 0 00.665 0l1.956-1.954a.999.999 0 011.415.002l2.575 2.589a.997.997 0 01-.002 1.41l-1.695 1.693a1.849 1.849 0 01-1.414.559C5.78 15.574.654 10.579.058 4.269c-.075-.792.258-1.557.821-2.12L2.294.738zM8 0c4.411 0 8 3.589 8 8h-2c0-3.309-2.691-6-6-6V0z" fill="#fff"></path></g></svg>}
      />
      <FirstPartLi
        name="Whatsapp"
        img={<svg className="w-4 h-4 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="whatsapp-icon"><g opacity=".5" clip-path="url(#gzclip0)"><path d="M13.6 2.3C12.1.8 10.2 0 8 0 3.7 0 .1 3.6.1 7.9c0 1.4.4 2.8 1.1 4L0 16l4.2-1.1c1.2.6 2.5 1 3.8 1 4.4 0 7.9-3.6 7.9-7.9.1-2.2-.8-4.2-2.3-5.7zm-1.7 8.5c-.2.5-1 .9-1.3.9-.3.1-1.3 0-2.4-.5-2-.9-3.3-2.9-3.4-3-.1-.1-.8-1.1-.8-2 0-.9.5-1.5.7-1.7.4-.4 1.2-.3 1.4.1.1.4.5 1.4.6 1.5.1.1.1.5-.2.7-.1 0-.6.4-.4.7.1.2.5.8 1.1 1.4.8.7 1.4.9 1.6 1 .2.1.3.1.4-.1.1-.1.5-.6.6-.8.1-.2.3-.2.4-.1.1.1 1.2.5 1.4.6.2.2.4.2.4.3.1.1.1.5-.1 1z" fill="#fff"></path></g></svg>}
      />
      <FirstPartLi
        img={<svg className="w-4 h-4 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="email-icon-gray"><g opacity=".4" fill="#fff"><path d="M15 2H1c-.6 0-1 .4-1 1v1.4l8 4.5 8-4.4V3c0-.6-.4-1-1-1z"></path><path d="M7.5 10.9L0 6.7V14c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V6.7l-7.5 4.2c-.28.14-.72.14-1 0z"></path></g></svg>}
        name="help@scripbox.com"
      />
      <FirstPartLi
        img={<svg className="w-4 h-4 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="reach-us"><g opacity=".4" clip-path="url(#ejclip0)"><path d="M8 0C4.1 0 1 3.1 1 7c0 1.9.7 3.7 2.1 5 .1.1 4.1 3.7 4.2 3.8.4.3 1 .3 1.3 0 .1-.1 4.2-3.7 4.2-3.8 1.4-1.3 2.1-3.1 2.1-5 .1-3.9-3-7-6.9-7zm0 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="#fff"></path></g></svg>}
        name="Reach us"
      />
    </ul>
  )

  const whoWeAreList = (
    <ul className="space-y-4">
      <FirstPartLi
        name="Reviews"
      />
      <FirstPartLi
        name="News"
      />
      <FirstPartLi
        name="Awards"
      />
      <FirstPartLi
        name="Careers"
      />
      <FirstPartLi
        name="Team"
      />

    </ul>
  )

  const whatWeDoList = (
    <ul className="space-y-4">
      <FirstPartLi
        name="How it works"
      />
      <FirstPartLi
        name="Help"
      />
      <FirstPartLi
        name="Calculators"
      />
      <FirstPartLi
        name="Blog"
      />
    </ul>
  )

  const termsAndConditionsList = (
    <ul className="space-y-4">
      <FirstPartLi
        name="Terms of use"
      />
      <FirstPartLi
        name="Privacy Policy"
      />
      <FirstPartLi
        name="Sitemap"
      />
    </ul>
  )

  const calculatorsList = (
    <ul className="space-y-2">
      <FirstPartLi
        name="SIP Calculator"
      />
      <FirstPartLi
        name="ELSS Calculator"
      />
      <FirstPartLi
        name="Lumpsum Calculator"
      />
      <FirstPartLi
        name="Power of Compounding"
      />
      <FirstPartLi
        name="FD Calculator"
      />
      <FirstPartLi
        name="RD Calculator"
      />
      <FirstPartLi
        name="NPS Calculator"
      />
      <FirstPartLi
        name="EMI Calculator"
      />
      <FirstPartLi
        name="PPF Calculator"
      />
      <FirstPartLi
        name="Income Tax Calculator"
      />
    </ul>
  )

  const learnList = (
    <ul className="space-y-2">
      <FirstPartLi
        name="What are mutual funds"
      />
      <FirstPartLi
        name="Mutual Funds Investment"
      />
      <FirstPartLi
        name="Debt Funds"
      />
      <FirstPartLi
        name="Types of Mutual Funds"
      />
      <FirstPartLi
        name="PPF Interest Rate"
      />
      <FirstPartLi
        name="Regular vs Direct Mutual Fund"
      />
      <FirstPartLi
        name="Equity Mutual Funds"
      />
      <FirstPartLi
        name="What is Demat Account"
      />
      <FirstPartLi
        name="Salary Slip"
      />
      <FirstPartLi
        name="Tax on Mutual Funds"
      />
      <FirstPartLi
        name="Advantages of Mutual Funds"
      />

    </ul>
  )

  const recommendedList = (
    <ul className="space-y-2">
      <FirstPartLi
        name="Best Mutual Funds"
      />
      <FirstPartLi
        name="Best ELSS Funds"
      />
      <FirstPartLi
        name="Best Equity Mutual Funds"
      />
      <FirstPartLi
        name="Best Debt Funds"
      />
      <FirstPartLi
        name="Best Liquid Funds"
      />
      <FirstPartLi
        name="Best SIP Mutual Funds"
      />
      <FirstPartLi
        name="Best Tax Saving Mutual Funds"
      />
      <FirstPartLi
        name="Best Short Term Mutual Funds"
      />
      <FirstPartLi
        name="Best Large Cap Mutual Funds"
      />



    </ul>
  )

  const amcList = (
    <ul className="space-y-2">
      <FirstPartLi
        name="All AMCs"
      />
      <FirstPartLi
        name="Axis Mutual Fund"
      />
      <FirstPartLi
        name="Franklin Templeton Mutual Fund"
      />
      <FirstPartLi
        name="SBI Mutual Fund"
      />
      <FirstPartLi
        name="HDFC Mutual Fund"
      />
      <FirstPartLi
        name="Tata Mutual Fund"
      />
      <FirstPartLi
        name="Kotak Mutual Fund"
      />
      <FirstPartLi
        name="Motilal Oswal Mutual Fund"
      />
      <FirstPartLi
        name="ICICI Mutual Fund"
      />




    </ul>
  )

  return (
    <footer className="bg-scriptbox-black-2 pt-4 sm:pt-16 pb-12">
      <div className={`${containerStyles.container} mx-auto lg:px-0`}>
        {/* first part */}
        <div className={`hidden sm:grid sm:grid-cols-3 lg:grid-cols-6 pb-12 ${styles.footer_acc_border}`}>
          <div className="lg:col-span-2">
            <figure className="mb-5">
              {scripboxLogo}
            </figure>
            {contactsList}
          </div>
          <div>
            <FirstPartHeading
              name="Who we are"
            />
            {whoWeAreList}

          </div>
          <div>
            <FirstPartHeading
              name="What we do"
            />
            {whatWeDoList}



          </div>
          <div className="pt-10 lg:pt-0">
            <FirstPartHeading
              name="Terms and Conditions"
            />
            {termsAndConditionsList}


          </div>
          <div className="pt-10 lg:pt-0">
            <FirstPartHeading
              name="Download app"
            />
            <ul className="space-y-4">
              <FirstPartLi
                img={<svg className="w-4 h-4 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="app-store-button"><g clip-path="url(#amclip0)" fill="#fff"><path d="M14.236 11.017a2.408 2.408 0 01-1.556-2.113c-.066-.942.395-1.778 1.234-2.237l.697-.382-.498-.62C13.277 4.623 12.08 4 10.911 4c-.81 0-1.372.212-1.824.383-.318.12-.57.215-.846.215-.314 0-.625-.11-.985-.238C6.784 4.192 6.249 4 5.563 4c-1.327 0-2.665.793-3.492 2.066-1.234 1.9-.895 5.156.806 7.744.674 1.026 1.618 2.204 2.956 2.216h.026c1.096 0 1.336-.584 2.399-.591 1.161.055 1.308.595 2.393.588 1.307-.012 2.25-1.18 2.999-2.323.443-.671.614-1.022.959-1.785l.292-.647-.665-.251zM10.067 2.3c.433-.556.762-1.34.642-2.143-.708.049-1.534.499-2.018 1.086-.438.532-.8 1.322-.66 2.09.772.024 1.572-.438 2.036-1.033z"></path></g></svg>}
                name="App Store"
              />
              <FirstPartLi
                img={<svg className="w-4 h-4 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 16" id="play-store-button"><g clip-path="url(#egclip0)"><path d="M0 1.064v13.6c0 .246.018.428.054.545l7-7.315L0 .604v.46zm7.636 6.83L9.975 5.31l.058.061 2.859 1.723c.816.493.816 1.293 0 1.785l-2.917 1.662-2.339-2.647zm-.305.35l-7.04 7.343c.292.308.7.308 1.226.062l8.1-4.902L7.33 8.243zm2.285-3.17L1.516.202C.993-.106.584-.044.293.264l7.046 7.24 2.278-2.43z" fill="#fff"></path></g></svg>}
                name="Play Store"
              />
            </ul>


          </div>

        </div>

        {/* second part */}
        <div className={`hidden sm:block py-12 ${styles.footer_acc_border}`}>
          <div className={`hidden sm:grid sm:grid-cols-2  lg:grid-cols-4`}>
            <div>
              <SecondPartHeading
                img={<svg className="w-4 h-4 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 16" id="calculators"><g opacity=".5" clip-path="url(#avclip0)"><path d="M13 0H1C.4 0 0 .4 0 1v14c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zM4 13H2v-2h2v2zm0-4H2V7h2v2zm4 4H6v-2h2v2zm0-4H6V7h2v2zm4 4h-2V7h2v6zm0-8H2V2h10v3z" fill="#fff"></path></g></svg>}
                name="Calculators"
              />
              {calculatorsList}
            </div>
            <div>
              <SecondPartHeading
                img={<svg className="w-4 h-4 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="learn"><g opacity=".5" clip-path="url(#cyclip0)" fill="#fff"><path d="M7 2.5L1.4.1C1.1-.1.7 0 .4.2.2.4 0 .7 0 1v11c0 .4.2.8.6.9L7 15.7V2.5zM15.6.2c-.3-.2-.6-.2-.9-.1L9 2.5v13.2l6.4-2.7c.4-.2.6-.5.6-.9V1c0-.3-.2-.6-.4-.8z"></path></g></svg>}
                name="Learn"
              />
              {learnList}
            </div>
            <div className="sm:pt-10 lg:pt-0">
              <SecondPartHeading
                img={<svg className="w-4 h-4 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="recommended-funds"><g opacity=".5" fill-rule="evenodd" clip-rule="evenodd" fill="#fff"><path d="M0 .01V16h16V0H9.973v2.142h3.848v11.716H2.18V2.152h3.977V.01H0z"></path><path d="M6.338 11.96a5.905 5.905 0 01-1.726-.923l.859-1.282c.455.334.92.587 1.392.758.47.172.924.258 1.36.258.412 0 .734-.08.962-.242a.757.757 0 00.341-.649v-.031a.599.599 0 00-.15-.406 1.365 1.365 0 00-.414-.306 3.65 3.65 0 00-.604-.234 228.57 228.57 0 01-.708-.211 11.049 11.049 0 01-.93-.297 3.398 3.398 0 01-.844-.446 2.247 2.247 0 01-.613-.68c-.158-.271-.238-.605-.238-1.001v-.031c0-.396.077-.748.23-1.055a2.35 2.35 0 01.637-.79c.27-.219.59-.386.954-.5a3.904 3.904 0 011.17-.173c.53 0 1.065.084 1.606.25a5.81 5.81 0 011.48.689l-.764 1.344a6.534 6.534 0 00-1.225-.57 3.586 3.586 0 00-1.145-.211c-.372 0-.66.078-.867.234a.717.717 0 00-.31.594v.031a.53.53 0 00.159.383c.105.11.246.21.421.297.175.09.377.17.604.243.229.073.464.15.708.234.308.095.615.204.923.329.308.125.586.279.835.461.25.183.453.404.612.665.16.26.239.578.239.954v.03c0 .438-.08.819-.239 1.142-.159.324-.379.592-.66.806-.28.213-.612.375-.994.484-.381.11-.79.164-1.224.164a5.745 5.745 0 01-1.837-.312z"></path></g></svg>}
                name="Recommended Funds"
              />
              {recommendedList}
            </div>
            <div className="sm:pt-10 lg:pt-0">
              <SecondPartHeading
                img={<svg className="w-4 h-4 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="amcs"><g opacity=".5" fill="#fff"><path d="M15 9h-2V3c0-.6-.4-1-1-1H9V0H7v2H4c-.6 0-1 .4-1 1v6H1c-.6 0-1 .4-1 1v5c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-5c0-.6-.4-1-1-1zM5 10V4h6v10H9v-3H7v3H5v-4z"></path><path d="M9 6H7v2h2V6z"></path></g></svg>}
                name="AMCs"
              />
              {amcList}
            </div>

          </div>

        </div>





      </div>


      {/* for mobile */}
      <div className="block sm:hidden px-4">
        <figure className="mb-4">
          {scripboxLogo}
        </figure>
        <Accordion allowZeroExpanded
          onChange={(e) => setAccState(e[0])}
        >
          <AccordionItem>
            <AccordionItemHeading className={`px-2 py-3 text-white font-semibold text-sm ${accState !== "raa-0" ? styles.footer_acc_border : ""}`}>
              <AccordionItemButton className="flex items-center justify-between">
                Contacts
                <img
                  src="https://deploy-preview-52--evergreen-gulp.netlify.app/assets/images/svg/cheveron-down-white.svg"
                  alt="scriptbox"
                />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={`px-2 py-2 `} activeClassName="cool">
              {contactsList}
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading className={`px-2 py-3 text-white font-semibold text-sm ${accState !== "raa-1" ? styles.footer_acc_border : ""}`}>
              <AccordionItemButton className="flex items-center justify-between">
                Who we are
                <img
                  src="https://deploy-preview-52--evergreen-gulp.netlify.app/assets/images/svg/cheveron-down-white.svg"
                  alt="scriptbox"

                />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={`px-2 py-2 `} activeClassName="cool">
              {whoWeAreList}
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading className={`px-2 py-3 text-white font-semibold text-sm ${accState !== "raa-2" ? styles.footer_acc_border : ""}`}>
              <AccordionItemButton className="flex items-center justify-between">
                What we do
                <img
                  src="https://deploy-preview-52--evergreen-gulp.netlify.app/assets/images/svg/cheveron-down-white.svg"
                  alt="scriptbox"

                />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={`px-2 py-2 `} activeClassName="cool">
              {whatWeDoList}
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading className={`px-2 py-3 text-white font-semibold text-sm ${accState !== "raa-3" ? styles.footer_acc_border : ""}`}>
              <AccordionItemButton className="flex items-center justify-between">
                Terms and Conditions
                <img
                  src="https://deploy-preview-52--evergreen-gulp.netlify.app/assets/images/svg/cheveron-down-white.svg"
                  alt="scriptbox"

                />
              </AccordionItemButton>

            </AccordionItemHeading>
            <AccordionItemPanel className={`px-2 py-2 `} activeClassName="cool">
              {termsAndConditionsList}
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem dangerouslySetExpanded={true}>
            <AccordionItemHeading className={`px-2 py-3 text-white font-semibold text-sm `}>
              <AccordionItemButton>
                Download app
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={`px-2 py-2 flex items-center`}>
              <a
                href="#"
                className="flex items-center text-white text-sm py-3 w-full justify-center bg-scriptbox-gray-9 rounded-md mr-3"
              >
                <svg className="w-4 h-4 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="app-store-button"><g clip-path="url(#amclip0)" fill="#fff"><path d="M14.236 11.017a2.408 2.408 0 01-1.556-2.113c-.066-.942.395-1.778 1.234-2.237l.697-.382-.498-.62C13.277 4.623 12.08 4 10.911 4c-.81 0-1.372.212-1.824.383-.318.12-.57.215-.846.215-.314 0-.625-.11-.985-.238C6.784 4.192 6.249 4 5.563 4c-1.327 0-2.665.793-3.492 2.066-1.234 1.9-.895 5.156.806 7.744.674 1.026 1.618 2.204 2.956 2.216h.026c1.096 0 1.336-.584 2.399-.591 1.161.055 1.308.595 2.393.588 1.307-.012 2.25-1.18 2.999-2.323.443-.671.614-1.022.959-1.785l.292-.647-.665-.251zM10.067 2.3c.433-.556.762-1.34.642-2.143-.708.049-1.534.499-2.018 1.086-.438.532-.8 1.322-.66 2.09.772.024 1.572-.438 2.036-1.033z"></path></g></svg>
                Apple Store
              </a>
              <a
                href="#"
                className="flex items-center text-white text-sm py-3 w-full justify-center bg-scriptbox-gray-9 rounded-md"
              >
                <svg className="w-4 h-4 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 16" id="play-store-button"><g clip-path="url(#egclip0)"><path d="M0 1.064v13.6c0 .246.018.428.054.545l7-7.315L0 .604v.46zm7.636 6.83L9.975 5.31l.058.061 2.859 1.723c.816.493.816 1.293 0 1.785l-2.917 1.662-2.339-2.647zm-.305.35l-7.04 7.343c.292.308.7.308 1.226.062l8.1-4.902L7.33 8.243zm2.285-3.17L1.516.202C.993-.106.584-.044.293.264l7.046 7.24 2.278-2.43z" fill="#fff"></path></g></svg>
                Play Store
              </a>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading className={`px-2 py-3 text-white font-semibold text-sm ${accState !== "raa-5" ? styles.footer_acc_border : ""}`}>
              <AccordionItemButton className="flex items-center justify-between">
                Calculators
                <img
                  src="https://deploy-preview-52--evergreen-gulp.netlify.app/assets/images/svg/cheveron-down-white.svg"
                  alt="scriptbox"

                
                />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={`px-2 py-2 `} activeClassName="cool">
              {calculatorsList}
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading className={`px-2 py-3 text-white font-semibold text-sm ${accState !== "raa-6" ? styles.footer_acc_border : ""}`}>
              <AccordionItemButton className="flex items-center justify-between">
                Learn
                <img
                  src="https://deploy-preview-52--evergreen-gulp.netlify.app/assets/images/svg/cheveron-down-white.svg"
                  alt="scriptbox"

                />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={`px-2 py-2 `} activeClassName="cool">
              {learnList}
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading className={`px-2 py-3 text-white font-semibold text-sm ${accState !== "raa-7" ? styles.footer_acc_border : ""}`}>
              <AccordionItemButton className="flex items-center justify-between">
                Recommended Funds
                <img
                  src="https://deploy-preview-52--evergreen-gulp.netlify.app/assets/images/svg/cheveron-down-white.svg"
                  alt="scriptbox"

                />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={`px-2 py-2 `} activeClassName="cool">
              {recommendedList}
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading className={`px-2 py-3 text-white font-semibold text-sm ${accState !== "raa-8" ? styles.footer_acc_border : ""}`}>
              <AccordionItemButton className="flex items-center justify-between">
                Amcs
                <img
                  src="https://deploy-preview-52--evergreen-gulp.netlify.app/assets/images/svg/cheveron-down-white.svg"
                  alt="scriptbox"

                />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={`px-2 py-2 `} activeClassName="cool">
              {amcList}
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>


      {/* last part */}
      <div className="max-w-screen-lg mx-auto pt-6 sm:text-center px-4">
        <p className=" text-scriptbox-gray-8 text-sm pb-2">
          Mutual Fund investments are subject to market risks. Please read all scheme related documents carefully before investing. Past performance is not an indicator of future returns.
        </p>
        <p className=" text-scriptbox-gray-8 text-sm pb-2">
          © Scripbox Advisors Private Limited 2020
        </p>
        <p className=" text-scriptbox-gray-8 text-sm">
          Mutual fund investment service provided by Scripbox.com India Pvt Ltd. ARN-84967
        </p>
      </div>





    </footer>
  );
};



export default Footer;