import React from 'react';
import styles from '../../../styles/Home.module.css'

const SectionFour = props => {
  return (
    <section className="pt-32 pb-24 lg:px-4 bg-white ">
      <div className="max-w-screen-lg mx-auto px-4 lg:px-0">
        <h2 className="text-scriptbox-black-1 text-3xl font-bold text-center">
          What are Best Equity Mutual Funds?
        </h2>
        <div className="flex flex-col lg:flex-row pt-12">
          <div className="mr-0 sm:mr-20 flex-my1">
            <h3 className="text-xl text-scriptbox-black-1 font-bold pb-3">
              Why invest in mutual funds?
            </h3>
            <p className="text-scriptbox-gray-2 text-base pb-4">
              Invest in the best mutual funds to invest recommended by Scripbox that
              are scientifically and algorithmically selected that best suit your needs.
              Be it long-term, short-term, tax saving or your emergency needs.
            </p>
            <p className="text-scriptbox-gray-2 text-base">
              We have you covered. Let’s take a look at the top mutual funds to invest this year. You can invest in the mutual funds based on broad categories namely equity funds, debt funds, balanced fund, and liquid funds
            </p>
          </div>
          <div className="mt-8 lg:mt-0">

            <figure className="max-w-full sm:max-w-27-875 lg:min-w-27-875 w-full sm:mx-auto">
              <iframe
                title="scriptbox youtube"
                loading="lazy"
                src="https://www.youtube.com/embed/G8_zxdLM1Ao"
                // className="rounded-md min-h-15-68 max-h-15-68 max-w-full w-full h-full"
                className={styles.iframe}
              />
            </figure>
          </div>
        </div>


        {/* invest now */}
        <div className="pt-8">
          <h4 className="text-scriptbox-black-1 text-xl font-bold">
            Invest Now
          </h4>
          <div className="pt-4 flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
            <div>
              <p className="text-scriptbox-black-1 text-base font-semibold pb-2">
                Scientifically-chosen funds
              </p>
              <p className="text-scriptbox-gray-2 text-sm">
                Scripbox algorithms help you choose the best mutual funds to invest now in India from over 8,000 choices based on their historical performance
              </p>
            </div>
            <div>
              <p className="text-scriptbox-black-1 text-base font-semibold pb-2">
                Start modest
              </p>
              <p className="text-scriptbox-gray-2 text-sm">
                Start small, stay strong. The longer you stay invested with us, the better your returns are. Why? Because it is the magic of compounding
              </p>
            </div>
            <div>
              <p className="text-scriptbox-black-1 text-base font-semibold pb-2">
                One-click investment
              </p>
              <p className="text-scriptbox-gray-2 text-sm">
                Choose between SIPs (Systematic Investment Plan) and OTIs (one-time investments). Invest in top mutual funds to invest in India with a single click.
              </p>
            </div>
            <div>
              <p className="text-scriptbox-black-1 text-base font-semibold pb-2">
                Track your investments
              </p>
              <p className="text-scriptbox-gray-2 text-sm">
                We help you stay on track with your investments and also inform you in case you need to change your selection.
              </p>
            </div>
          </div>

        </div>

        {/* what are mutual funds */}
        <div className="pt-16 flex flex-col md:flex-row">
          <div className="mr-8 md:max-w-lg md:min-w-32 w-full pb-6 md:pb-0">
            <h4 className="text-scriptbox-black-1 text-xl font-bold">
              What are mutual funds
            </h4>
            <p className="text-scriptbox-gray-2 text-sm pb-4">
              An asset management company AMC or fund house pools investments made by individual investors and institutional investors. With this pool of investments, an AMC forms a mutual fund.
            </p>
            <p className="text-scriptbox-gray-2 text-sm pb-4">
              AMCs have fund managers who manage the fund investments amount and invest in stocks, securities, and bonds, etc on the behalf of investors.
            </p>
            <p className="text-scriptbox-gray-2 text-sm">
              Mutual fund investors are allocated units of the fund against the quantum of investment. These units can be re-invested or redeemed by investors on the maturity of the fund at the NAV.
            </p>
          </div>
          <div>
            <div className="px-6 pt-6 pb-8 bg-scriptbox-blue-1 rounded-md flex">
              <figure className="h-6 w-6 mr-4 mt-1">
                <svg className="h-6 w-6" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.365 0C6.49771 0 0.911133 5.60754 0.911133 12.5C0.911133 19.3925 6.49771 25 13.365 25C20.2323 25 25.8189 19.3925 25.8189 12.5C25.8189 5.60754 20.2323 0 13.365 0Z" fill="#43A6DD"></path>
                  <path d="M15.5305 17.3909H13.9061V11.4126C13.9061 11.1125 13.6639 10.8691 13.3646 10.8691H11.1987C10.8994 10.8691 10.6572 11.1125 10.6572 11.4126C10.6572 11.7128 10.8994 11.9561 11.1987 11.9561H12.8231V17.3909H11.1987C10.8994 17.3909 10.6572 17.6342 10.6572 17.9344C10.6572 18.2345 10.8994 18.4778 11.1987 18.4778H15.5305C15.8298 18.4778 16.072 18.2345 16.072 17.9344C16.072 17.6342 15.8298 17.3909 15.5305 17.3909Z" fill="white"></path>
                  <path d="M13.3652 9.23934C13.9633 9.23934 14.4481 8.7527 14.4481 8.15239C14.4481 7.55208 13.9633 7.06543 13.3652 7.06543C12.7671 7.06543 12.2822 7.55208 12.2822 8.15239C12.2822 8.7527 12.7671 9.23934 13.3652 9.23934Z" fill="white"></path>
                </svg>
              </figure>

              <div>
                <p className="text-scriptbox-black-1 text-base font-semibold pb-2">
                  What is a mutual fund NAV?
              </p>
                <p className="text-scriptbox-gray-2 text-sm">
                  Net asset value NAV is the market price of the fund. It is important because it represents the worth of each share of the fund. One can say just like shares have a share price, mutual funds have a NAV to represent it’s worth.
              </p>
              </div>
            </div>
          </div>

        </div>

        {/* how to select */}
        <div className="pt-12">
          <div className="pb-16 sm:max-w-xl ">
            <div className={`bg-scriptbox-orange w-10 h-0-125`} />
            <h4 className="text-scriptbox-black-1 text-xl font-bold pt-6 pb-3">
              How to Select the Top Performing Mutual Funds In India in 2020?
            </h4>
            <p className=" text-scriptbox-black-1">
              An investor would ultimately want a mutual fund that provides a higher return. The entire selection process can be guided by three attributes which are an investor’s life goals, understanding of investment risk and investment horizon
            </p>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="md:mr-8 w-full md:w-1/2 pb-8 md:pb-0">
              <p className="text-scriptbox-black-1 pb-3 font-semibold">
                Investment Objective
              </p>
              <p className="text-scriptbox-gray-2 text-sm pb-3">
                An investor should first sort out his personal life goals and corresponding to the life goals an investment plan must be chosen. Each scheme is different from the other and serves a different purpose.
              </p>
              <p className="text-scriptbox-gray-2 text-sm pb-3">
                Hence to arrive at a meaningful decision the fund investments objective must match an investor’s goals, investment plan and risk appetite. A long term objective cannot be met with a short term scheme.
              </p>
              <p className="text-scriptbox-gray-2 text-sm">
                All the necessary details related to the scheme, its asset allocation, objective, and strategy are available in the key information document and scheme information document.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-scriptbox-black-1 pb-3 font-semibold">
                Fund History
              </p>
              <p className="text-scriptbox-gray-2 text-sm pb-3">
                The fund history is the track record of the fund’s performance in the past during the ups and downs of the market. This shows the strength of the fund during tough times.
              </p>
              <p className="text-scriptbox-gray-2 text-sm pb-3">
                A recently launched fund may or may not outperform the tough times i.e. bear runs in the market since it does not have dealt with such scenarios. On the other hand, a fund with a good history of generating consistent returns shows the accuracy of investment strategies.
              </p>
              <p className="text-scriptbox-gray-2 text-sm">
                accuracy of investment strategies.

                To shortlist, an investor must check the track for the same period for which the investment horizon is decided. For example, if an investor is willing to invest for say 5 years he must check the track record of 5 years of the fund.
              </p>
            </div>

          </div>

          <div className=" mt-16 flex flex-col md:flex-row">
            <div className="md:mr-8 w-full md:w-1/2 pb-8 md:pb-0">
              <p className="text-scriptbox-black-1 pb-3 font-semibold">
              Expense Ratio
              </p>
              <p className="text-scriptbox-gray-2 text-sm pb-3">
              An annual fee is charged by the fund house manager for managing an investor’s funds, this is called expense ratio and expressed as a percentage. The final payoff to an investor will be the returns generated minus the expense ratio. The net amount is the final amount that an investor received.
              </p>
              <p className="text-scriptbox-gray-2 text-sm">
              A higher expense ratio would result in lower returns for an investor. Hence while considering a fund, an investor must choose a fund with a lower expense ratio compared to peer funds in the category.
              </p>
   
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-scriptbox-black-1 pb-3 font-semibold">
              Performance of fund manager
              </p>
              <p className="text-scriptbox-gray-2 text-sm pb-3">
              The fund manager’s involvement is critical in the performance of a fund. It is the fund manager’s responsibility to ensure the show is going smoothly. It is important to know the track record of the fund manager.
              </p>
              <p className="text-scriptbox-gray-2 text-sm">
              An investor must check the performance of the fund during the market rally and slump. Better fund management is showcased when a fund provides consistent returns and contains losses during the bear runs of the market.
              </p>
 
            </div>

          </div>
        </div>

        {/* how to invest in top fund */}
        <div className="pt-16">
         <div className={`bg-scriptbox-orange w-10 h-0-125 mb-6`} />

         <div className="flex flex-col lg:flex-row">
          <div className="mr-8  lg:max-w-xl lg:min-w-36 w-full">
            <h4 className="pb-3 text-xl font-bold">
              How to invest in Top Performing Mutual Fund?
            </h4>
            <p className="pb-3 text-base text-scriptbox-gray-2">
              An investor can invest a lump sum one time or through SIP periodically. An investor can choose to invest lump sum one time if he has considerable corpus to invest for a longer-term. While SIP is a regular investment over a period of time.
            </p>
            <p className="pb-3 text-base text-scriptbox-gray-2">
              An investor can choose to invest monthly, quarterly or half-yearly. SIP mutual funds are recommended for the first time mutual fund investors.
            </p>
            <p className="pb-3 text-base text-scriptbox-gray-2">
            Investing through Scripbox is made easy and <b>paperless</b>. All you need to do is follow the 5 easy steps to start investing.
            </p>
          </div>
          <div className="w-full pt-8 lg:pt-0">

            <ul className={` max-w-lg mx-auto rounded-md py-8 px-6 ${styles.section_four_shadow } shadow-4`}>
              <li className={`${styles.section_four_li} text-base text-scriptbox-black-1 font-semibold relative leading-1-15 pl-2p pb-6`}>
                Sign in at scripbox.com
              </li>
              <li className={`${styles.section_four_li} text-base text-scriptbox-black-1 font-semibold relative leading-1-15 pl-2p pb-6`}>
              Enter your personal details like dob, gender
              </li>
              <li className={`${styles.section_four_li} text-base text-scriptbox-black-1 font-semibold relative leading-1-15 pl-2p pb-6`}>
              Complete your KYC
              </li>
              <li className={`${styles.section_four_li} text-base text-scriptbox-black-1 font-semibold relative leading-1-15 pl-2p pb-6`}>
              Add your bank details
              </li>
              <li className={`${styles.section_four_li_last} text-base text-scriptbox-black-1 font-semibold relative leading-1-15 pl-2p pb-6`}>
              Create a new plan and start investing
              </li>
            </ul>
          </div>


         </div>

        </div>
      </div>


    </section >
  );
};


export default SectionFour;