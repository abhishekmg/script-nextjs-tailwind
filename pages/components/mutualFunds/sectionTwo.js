import React, { useState } from 'react';
import styles from '../../../styles/Home.module.css'


const SectionTwo = props => {

  const [state, setState] = useState({
    sectionTwoActiveTab: 0,
    activeAccordianElement: 0,

  })

  const onAccordianElementClick = (activeNumber) => {
    setState({ ...state, activeAccordianElement: activeNumber })
  }

  const AccordianActiveElement = ({ children, number }) => (
    <div
      onClick={() => onAccordianElementClick(number)}
      className=" cursor-pointer pt-3 pr-3 pb-4 pl-3 text-sm font-medium text-scriptbox-gray-3 border-b"
    >
      {children}
    </div>
  )

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
  )

  const renderHeading = () => (
    <>
      <h6 className="text-scriptbox-gray-2 text-sm font-medium">
        How does scriptbox rate funds ?
      </h6>
      <h2 className="text-scriptbox-black-1 text-3xl font-bold pt-3 pb-2 leading-tight">
        Proprietary 4-step system to rate mutual funds
      </h2>
      <p className="text-scriptbox-gray-2 text-base lg:max-w-xs pb-6">
        We use a proprietary system to rate mutual funds and based on that make
        a recommendation or top ranking
      </p>
    </>
  )

  const renderTab = () => (
    <div className={`mx-auto ${styles.section_two_tab}`}>
      <div className=" cursor-pointer mt-4 flex items-center bg-scriptbox-blue-2 rounded-md text-sm">
        <div
          className=" p-1"
          onClick={() => setState({ ...state, sectionTwoActiveTab: 0 })}
        >
          <p className={`py-1 px-4 ${!state.sectionTwoActiveTab ? `bg-white rounded-md ${styles.section_two_tab_active}` : ""}`}>
            Equity Funds
        </p>

        </div>
        <div
          className="p-1"
          onClick={() => setState({ ...state, sectionTwoActiveTab: 1 })}

        >
          <p className={`py-1 px-4 ${state.sectionTwoActiveTab ? `bg-white rounded-md ${styles.section_two_tab_active}` : ""}`}>
            Dept Funds
        </p>

        </div>
      </div>


    </div>
  )

  const renderRightGrid = () => (
    <div className="mt-4 bg-white rounded-md shadow-md max-w-lg lg:w-full">
      {/* first row */}
      <div className="flex items-center border-b">
        <div className="p-6 border-r">
          <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 31" id="calender-event-icon"><path d="M28 4H4a3 3 0 00-3 3v20a3 3 0 003 3h24a3 3 0 003-3V7a3 3 0 00-3-3z" fill="#E6E6E6" stroke="#181818" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square"></path><path d="M28 4H4a3 3 0 00-3 3v5h30V7a3 3 0 00-3-3z" fill="#fff" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"></path><path d="M11 21l3 3 7-7" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M31 12H1" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10"></path><path d="M8 1v3M24 1v3" stroke="#181818" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"></path></svg>
          <h4 className="font-semibold text-base pt-4 pb-2">Track Record</h4>
          <p className=" text-sm text-scriptbox-gray-5">
            We look at consistent and long historical performance for our analysis
          </p>
        </div>
        <div className="p-6 relative">
          <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 31" id="calender-event-icon"><path d="M28 4H4a3 3 0 00-3 3v20a3 3 0 003 3h24a3 3 0 003-3V7a3 3 0 00-3-3z" fill="#E6E6E6" stroke="#181818" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square"></path><path d="M28 4H4a3 3 0 00-3 3v5h30V7a3 3 0 00-3-3z" fill="#fff" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"></path><path d="M11 21l3 3 7-7" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M31 12H1" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10"></path><path d="M8 1v3M24 1v3" stroke="#181818" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"></path></svg>
          <h4 className="font-semibold text-base pt-4 pb-2">
            {state.sectionTwoActiveTab ? "Fund size" : "Relative Size"}
          </h4>
          <p className=" text-sm text-scriptbox-gray-5">
            We look at consistent and long historical performance for our analysis
          </p>
          <img 
            src="https://deploy-preview-52--evergreen-gulp.netlify.app/assets/images/svg/multi-start.svg"
            className={`absolute ${styles.section_two_img}`}
          />
        </div>

      </div>
      {/* second row */}
      <div className="flex items-center">
        <div className="p-6 border-r">
          <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 31" id="calender-event-icon"><path d="M28 4H4a3 3 0 00-3 3v20a3 3 0 003 3h24a3 3 0 003-3V7a3 3 0 00-3-3z" fill="#E6E6E6" stroke="#181818" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square"></path><path d="M28 4H4a3 3 0 00-3 3v5h30V7a3 3 0 00-3-3z" fill="#fff" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"></path><path d="M11 21l3 3 7-7" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M31 12H1" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10"></path><path d="M8 1v3M24 1v3" stroke="#181818" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"></path></svg>
          <h4 className="font-semibold text-base pt-4 pb-2">
          {state.sectionTwoActiveTab ? "Sub-asset class view" : "Impact of interest rates"}

          </h4>
          <p className=" text-sm text-scriptbox-gray-5">
            We look at consistent and long historical performance for our analysis
      </p>
        </div>
        <div className="p-6">
          <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 31" id="calender-event-icon"><path d="M28 4H4a3 3 0 00-3 3v20a3 3 0 003 3h24a3 3 0 003-3V7a3 3 0 00-3-3z" fill="#E6E6E6" stroke="#181818" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square"></path><path d="M28 4H4a3 3 0 00-3 3v5h30V7a3 3 0 00-3-3z" fill="#fff" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"></path><path d="M11 21l3 3 7-7" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M31 12H1" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10"></path><path d="M8 1v3M24 1v3" stroke="#181818" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"></path></svg>
          <h4 className="font-semibold text-base pt-4 pb-2">
          {state.sectionTwoActiveTab ? "Fund Performance" : "Credit Attractiveness"}

          </h4>
          <p className=" text-sm text-scriptbox-gray-5">
            We look at consistent and long historical performance for our analysis
      </p>
        </div>

      </div>


    </div>
  )

  const renderAccordian = () => (
    <>
    {state.activeAccordianElement === 0 ?
              <AccordianNonActiveElement
                number={0}
              >
                <p className="flex items-center">
                  <img
                    className="w-4 h-4 mr-2"
                    src="https://deploy-preview-52--evergreen-gulp.netlify.app//assets/images/svg/mark.svg"
                  />
                Recommended
              </p>
              </AccordianNonActiveElement>
              :
              <AccordianActiveElement
                number={0}
              >
                <p className="flex items-center">
                  <img
                    className="w-4 h-4 mr-2"
                    src="https://deploy-preview-52--evergreen-gulp.netlify.app//assets/images/svg/mark.svg"
                  />
                Recommended
              </p>

              </AccordianActiveElement>
            }
            {state.activeAccordianElement === 1 ?
              <AccordianNonActiveElement
                number={1}
              >
                <p className="flex items-center">
                  <img
                    className="w-4 h-4 mr-2"
                    src="https://deploy-preview-52--evergreen-gulp.netlify.app//assets/images/svg/start-circled.svg"
                  />
                Top Ranked
              </p>
              </AccordianNonActiveElement>
              :
              <AccordianActiveElement
                number={1}
              >
                <p className="flex items-center">
                  <img
                    className="w-4 h-4 mr-2"
                    src="https://deploy-preview-52--evergreen-gulp.netlify.app//assets/images/svg/star-circled.svg"
                  />
                Top Ranked
              </p>
              </AccordianActiveElement>
            }
            {state.activeAccordianElement === 2 ?
              <AccordianNonActiveElement
                number={2}
              >
                <p className="flex items-center">
                  <img
                    className="w-4 h-4 mr-2"
                    src="https://deploy-preview-52--evergreen-gulp.netlify.app//assets/images/svg/not-recommended.svg"
                  />
                Not Recommended
              </p>
              </AccordianNonActiveElement>

              :
              <AccordianActiveElement
                number={2}
              >
                <p className="flex items-center">
                  <img
                    className="w-4 h-4 mr-2"
                    src="https://deploy-preview-52--evergreen-gulp.netlify.app//assets/images/svg/not-recommended.svg"
                  />
                Not Recommended
              </p>
              </AccordianActiveElement>
            }
    </>
  )

  // MAIN RETURN
  return (
    <section className="px-2  pt-24 pb-20 lg:px-4 bg-scriptbox-blue-1">
      <div className=" hidden lg:grid max-w-screen-lg mx-auto grid-cols-2 gap-24">
        <div>
          {renderHeading()}


          <div>
            {renderAccordian()}



          </div>
        </div>
        <div>
          {renderRightGrid()}
          {renderTab()}
        </div>


      </div>

      {/* non desktop */}
      <div className="block lg:hidden max-w-2xl mx-auto">
        <div>
          {renderHeading()}
          {renderTab()}
          <div className="flex justify-center">
            {renderRightGrid()}
          </div>
          <h6 className=" font-semibold text-sm py-5 text-scriptbox-black text-center">
            What Scripbox recommendations mean?
          </h6>
          {renderAccordian()}
        </div>
      </div>
    </section>
  );
};



export default SectionTwo;