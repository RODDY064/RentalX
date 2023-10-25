/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
       'main':'url(/assets/images/bg.svg)',
       'mobile':'url(/assets/images/mobile.svg)',
       'service':'url(/assets/images/service.png)',
       'animate_bg':'url(/assets/images/animate_bg_1.png)',
       'animate_bg_2':'url(/assets/images/animate_bg_2.png)'
      },
      colors:{
        'cream':'#f6f3f3ea',
        'glass':'#ffffff0d',
        'white_glass':'#fbf6f699',
         'plain':'#cccccc56',
        'line' :'#FF9A2B',
        'pay' :'#fcb34cef'
      },
     backdropBlur: {
        xs: '6px',
        xl: '7px',
      },
      fontFamily:{
        'ubuntu_m':'ubuntu-m',
        'ubuntu_l':'ubuntu-l',
        'ubuntu_r':'ubuntu-r'

      },
      textUnderlineOffset: {
        6: '6px',
      }
    },
  },
  plugins: [],
}
