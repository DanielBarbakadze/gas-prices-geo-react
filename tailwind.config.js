const shadows = {
  100: "1px 1px 2px 0px hsla(192, 20%, 10%, 0.12)",
  200: "2px 2px 4px 0px hsla(192, 20%, 10%, 0.12)",
  300: "2px 4px 8px 0px hsla(192, 20%, 10%, 0.12)",
  400: "2px 4px 12px 0px hsla(192, 20%, 10%, 0.16)",
  500: "2px 6px 12px 0px hsla(192, 20%, 10%, 0.5)",
  600: "0px 10px 50px rgba(0, 0, 0, 0.1)",
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    colors: {
      primary: "#f4a623",
      transparent: "transparent",
      current: "currentColor",
      white: {
        0: "#ffffff",
      },
      gray: {
        0: "#f9f9f9",
        1: "#ecedf0",
        2: "#ededed",
        3: "#cfd3da",
        4: "#adb3bf",
        5: "#818897",
        6: "#666c77",
        7: "#3b3e44",
        8: "#262a2d",
        9: "#141d1f",
        10: "#0d1213",
        11: "rgba(129, 136, 151, 0.2)",
      },
      green: {
        0: "#3ea372",
        1: "#2f3a39",
        2: "#1e595e",
      },
      yellow: {
        0: "#f4a623",
      },
      teal: {
        0: "hsl(157, 91%, 95%)",
        1: "hsl(158, 92%, 85%)",
        5: "hsl(158, 57%, 51%)",
        6: "hsl(157, 53%, 46%)",
        7: "hsl(159, 54%, 39%)",
        10: "hsl(188, 54%, 11%)",
      },
      red: {
        5: "hsl(9, 93%, 63%)",
        7: "hsl(8, 78%, 59%)",
      },
      cyan: {
        6: "#39aec0",
      },
      pink: {
        3: "#fdc3d8",
        6: "#fa72a3",
      },
      orange: {
        0: "#fef9ef",
        1: "#fdebcd",
        4: "#f8b94b",
        5: "#e3a944",
      },
      indigo: {
        1: "#eeebfe",
        3: "#d4cefd",
        7: "#8676fa",
        8: "#654ef8",
        10: "#231b5a",
      },
      blue: {
        0: "hsl(218, 100%, 98%)",
        1: "hsl(218, 93%, 95%)",
        2: "hsl(218, 92%, 91%)",
        3: "hsl(218, 91%, 86%)",
        5: "hsl(219, 93%, 63%)",
        10: "hsl(231, 53%, 19%)",
      },
    },
    inset: {
      full: "100%",
      px: "1px",
      "-px": "-1px",
      0: "0",
      0.5: "0.125rem",
      "1/2": "50%",
    },
    spacing: {
      px: "1px",
      0: "0px",
      2: "2px",
      4: "4px",
      8: "8px",
      12: "12px",
      16: "16px",
      24: "24px",
      32: "32px",
      40: "40px",
      48: "48px",
      56: "56px",
      64: "64px",
      72: "72px",
      96: "96px",
      120: "120px",
      144: "144px",
    },
    fontSize: {
      8: "8px",
      12: "12px",
      14: "14px",
      16: "16px",
      18: "18px",
      24: "24px",
      28: "28px",
      36: "36px",
    },
    fontWeight: {
      400: "400",
      600: "600",
      700: "700",
      800: "800",
    },
    borderRadius: {
      1: "1px",
      4: "4px",
      8: "8px",
      12: "12px",
      16: "16px",
      20: "20px",
      pill: "9999px",
    },
    borderWidth: {
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
    },
    boxShadow: shadows,
    dropShadow: shadows,
    width: {
      1: "1px",
      4: "4px",
      8: "8px",
      20: "20%",
      25: "25%",
      33: "33.3333%",
      50: "50%",
      full: "100%",
      auto: "auto",
    },
    maxWidth: {
      530: "530px",
      900: "900px",
      1100: "1100px",
      full: "100%",
      auto: "auto",
    },
    lineHeight: {
      140: "1.4",
      155: "1.55",
      160: "1.6",
    },
  },
  plugins: [],
};
