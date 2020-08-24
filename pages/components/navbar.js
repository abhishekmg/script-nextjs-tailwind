import React, { useState } from 'react';
import Link from 'next/link'
import containerStyles from "../../styles/customContainer.module.css";


const Navbar = props => {

  const [state, setState] = useState({
    showResponsiveNav: false
  })


  return (
    <>
      <header className="bg-scriptbox-orange w-full">
        <div className={`${containerStyles.container} mx-auto py-2 flex justify-between items-center`}>
          <div className="flex items-center">
            <div 
              className="sm:block hidden mr-2 cursor-pointer"
              onClick={() => setState({...state, showResponsiveNav: !state.showResponsiveNav})}
            >
              <figure>
                <svg className="h-6  w-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>

              </figure>
            </div>
            <Link href="/">
              <a>
                <figure>
                  <svg className="w-24 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 107 29" id="logo"><g clipPath="url(#dcclip0)" fillRule="evenodd" clipRule="evenodd" fill="#fff"><path d="M24.067 16.855l-.124 6.855h4.172v-6.855c0-1.566 1.265-2.84 2.822-2.84H32.9V10l-1.963-.061c-3.795 0-6.87 3.096-6.87 6.916zM75.275 9.939c-3.795 0-6.872 3.096-6.872 6.916 0 3.82 3.077 6.917 6.872 6.917 3.794 0 6.87-3.096 6.87-6.917 0-3.82-3.076-6.916-6.87-6.916zm2.453 6.916a2.465 2.465 0 01-2.453 2.47 2.464 2.464 0 01-2.455-2.47c0-1.362 1.1-2.47 2.455-2.47a2.465 2.465 0 012.453 2.47zM46.231 19.923a2.813 2.813 0 01-2.8-2.82c0-1.555 1.256-2.82 2.8-2.82 1.545 0 2.801 1.265 2.801 2.82s-1.256 2.82-2.8 2.82zm-6.813-3.019l-.006 12.155h3.798v-5.802a6.75 6.75 0 003.021.71c3.766 0 6.819-3.073 6.819-6.864 0-3.79-3.053-6.865-6.819-6.865-3.7 0-6.709 2.968-6.813 6.666zM60.528 19.927c-1.544 0-2.801-1.266-2.801-2.82 0-1.555 1.257-2.82 2.801-2.82 1.544 0 2.8 1.265 2.8 2.82 0 1.554-1.256 2.82-2.8 2.82zm-3.022-8.974V5.15H53.71v12.156c.11 3.698 3.12 6.665 6.82 6.665 3.764 0 6.818-3.074 6.818-6.864s-3.054-6.865-6.819-6.865a6.755 6.755 0 00-3.022.711zM34.002 9.985l4.316-.01v13.74h-4.316V9.985zM97.102.006v9.766h9.543V0h-3.595v1.308h2.295v7.156h-6.944v-7.15h2.372V.006h-3.671z"></path><path d="M100.882 7.305a3.503 3.503 0 01-1.03-.564l.513-.783c.271.204.549.359.83.463.281.106.551.158.811.158.246 0 .438-.049.574-.148a.465.465 0 00.204-.396v-.02a.374.374 0 00-.09-.248.818.818 0 00-.247-.186 2.165 2.165 0 00-.36-.143l-.423-.13a6.498 6.498 0 01-.554-.18 2.017 2.017 0 01-.504-.273 1.363 1.363 0 01-.365-.415 1.21 1.21 0 01-.142-.612V3.81c0-.242.046-.457.138-.644.091-.188.217-.349.379-.482.161-.134.351-.236.569-.306a2.28 2.28 0 01.697-.105 3.44 3.44 0 011.841.573l-.455.821a3.861 3.861 0 00-.731-.348 2.092 2.092 0 00-.683-.13c-.221 0-.394.049-.517.144a.442.442 0 00-.185.363v.019c0 .09.031.167.095.234a.924.924 0 00.251.181c.105.054.225.104.361.148.136.045.276.093.422.143.183.058.367.125.55.201.184.077.35.17.498.282.149.111.27.247.365.406.095.16.143.353.143.583v.019c0 .267-.048.5-.143.697a1.365 1.365 0 01-.393.492c-.168.13-.365.229-.593.296-.228.067-.472.1-.731.1-.36 0-.725-.064-1.095-.191zM18.299 19.697c-1.557 0-2.823-1.275-2.823-2.842 0-1.566 1.266-2.84 2.823-2.84a2.8 2.8 0 012.165 1.04l3.133-2.604a6.839 6.839 0 00-5.298-2.512c-3.796 0-6.872 3.096-6.872 6.916 0 3.82 3.076 6.917 6.872 6.917a6.836 6.836 0 005.272-2.484l-3.117-2.621a2.796 2.796 0 01-2.155 1.03zM10.847 21.122a4.546 4.546 0 01-1.22 1.481 5.444 5.444 0 01-1.787.925c-.68.21-1.406.316-2.178.316-1.057 0-2.067-.127-3.032-.38A9.526 9.526 0 010 22.35l1.662-3.166c.234.169.51.325.83.468.318.144.65.27.994.38.344.11.688.195 1.031.254.344.06.66.088.945.088.955 0 1.434-.295 1.434-.886 0-.287-.147-.507-.44-.66a6.806 6.806 0 00-1.095-.43 335.44 335.44 0 01-1.422-.443 5.634 5.634 0 01-1.422-.672 3.685 3.685 0 01-1.095-1.127c-.294-.465-.44-1.068-.44-1.812 0-.658.138-1.253.415-1.785a4.218 4.218 0 011.132-1.369c.478-.38 1.053-.675 1.724-.886a7.166 7.166 0 012.164-.318c.923 0 1.72.081 2.392.241.67.161 1.342.393 2.013.697l-1.51 3.091a7.271 7.271 0 00-1.233-.506 4.177 4.177 0 00-1.234-.204c-.47 0-.839.09-1.107.266-.268.178-.402.41-.402.697 0 .238.147.428.44.57.293.144.663.28 1.107.406.445.127.923.266 1.435.418.512.152.99.368 1.434.646.445.28.814.642 1.108 1.09.293.447.44 1.026.44 1.735 0 .743-.15 1.406-.453 1.99zM38.445 5.583c0 1.362-1.1 2.47-2.453 2.47a2.465 2.465 0 01-2.454-2.47c0-1.362 1.1-2.47 2.454-2.47a2.465 2.465 0 012.453 2.47zM88.28 13.58l-2.658-3.654H80.82l5.086 6.918-4.987 6.857h4.694l2.667-3.628 2.667 3.628h4.693l-4.987-6.857 5.085-6.918h-4.8L88.28 13.58z"></path></g></svg>
                </figure>
              </a>
            </Link>
          </div>

          <div className="sm:block hidden">
            <figure>
              <svg className="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="tel-icon"><path d="M2.294.737a1 1 0 011.413 0l2.577 2.58a.998.998 0 010 1.41l-1.96 1.958a.47.47 0 000 .665l4.33 4.325a.472.472 0 00.665 0l1.956-1.954a.999.999 0 011.415.002l2.575 2.589a.997.997 0 01-.002 1.41l-1.695 1.693a1.849 1.849 0 01-1.414.559C5.78 15.574.654 10.579.058 4.269c-.075-.792.258-1.557.821-2.12L2.294.738zM8 0c4.411 0 8 3.589 8 8h-2c0-3.309-2.691-6-6-6V0z" fill="#fff"></path></svg>
            </figure>
          </div>

          <nav className="sm:hidden block">
            <ul className="flex items-center space-x-2">
              <li>
                <Link href="/">
                  <a className="leading-tight flex items-center font-semibold text-sm text-white py-2 px-3 rounded-md hover:bg-scriptbox-orange-2 transition duration-150 ease-in-out">
                    <figure>
                      <svg className="h-3 w-3 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="tel-icon"><path d="M2.294.737a1 1 0 011.413 0l2.577 2.58a.998.998 0 010 1.41l-1.96 1.958a.47.47 0 000 .665l4.33 4.325a.472.472 0 00.665 0l1.956-1.954a.999.999 0 011.415.002l2.575 2.589a.997.997 0 01-.002 1.41l-1.695 1.693a1.849 1.849 0 01-1.414.559C5.78 15.574.654 10.579.058 4.269c-.075-.792.258-1.557.821-2.12L2.294.738zM8 0c4.411 0 8 3.589 8 8h-2c0-3.309-2.691-6-6-6V0z" fill="#fff"></path></svg>
                    </figure>                    
                    1800-102-1265                    
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="font-semibold text-sm text-white py-2 px-3 rounded-md hover:bg-scriptbox-orange-2 transition duration-150 ease-in-out">
                    Blog
                </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="font-semibold text-sm text-white py-2 px-3 rounded-md hover:bg-scriptbox-orange-2 transition duration-150 ease-in-out">
                    Login
                </a>
                </Link>
              </li>


              <li>
                <Link href="/">
                  <a className="font-semibold text-sm bg-white text-scriptbox-orange py-2 px-3 rounded-md hover:bg-scriptbox-gray transition duration-150 ease-in-out ">
                    Signup
                </a>
                </Link>
              </li>

            </ul>
          </nav>
        </div>
      </header>
      {state.showResponsiveNav && 
      <nav className="w-full absolute hidden sm:block bg-scriptbox-orange p-4">
        <ul className="space-y-1">
          <li className="w-full text-center py-1">
            <Link href="/">
              <a className="text-white text-sm font-semibold">
                Home
              </a>
            
            </Link>
          </li>
          <li className="w-full text-center py-1">
            <Link href="/">
              <a className="text-white text-sm font-semibold">
                Blog
              </a>
            
            </Link>
          </li>
          <li className="w-full text-center py-1">
            <Link href="/">
              <a className="text-white text-sm font-semibold">
                Login
              </a>
            </Link>
          </li>
          <li className="text-scriptbox-orange bg-white rounded-md w-full text-center py-1">
            <Link href="/">
              <a className="text-sm font-semibold">
                Signup
              </a>
            </Link>
          </li>
        </ul>
      </nav>}
    </>
  );
};


export default Navbar;