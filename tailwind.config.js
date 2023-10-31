/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      backgroundImage:{
        'bg-img': "url('./src/assets/adobestock_293068579 1.png')"
      },
      content: {
        "logo": "url('./src/assets/Clip path group.svg')"
      },
      colors: {
        blue: "#2F80ED",
        ash: "#6D7072"
      },
      fontSize: {
        smm: ['14px', '17.07px'],
        small: ['16px', '19.5px'],
        mid: ['30px', '36.57px'],
        mids: ['28px', '34.13px'],
        smalls: ['24px', '29.26px'],
        header: ['36px', '43.88px'],
        xxl: ['120px', '146.28px']
      },
      
      
    },
  },
}

