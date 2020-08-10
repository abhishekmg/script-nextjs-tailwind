import { useState } from "react"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from "./components/layout"
import Link from 'next/link'
import { useQuery } from "react-query"
import axios from "axios"
import useFundsList from "./apiHooks/useFundsList"
import Pagination from "react-js-pagination";
import ReactModal from 'react-modal';




const Home = (props) => {

  const [text, setText] = useState("")
  const [filter, setFilter] = useState(['Equity'])

  const [state, setState] = useState({
    offset: 0,
    limit: 20,
    currentPage: 1,
    subAssetFilter: [],
    moreFilters: false,
    isFilterModalOpen: false,
    isFilterModalBasic: true
  })


  const { data, isLoading, resolvedData, latestData } = useFundsList(state.offset, text, filter, state.subAssetFilter)

  const FilterCheckBox = ({
    name,
    value,
    onChange,
    checked
  }) => {
    return (
      <div className="flex items-center space-x-2 pb-1 rounded-md hover:bg-scriptbox-gray-4 pl-1 -ml-1 pt-1 cursor-pointer">
        <input type="checkbox"
          onChange={() => onChange(value)}
          defaultChecked={checked}
          name={name}
          checked={filter.includes(value) || state.subAssetFilter.includes(value)}
        />
        <label for={name} className=" cursor-pointer text-sm text-scriptbox-gray-2">{name}</label>
      </div>
    )
  }

  FilterCheckBox.defaultProps = {
    checked: false,
    limit: 20
  }
  const FundsCard = ({
    figure,
    title,
    description
  }) => (
      <Link href="/">
        <a className="mr-8">
          <div className={`relative p-3 bg-white rounded-lg hover:bg-scriptbox-gray-4 ${styles.fund_filters_card}`}>
            <figure>
              {figure}
            </figure>
            <h4 className="pt-3 pb-1 text-base font-semibold">
              {title}
            </h4>
            <p className="text-scriptbox-gray-3 text-sm font-normal leading-normal">
              {description}
            </p>
            <div className={`absolute right-0 ${styles.funds_card_badge}`}>
              <p>
                5+ years
              </p>
            </div>
          </div>
        </a>
      </Link>
    )

  const renderFundsList = () => {
    if (isLoading) {
      return "Loading..."
    } else {
      return (
        <div className="">
          {resolvedData.results.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`block transition ease-in-out duration-200  ${styles.fund_list_item}`}
            >
              <div className={`py-4 flex items-center justify-between ${styles.list_div}`}>
                {/* left side */}
                <div className="flex items-center">
                  <div className={`bg-scriptbox-orange w-1 h-12 ${styles.orange_bar}`} />
                  <figure className="mx-3">
                    <img
                      src={item._source.amc_logo_url}
                      className=" w-8 h-8"
                    />
                  </figure>
                  <div>
                    <h4
                      className=" text-scriptbox-black-1 text-base font-semibold"
                    >
                      {item._source.fund_name}
                    </h4>
                    <div className="pt-3 flex items-center space-x-1">
                      <p className="text-sm font-normal text-scriptbox-gray-5">Large cap</p>
                      {(item._source.sb_view_value !== null && item._source.sb_view_value === "Scripbox Recommended") && <p className={`text-sm font-normal rounded bg-scriptbox-orange-3 text-scriptbox-orange  ${styles.recommended_badge}`}>Recommended</p>}
                      {(item._source.sb_view_value !== null && item._source.sb_view_value === "Top Ranked") && <p className={`text-sm font-normal rounded text-scriptbox-green  ${styles.topranked_badge}`}>Top Ranked</p>}
                      {(item._source.sb_view_value !== null && item._source.sb_view_value === "Not Recommended") && <p className={`text-sm font-normal rounded text-scriptbox-red`}>Not Recommended</p>}

                    </div>
                  </div>
                </div>
                {/* right side */}
                <div className="px-2 flex items-center">
                  <div className="mr-6">
                    <p className="font-normal text-sm text-scriptbox-black pb-3">{item._source.first_investment_amount} cr</p>
                    <p className="text-sm text-scriptbox-gray-5 font-normal">Fund size</p>
                  </div>
                  <div>
                    <svg class="sparkline-growth" width="64" height="13" stroke-width="2" stroke="blue" fill="rgba(0, 0, 255, .2)"><path class="sparkline--fill" d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07 V 13 L 4 13 Z" stroke="none"></path><path class="sparkline--line" d="M4 4.86 L 4 4.86 L 5.6 4.84 L 7.2 4.91 L 8.8 4.54 L 10.4 4.68 L 12 4.57 L 13.600000000000001 4.39 L 15.200000000000001 4.7 L 16.8 4.85 L 18.4 4.7 L 20 4.74 L 21.6 4.83 L 23.200000000000003 4.54 L 24.8 4.35 L 26.400000000000002 4.55 L 28 4.66 L 29.6 4.58 L 31.200000000000003 4.51 L 32.8 4.54 L 34.400000000000006 4.57 L 36 4.15 L 37.6 4.19 L 39.2 4 L 40.800000000000004 4.03 L 42.400000000000006 4.46 L 44 4.64 L 45.6 4.48 L 47.2 4.22 L 48.800000000000004 4.2 L 50.400000000000006 4.18 L 52 4.49 L 53.6 4.75 L 55.2 5.81 L 56.800000000000004 5.45 L 58.400000000000006 5.29 L 60 5.07" fill="none"></path><line class="sparkline--cursor" x1="-1000" x2="-1000" y1="0" y2="13" stroke-width="2"></line><circle class="sparkline--spot" cx="-1000" cy="4.86" r="2"></circle></svg>
                    <p className="text-sm text-scriptbox-gray-5 font-normal pt-3">5Y eturns</p>
                  </div>
                </div>


              </div>
            </a>
          ))}

        </div>
      )
    }
  }

  const renderBasicFilters = () => (
    <>
    <div className="py-4">
      <p className="font-semibold text-sm text-scriptbox-black-1 pb-2">Scripbox Verdict</p>
      <div>

        <FilterCheckBox
          name="Recommended"
          value="Recommended"
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
      <p className="font-semibold text-sm text-scriptbox-black-1 pb-2">Fund Category</p>
      <div>

        <FilterCheckBox
          name="Equity"
          value="Equity"
          onChange={(value) => {
            if (filter.includes(value)) {
              setFilter(filter.filter(item => item !== value))
            } else {
              setFilter(filter.concat(value))
            }
          }}
        />
        <FilterCheckBox
          name="Dept"
          value="Dept"
          onChange={(value) => {
            if (filter.includes(value)) {
              setFilter(filter.filter(item => item !== value))
            } else {
              setFilter(filter.concat(value))
            }
          }}
        />
        <FilterCheckBox
          name="Hybrid"
          value="Hybrid"
          onChange={(value) => {
            if (filter.includes(value)) {
              setFilter(filter.filter(item => item !== value))
            } else {
              setFilter(filter.concat(value))
            }
          }}
        />
        <FilterCheckBox
          name="International Equity"
          value="International Equity"
          onChange={(value) => {
            if (filter.includes(value)) {
              setFilter(filter.filter(item => item !== value))
            } else {
              setFilter(filter.concat(value))
            }
          }}
        />


      </div>
    </div>
    <div className="py-4">
      <p className="font-semibold text-sm text-scriptbox-black-1 pb-2">Fund House</p>
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
  )

  const renderAdvancedFilters = () => (
    <>
    <div className="py-4">
      <p className="font-semibold text-sm text-scriptbox-black-1 pb-2">Risk Level</p>
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


    </div>
    <div className="py-4">
      <p className="font-semibold text-sm text-scriptbox-black-1 pb-2">Fund Option</p>
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
      <p className="font-semibold text-sm text-scriptbox-black-1 pb-2">Sub Category</p>
      <div>

        <FilterCheckBox
          name="Large Cap"
          value="Large Cap"
          onChange={(value) => {
            if (state.subAssetFilter.includes(value)) {
              setState({ ...state, subAssetFilter: state.subAssetFilter.filter(item => item !== value) })
            } else {
              setState({ ...state, subAssetFilter: state.subAssetFilter.concat(value) })

            }
          }}
        />
        <FilterCheckBox
          name="Mid Cap"
          value="Mid Cap"
          onChange={(value) => {
            if (state.subAssetFilter.includes(value)) {
              setState({ ...state, subAssetFilter: state.subAssetFilter.filter(item => item !== value) })
            } else {
              setState({ ...state, subAssetFilter: state.subAssetFilter.concat(value) })

            }
          }}
        />
        <FilterCheckBox
          name="Small Cap"
          value="Small Cap"
          onChange={(value) => {
            if (state.subAssetFilter.includes(value)) {
              setState({ ...state, subAssetFilter: state.subAssetFilter.filter(item => item !== value) })
            } else {
              setState({ ...state, subAssetFilter: state.subAssetFilter.concat(value) })

            }
          }}
        />
        <FilterCheckBox
          name="Sectoral / Thematic"
          value="Sectoral / Thematic - BFSI"
          onChange={(value) => {
            if (state.subAssetFilter.includes(value)) {
              setState({ ...state, subAssetFilter: state.subAssetFilter.filter(item => item !== value) })
            } else {
              setState({ ...state, subAssetFilter: state.subAssetFilter.concat(value) })

            }
          }}
        />


      </div>


    </div>
    <div className="py-4">
      <p className="font-semibold text-sm text-scriptbox-black-1 pb-2">Fund Size</p>
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
        className={`h-8 shadow-xs rounded-md ${styles.search_funds} p-1 mr-3`}
        placeholder="search"
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  </>
  )

  const renderFundsFilter = () => {
    if (!state.moreFilters) {
      // show first set  filters
      return renderBasicFilters()

    } else {
      // show second set  filters
      return renderAdvancedFilters()
    }
  }




  return (
    <Layout>
      <div className="bg-scriptbox-gray-1">
        <section className="pt-16 px-2 lg:px-0 max-w-screen-lg mx-auto bg-scriptbox-gray-1">
          <ul className="-ml-2">
            <li>
              <Link href="/">
                <a className={`text-sm text-scriptbox-black bg-white ${styles.breadcrum}`}>
                  Mutual funds
                </a>
              </Link>
            </li>
          </ul>
          <h1 className="text-4xl font-bold py-3">Mutual Funds</h1>
          <p className="text-lg text-scriptbox-gray-2 max-w-lg font-light lin">
            Invest in the best mutual funds recommended by Scripbox that are algorithmically
            selected that best suit your needs.
          </p>
          {/* funds card */}
          <div className="pt-6 pb-4 hidden sm:flex items-center">

            <FundsCard
              figure={(<svg className="w-8 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 34 46" id="growth-fund-filters"><path fillRule="evenodd" clipRule="evenodd" d="M17.207 1c-2.384 0-4.915.813-6.634 3.182-1.068 1.47-1.828 3.625-2.233 6.485-1.914.662-3.157 1.851-3.781 3.515-.613 1.633-.67 3.406-.143 5.32-.97 1.612-1.51 3.011-1.654 4.186-.23 1.86.106 4.235.575 5.823.767 2.598 2.085 4.961 3.826 6.622 1.641 1.565 3.654 2.515 5.944 2.515h7.828c3.162 0 5.878-2.705 7.558-4.692 1.86-2.2 2.9-4.783 2.9-9.777 0-2.633-.888-4.685-2.625-6.18.412-4.184-.173-7.085-1.562-8.79-1.075-1.32-2.22-2.202-3.414-2.677-.26-2.152-1.198-3.66-2.728-4.582C19.865 1.227 18.68 1 17.207 1z" fill="#ACE0A2" stroke="#54894A" strokeWidth="1.5"></path><path d="M16.986 44.91V20.53M1 45.084h31.982M20.935 22.277l-3.949 4.856M12.482 25.783l4.51 3.903v5.603l5.514-6.754" stroke="#54894A" strokeWidth="1.5" strokeLinecap="round"></path></svg>)}
              title="Long term funds"
              description="Top equity mutual funds for long-term goals"
            />
            <FundsCard
              figure={(<svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 43" id="coin-fund-filters"><path d="M18.876 41.694c9.872 0 17.876-8.004 17.876-17.876 0-9.873-8.004-17.876-17.876-17.876C9.003 5.942 1 13.945 1 23.818c0 9.872 8.003 17.876 17.876 17.876z" fill="#FFE1A8" stroke="#B77A0A" strokeWidth="1.5"></path><path d="M30.902 4.165h6.33M34.066 1v6.33M39.438 12.469H43M41.219 10.687v3.563" stroke="#B77A0A" strokeWidth="1.5" strokeLinecap="round"></path><path d="M21.585 34.135l-7.97-9.389h1.68c3.473 0 6.29-1.83 6.29-4.647s-2.817-4.647-6.29-4.647h-1.68" stroke="#B77A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13.607 20.107h10.788M13.61 15.443h10.787" stroke="#B77A0A" strokeWidth="1.5" strokeLinecap="round"></path></svg>)}
              title="Short term funds"
              description="Beat FD returns with the best debt mutual funds"
            />
            <FundsCard
              figure={(<svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 37 42" id="tax-saving-fund-filters"><path fillRule="evenodd" clipRule="evenodd" d="M3.174 41.15c-.598 0-1.14-.246-1.535-.64A2.167 2.167 0 011 38.976V2.086l2.956 1.478L7.086 2l3.128 1.564L13.343 2l3.129 1.564L19.6 2l3.129 1.564L25.859 2l3.129 1.564 2.955-1.477-.079 37.16c-.108.132-.302.236-.587.352-.803.33-2.156.606-4.408.843-4.207.443-11.403.708-23.695.708z" fill="#fff" stroke="#5890DA" strokeWidth="1.5"></path><path fillRule="evenodd" clipRule="evenodd" d="M36 33.324H5.373v5.078c0 1.572-.65 2.744-2.304 2.744h31.368a1.57 1.57 0 001.565-1.564v-6.258z" fill="#8DBFFF" stroke="#5890DA" strokeWidth="1.5"></path><path d="M11.216 24.23L23.95 11.36" stroke="#5890DA" strokeWidth="1.5" strokeLinecap="round"></path><path d="M18.652 21.802a1.875 1.875 0 100 3.75 1.875 1.875 0 000-3.75zM16.576 9.949a1.875 1.875 0 100 3.75 1.875 1.875 0 000-3.75z" stroke="#5890DA" strokeWidth="1.5"></path></svg>)}
              title="Tax Saving Funds"
              description="Top ELSS funds to save tax the smart way"
            />
            <FundsCard
              figure={(<svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 49 37" id="emergency-fund-filters"><path fillRule="evenodd" clipRule="evenodd" d="M11.361 27.854a.33.33 0 00-.323.383l1.162 6.78a1.182 1.182 0 001.166.983h2.845a1.182 1.182 0 001.168-.998l1.066-6.769a.335.335 0 00-.093-.284.33.33 0 00-.234-.097l-6.757.002zM30.152 27.854a.329.329 0 00-.323.383l1.165 6.78a1.182 1.182 0 001.165.983h2.716a1.182 1.182 0 001.166-.981l1.17-6.781a.331.331 0 00-.324-.384h-6.735z" fill="#FFBDBD" stroke="#B26868" strokeWidth="1.5"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.499 1.018l3.649.636a2.471 2.471 0 012.042 2.26l.062.878a25.992 25.992 0 019.874-1.786c10.375 0 18.79 5.069 18.79 14.467 0 9.399-8.413 14.454-18.79 14.454-9.085 0-16.665-3.76-18.41-11.102l-3.831-1.324A1.313 1.313 0 011 18.259v-2.713a1.314 1.314 0 01.893-1.246l4.182-1.414A12.354 12.354 0 019.169 8.05a2.455 2.455 0 01-1.101-1.512l-.98-4.008a1.236 1.236 0 011.41-1.512z" fill="#FFBDBD" stroke="#B26868" strokeWidth="1.5"></path><path d="M11.623 14.046a1.446 1.446 0 100-2.89 1.446 1.446 0 000 2.89z" fill="#C56565"></path><path d="M20.29 5.938a27.144 27.144 0 018.662.1M42.914 12.886c2.447-.608 4.04-.111 4.778 1.492" stroke="#B26868" strokeWidth="1.5" strokeLinecap="round"></path></svg>)}
              title=" Emergency Funds"
              description="Top liquid funds for life's surprise expenses"
            />

            <Link href="/">
              <a className="mr-8">
                <div className={`p-3 rounded-lg bg-scriptbox-gray-4 ${styles.fund_filters_card_last}`}>
                  <figure>
                    <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" id="down-arrow-rounded"><circle cx="24" cy="24" r="24" fill="#E6E6E6"></circle><path fillRule="evenodd" clipRule="evenodd" d="M30.708 24.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L23 28.586V17a1 1 0 112 0v11.586l4.293-4.293a1 1 0 011.414 0z" fill="#737373"></path></svg>

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
        {/* funds section */}
        <section className="px-2 pt-4 pb-20 lg:px-0 max-w-screen-lg mx-auto bg-scriptbox-gray-1">
          <div className="flex">
           {/* funds filters */}
            <div className=" hidden lg:block w-1/3">
              <div className="mr-12 divide-y">
                <div className="pb-4 flex items-center justify-between">
                  <p className="text-base font-medium text-scriptbox-gray-2">Filters</p>
                  <button
                    className="p-1 bg-scriptbox-gray-4 hover:bg-scriptbox-gray-6 rounded-md text-xs text-scriptbox-gray-3"
                    onClick={() => {
                      setFilter([])
                      setState({ ...state, subAssetFilter: [] })
                    }}
                  >
                    Reset
                  </button>
                </div>
                {renderFundsFilter()}
                <div className="py-4">
                  <p
                    className={`${!state.moreFilters ? styles.advanced_filters : styles.back_filters} hover:bg-scriptbox-gray-4 rounded-md cursor-pointer`}
                    onClick={() => setState({ ...state, moreFilters: !state.moreFilters })}
                  >
                    {!state.moreFilters ? "Show Advanced Filters" : "Back To Basic Filters"}
                  </p>
                </div>
              </div>


            </div>

            {/* funds list section */}
            <div className="w-full">
              <div className="pb-3">
                <p className="font-medium text-base text-scriptbox-gray-2">Showing {resolvedData && resolvedData.results && resolvedData.results.length} of {resolvedData && resolvedData.total && resolvedData.total} funds</p>
              </div>
              <div className={`py-2 px-6 bg-white rounded-lg ${styles.funds_list_div}`}>
                {renderFundsList()}
              </div>
              <div className="flex justify-between mt-6 overflow-x-scroll">

                <button
                  className={`py-2 px-4 bg-white rounded-md hover:bg-scriptbox-gray-4 text-scriptbox-gray-2 text-sm ${styles.pagination_button}`}
                  onClick={() => setState({ ...state, offset: state.offset - state.limit, currentPage: state.currentPage - 1 })}
                >
                  Previous
                </button>
                <Pagination
                  innerClass={styles.pagination_div}
                  activeClass={styles.pagination_active}
                  itemClass={styles.pagination_item}
                  itemClassFirst="rounded-l-md"
                  itemClassLast="rounded-r-md"
                  itemClassPrev="hidden"
                  itemClassNext="hidden"
                  activePage={state.currentPage}
                  itemsCountPerPage={state.limit}
                  totalItemsCount={resolvedData && resolvedData.total && resolvedData.total}
                  pageRangeDisplayed={5}
                  onChange={(page) => {
                    if (page === 1) {
                      setState({ ...state, offset: 0, currentPage: 1 })
                    } else {
                      setState({
                        ...state,
                        offset: (page - 1) * state.limit,
                        currentPage: page
                      })
                    }
                  }}
                />

                <button
                  className={`py-2 px-4 bg-white rounded-md hover:bg-scriptbox-gray-4 text-scriptbox-gray-2 text-sm ${styles.pagination_button}`}
                  onClick={() => setState({ ...state, offset: state.offset + state.limit, currentPage: state.currentPage + 1 })}
                >
                  Next
                </button>
              </div>
            </div>


          </div>
          <button 
            className=" lg:hidden p-3 rounded bg-gray-900 text-white fixed bottom-1.25 left-45p"
            onClick={() => setState({...state, isFilterModalOpen: true})}
          >
            Add Filter
          </button>

        </section>
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
            overflow: "hidden"
          }
        }}
      >
        <header className=" flex items-center justify-between px-4 py-2 bg-scriptbox-black">
          <button
            className={`${styles.filter_modal_back}`}
            onClick={() => setState({ ...state, isFilterModalOpen: false })}
          />

          <h2 className="text-white font-semibold text-base">Filter Results</h2>

          <button 
            className="text-white bg-scriptbox-gray-3 px-1 text-sm rounded-md"
          >
            Reset
          </button>

        </header>
        <div className="flex items-center">
          <div 
            className={`cursor-pointer w-1/2 py-3 text-center ${state.isFilterModalBasic ? "border-b border-scriptbox-blue text-scriptbox-blue" : "border-b text-scriptbox-gray-5"} font-semibold`}
            onClick={() => setState({...state, isFilterModalBasic: true}) }
          >
            Basic
          </div>
       
          <div 
            className={`cursor-pointer w-1/2 py-3 text-center ${!state.isFilterModalBasic ? "border-b border-scriptbox-blue text-scriptbox-blue" : "border-b text-scriptbox-gray-5"} font-semibold`}
            onClick={() => setState({...state, isFilterModalBasic: false}) }

          >
            Advanced
          </div>
        </div>
        <div className={`${styles.filter_modal_body} px-4`}>
          {state.isFilterModalBasic ? renderBasicFilters() : renderAdvancedFilters()}
        </div>

        <div className="fixed bottom-1.25 w-full px-4">
        <button 
          className="text-white font-semibold text-base rounded-md p-4 bg-scriptbox-black w-full"
          onClick={() => setState({...state, isFilterModalOpen: false})}  
        >
          Showing {resolvedData && resolvedData.results && resolvedData.results.length} of {resolvedData && resolvedData.total && resolvedData.total} funds
        </button>
        </div>
    

      </ReactModal>
    </Layout>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const { data } = await await axios.post(
    `https://apus.scripbox.com/api/v1/search`,
    {
      "q": "",
      "from": 0,
      "size": 20
    }
  );
  const initialFundsList = await data

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      initialFundsList,
    },
  }
}

export default Home
