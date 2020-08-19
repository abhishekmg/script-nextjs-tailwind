import React, { useState } from 'react';
import styles from '../../../styles/Home.module.css'
import Pagination from "react-js-pagination";

import useFundsList from "../../apiHooks/useFundsList"
import ReactModal from 'react-modal';
import axios from "axios"


const SectionOne = ({initialFundsList}) => {

  const [text, setText] = useState("")
  const [filter, setFilter] = useState([])

  const [state, setState] = useState({
    offset: 0,
    limit: 20,
    currentPage: 1,
    subAssetFilter: [],
    moreFilters: false,
    isFilterModalOpen: false,
    isFilterModalBasic: true,
  })



  const { data, isLoading, resolvedData, latestData } = useFundsList(state.offset, text, filter, state.subAssetFilter, initialFundsList)

  const FilterCheckBox = ({
    name,
    value,
    onChange,
    checked
  }) => {
    return (
      <div onClick={() => onChange(value)} className="flex items-center space-x-2 rounded-md hover:bg-scriptbox-gray-4  cursor-pointer -ml-0375 -mr-0375 p-0375 leading-1-2">
        <input 
          type="checkbox"
          className="w-4 h-4 form-checkbox text-scriptbox-blue-6 shadow-3 border-scriptbox-gray-8"
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
    limit: 20,
    onChange: () => {}
  }

  const renderFundsList = () => {
    if (isLoading) {
      return "Loading..."
    } else {
      return (
        <>
          {resolvedData && resolvedData.results && resolvedData.results.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`block transition ease-in-out duration-200  ${styles.fund_list_item}`}
            >
              <div className={`px-2 sm:px-0 py-4 flex items-center justify-between ${styles.list_div} min-w-0`}>
                {/* left side */}
                <div className="flex items-center min-w-0 flex-my1">
                  <div className={`bg-scriptbox-orange w-1 h-12 ${styles.orange_bar}`} />
                  <figure className="mx-3">
                    <img
                      src={item._source.amc_logo_url}
                      className=" w-8 h-8"
                  alt="scriptbox"

                    />
                  </figure>
                  <div className="min-w-0 flex-my1">
                    <h4
                      className={`truncate text-scriptbox-black-1 text-sm md:text-base font-semibold`}
                    >
                      {item._source.fund_name}
                    </h4>
                    <div className="pt-3 flex items-center space-x-1">
                      <p className="text-sm font-normal text-scriptbox-gray-5">Large cap</p>
                      {(item._source.sb_view_value !== null && item._source.sb_view_value === "Scripbox Recommended") && <p className={`text-sm font-normal rounded bg-scriptbox-orange-3 text-scriptbox-orange ${styles.recommended_badge} ${styles.badge_atom}`}>Recommended</p>}
                      {(item._source.sb_view_value !== null && item._source.sb_view_value === "Top Ranked") && <p className={`text-sm font-normal rounded text-scriptbox-green  ${styles.topranked_badge} ${styles.badge_atom}`}>Top Ranked</p>}
                      {(item._source.sb_view_value !== null && item._source.sb_view_value === "Not Recommended") && <p className={`text-sm font-normal rounded text-scriptbox-red ${styles.notRecommended_badge} ${styles.badge_atom}`}>Not Recommended</p>}

                    </div>
                  </div>
                </div>
                {/* right side */}
                <div className="px-2 flex items-center">
                  <div className="hidden sm:block mr-6">
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

        </>
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
    <section className="sm:mx-auto sm:px-2 sm:pt-4 pb-20 lg:px-4 max-w-screen-lg  bg-scriptbox-gray-1">
    <div className="flex">
      {/* funds filters */}
      <div className={`hidden lg:block mr-12 max-w-17-62 min-w-15 w-full`}>
        <div className="sticky top-0  divide-y ">
          <div className="pb-4 pt-2 flex items-center justify-between">
            <p className="text-base font-medium text-scriptbox-gray-2">Filters</p>
  
            <div 
              className="relative"
              onClick={() => {
                setFilter([])
                setState({ ...state, subAssetFilter: [] })
              }}  
            >
              <span className="bg-scriptbox-gray-4 py-2 pl-2 pr-8 text-xs font-medium rounded-md text-scriptbox-gray-3 leading-1-2">
                Reset Filters
              </span>
              <span className="absolute top-0-3125 right-0-25 text-scriptbox-gray-3 bg-scriptbox-gray-6 font-medium text-xs py-0-125 px-0375 rounded-md leading-1-2">
                {filter.length + state.subAssetFilter.length}
              </span>
            </div>
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
      <div className="w-full pt-2 lg:max-w-48-75">
        <p className="hidden sm:block sm:pb-3 font-medium text-base text-scriptbox-gray-2">Showing {resolvedData && resolvedData.results && resolvedData.results.length} of {resolvedData && resolvedData.total && resolvedData.total} funds</p>
        <div className={`sm:py-2 sm:px-6 bg-white sm:rounded-lg sm:shadow-4`}>
          {renderFundsList()}
        </div>
        <div className="px-4 sm:px-0 flex justify-between mt-6 overflow-x-scroll">

            <button
              className={`py-2 px-4 bg-white rounded-md hover:bg-scriptbox-gray-4 text-scriptbox-gray-2 text-sm ${styles.pagination_button}`}
              onClick={() => setState({ ...state, offset: state.offset - state.limit, currentPage: state.currentPage - 1 })}
              disabled={state.offset === 0}
            >
              Previous
          </button>
            <span className="hidden sm:block">
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
            </span>


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
      className={`lg:hidden p-3 rounded bg-gray-900 text-white fixed left-39p sm:left-45p ${styles.add_filter}`}
      onClick={() => setState({ ...state, isFilterModalOpen: true })}
    >
      Add Filter
    </button>


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
            onClick={() => setState({ ...state, isFilterModalBasic: true })}
          >
            Basic
          </div>

          <div
            className={`cursor-pointer w-1/2 py-3 text-center ${!state.isFilterModalBasic ? "border-b border-scriptbox-blue text-scriptbox-blue" : "border-b text-scriptbox-gray-5"} font-semibold`}
            onClick={() => setState({ ...state, isFilterModalBasic: false })}

          >
            Advanced
          </div>
        </div>
        <div className={`${styles.filter_modal_body} px-4`}>
          {state.isFilterModalBasic ? renderBasicFilters() : renderAdvancedFilters()}
        </div>

        <div className="fixed bottom-1 w-full px-4">
          <button
            className="text-white font-semibold text-base rounded-md p-4 bg-scriptbox-black w-full"
            onClick={() => setState({ ...state, isFilterModalOpen: false })}
          >
            Showing {resolvedData && resolvedData.results && resolvedData.results.length} of {resolvedData && resolvedData.total && resolvedData.total} funds
        </button>
        </div>


      </ReactModal>

  </section>
  
  );
};




export default SectionOne;

