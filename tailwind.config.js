module.exports = {
  theme: {
    // customForms: theme => ({
    //   default: {

    //     checkbox: {
    //       icon: `<svg width=“10” height=“8" viewBox=“0 0 10 8” fill=“none” xmlns=“http://www.w3.org/2000/svg”>
    //       <path fill-rule=“evenodd” clip-rule=“evenodd” d=“M9.67572 0.262852C10.0828 0.636044 10.1103 1.26861 9.73715 1.67573L4.23715 7.67573C4.05285 7.87679 3.79441 7.99384 3.52172 7.99977C3.24904 8.0057 2.98576 7.89998 2.79289 7.70711L0.292893 5.20711C-0.0976311 4.81659 -0.0976311 4.18342 0.292893 3.7929C0.683417 3.40237 1.31658 3.40237 1.70711 3.7929L3.46859 5.55438L8.26285 0.324281C8.63604 -0.0828378 9.26861 -0.110341 9.67572 0.262852Z” fill=“white”/>
    //       </svg>
          
    //       `
    //     },

    //   },
    // }),
    screens: {
      'sm': '576px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 1024px) { ... }

      'lg': '992px',
      // => @media (min-width: 1280px) { ... }
      'xl': '1199px' 
    },

    inset: {
      '0' : '0',
      '0-25' : '0.25rem',
      '1': '1.25rem',
      '0-3125' : '0.3125rem',
      '45p': '45%',
      '39p' : '39%',
      '075' : '0.75rem',
      '50p' : '50%'
    },
    minWidth: {
      '0': '0',
      '32' : '32rem',
      '36' : '36rem',
      '24.5' : '24.5rem',
      '12' : '12rem',
      '0-0625' : '0.0625rem',
      '15' : '15rem'



    },
    maxWidth: {
      'full' : '100%',
      'screen-lg' : '71.25rem',
      'lg' : '33.5rem',
      '27' : '27rem',
      '12' : '12rem',
      '28-625' : '28.625rem',
      '23-75' : '23.75rem',
      '21-875' : '21.875rem',
      '15-9' : '15.9rem',
      '17-815' : '17.815rem',
      '31-875' : '31.875rem',
      '13-56' : '13.56rem',
      '33-5' : '33.5rem',
      '17-62' : '17.62rem',
      '48-75' : '48.75rem',





    },
    extend: {
      colors: {
        // orange
        'scriptbox-orange' : '#f58024',
        'scriptbox-orange-2' : '#dd6b20',
        'scriptbox-orange-3' : '#fef5eb',
        // gray
        'scriptbox-gray' : '#f9f9f9',
        'scriptbox-gray-1' : '#fafafa',
        'scriptbox-gray-2' : '#595959',
        'scriptbox-gray-3' : '#404040',
        'scriptbox-gray-4' : '#f2f2f2',
        'scriptbox-gray-5' : '#737373',
        'scriptbox-gray-6' : '#e6e6e6',
        'scriptbox-gray-7' : '#d9d9d9',
        'scriptbox-gray-8' : '#b3b3b3',
        'scriptbox-gray-9' : '#394455',




        
        // black
        'scriptbox-black' : '#343434',
        'scriptbox-black-1' : '#181818',
        'scriptbox-black-2' : '#1b2330',


        // green
        'scriptbox-green' : '#0fac85',
        'scriptbox-green-1' : '#008088',
        'scriptbox-green-2' : '#54894A',
        'scriptbox-green-3' : '#E2F4D7',



        
        // red
        'scriptbox-red' : '#f56565',
        'scriptbox-red-1' : '#B26868',
        'scriptbox-red-2' : '#FDECEC',



        //blue
        'scriptbox-blue' : '#1971e4',
        'scriptbox-blue-1' : '#ebf8ff',
        'scriptbox-blue-2' : '#cbe3f6',
        'scriptbox-blue-3' : '#8cc6f1',
        'scriptbox-blue-4' : '#4E89D8',
        'scriptbox-blue-5' : '#E2EEFE',
        'scriptbox-blue-6' : '#4e93ef',





        // yellow
        'scriptbox-yellow' : '#fbe5bb',

        // brown
        'scriptbox-brown' : '#f9f8f3',
        'scriptbox-brown-1' : '#FDEFD4',
        'scriptbox-brown-2' : '#B77A0A',


        

        // violet
        'scriptbox-violet' : '#553c9a',




        


        

      },
      spacing: {
        '30' : '30rem',
        '22-1' : '22.1rem',
        '27' : '27rem',
        '24-5' : '24.5rem',
        '031' : '0.31rem',
        '0375' : '0.375rem',
        '2p': '2.25rem',
        '0-1875': '0.1875rem',
        '14-875' : '14.875rem',
        '0-125': '0.125rem',
        '0-0625': '0.0625rem',


      },
      lineHeight: {
        '1-2' : '1.2',
        '1-15' : '1.15',
        '1-35' : '1.35',
        '1-125' : '1.125'
      },
      boxShadow: {
        '1' : '0px 1px 2px rgba(0, 0, 0, 0.1), 0px 0px 1.5px rgba(0, 0, 0, 0.5)',
        '2' : '0px 0.5px 2px rgba(0, 0, 0, 0.1), 0px 2px 3px rgba(0, 0, 0, 0.07)',
        '3' : '0px 0.5px 2px rgba(0, 0, 0, 0.1)',
        '4' : '0px 2px 7px rgba(0, 0, 0, 0.1), 0px 0px 2px rgba(0, 0, 0, 0.2)',
        '6' :'0px 1px 0px #e2e8f0'
      },
      fontSize: {
        'my1' : '1.75rem'
      },
      margin: {
        '-50vw' : '-50vw' 
      },
      gap: {
        "0-1": '0 1.5rem',
        "0-10": '0 10.5rem'

      },
      flex: {
        'my1' : '1'
      }
    },
  },

  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}
