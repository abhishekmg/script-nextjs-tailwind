module.exports = {
  
  theme: {
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
      '1': '1.25rem',
      '45p': '45%',
      '39p' : '39%',
      '075' : '0.75rem',
      '50p' : '50%'
    },
    minWidth: {
      '32' : '32rem',
      '36' : '36rem',
      '24.5' : '24.5rem',
      '12' : '12rem',
      '0.0625' : '0.0625rem'


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
      '33-5' : '33.5rem'




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
        '14-875' : '14.875rem'
      },
      lineHeight: {
        '1-2' : '1.2',
        '1-15' : '1.15',
        '1-35' : '1.35',
        '1-125' : '1.125'
      },
      boxShadow: {
        '1' : '0px 1px 2px rgba(0, 0, 0, 0.1), 0px 0px 1.5px rgba(0, 0, 0, 0.5)',
        '2' : '0px 0.5px 2px rgba(0, 0, 0, 0.1), 0px 2px 3px rgba(0, 0, 0, 0.07)'
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

      }
    },
  },

  variants: {},
  plugins: [],
}
