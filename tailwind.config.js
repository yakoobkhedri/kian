/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
       
      },
      colors: {
        "secondary":'#001837',
      },
      zIndex: {
        1: "1",
        2: "2",
      },
      lineHeight:{
       
      },
      fontFamily: {
        rokh: "rokh",
        stretch: "stretch",
        yekanBakhRegular: "yekanBakh-Regular",
      },
      boxShadow: {
      
      },
      maxWidth:{
        'content':'1520px',
      },
    }
},
  plugins: [],
}

