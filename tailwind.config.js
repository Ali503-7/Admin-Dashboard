/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },

      container: {
        center: true,
      },

      transitionProperty: {
        Maxheight: "max-height, padding, width",
        height: "height, padding, width",
      },

      colors: {
        Light: {
          Main: {
            Primary: "#9155FD",
            Secondary: "#8A8D93",
            Info: "#16B1FF",
            Success: "#56CA00",
            Warning: "#FFB400",
            Error: "#FF4C51",
          },
          Light: {
            Primary: "#9E69FD",
            Secondary: "#9C9FA4",
            Info: "#32BAFF",
            Success: "#6AD01F",
            Warning: "#FFB547",
            Error: "#FF6166",
          },
          Dark: {
            Primary: "#6E41C0",
            Secondary: "#4D5056",
            Info: "#0E71A3",
            Success: "#378100",
            Warning: "#A37300",
            Error: "#A33134",
          },
          Contrast: "#FFFFFF",
          Contained_Hover_Background: {
            Primary: "#804BDF",
            Secondary: "#777B82",
            Info: "#139CE0",
            Success: "#4CB200",
            Warning: "#E09E00",
            Error: "#E04347",
          },
          Outlined_Hover_Background: {
            Primary: "#9155FD14",
            Secondary: "#8A8D9314",
            Info: "#32BAFF14",
            Success: "#56CA0014",
            Warning: "#FFB40014",
            Error: "#FF4C5114",
          },
          MaiOutlined_resting_Backgroundn: {
            Primary: "#9155FD80",
            Secondary: "#8A8D9380",
            Info: "#32BAFF80",
            Success: "#56CA0080",
            Warning: "#FFB40080",
            Error: "#FF4C5180",
          },
          Text: {
            Primary: "#3A3541DE",
            Secondary: "#3A354199",
            Disabled: "#3A354161",
          },
          Action: {
            Active: "#3A35418A",
            Hover: "#3A35410A",
            Selected: "#3A354114",
            Disabled: "#3A354142",
            Disabled_BG: "#3A35411F",
            Focus: "#3A35411F",
          },
          Other: {
            Divider: "#3A35411F",
            Ouline_Border: "#3A35413B",
            Input_Line: "#3A354138",
            Overlay: "#3A354180",
            Snackbar_BG: "#212121",
            Body_Background: "#F4F5FA",
            Paper_Card: "#FFFFFF",
          },
        },
        Dark: {
          Main: {
            Primary: "#9155FD",
            Secondary: "#8A8D93",
            Info: "#16B1FF",
            Success: "#56CA00",
            Warning: "#FFB400",
            Error: "#FF4C51",
          },
          Light: {
            Primary: "#9E69FD",
            Secondary: "#9C9FA4",
            Info: "#32BAFF",
            Success: "#6AD01F",
            Warning: "#FFB547",
            Error: "#FF6166",
          },
          Dark: {
            Primary: "#6E41C0",
            Secondary: "#4D5056",
            Info: "#0E71A3",
            Success: "#378100",
            Warning: "#A37300",
            Error: "#A33134",
          },
          Contrast: "#FFFFFF",
          Contained_Hover_Background: {
            Primary: "#804BDF",
            Secondary: "#777B82",
            Info: "#139CE0",
            Success: "#4CB200",
            Warning: "#E09E00",
            Error: "#E04347",
          },
          Outlined_Hover_Background: {
            Primary: "#9155FD14",
            Secondary: "#8A8D9314",
            Info: "#32BAFF14",
            Success: "#56CA0014",
            Warning: "#FFB40014",
            Error: "#FF4C5114",
          },
          MaiOutlined_resting_Backgroundn: {
            Primary: "#9155FD80",
            Secondary: "#8A8D9380",
            Info: "#32BAFF80",
            Success: "#56CA0080",
            Warning: "#FFB40080",
            Error: "#FF4C5180",
          },
          Text: {
            Primary: "#E7E3FCDE",
          },
          Action: {
            Active: "#E7E3FC8A",
            Hover: "#E7E3FC0A",
            Selected: "#E7E3FC14",
            Disabled: "#E7E3FC42",
            Disabled_BG: "#E7E3FC1F",
            Focus: "#E7E3FC1F",
          },
          Other: {
            Divider: "#E7E3FC1F",
            Ouline_Border: "#E7E3FC3B",
            Input_Line: "#E7E3FC38",
            Overlay: "#2C2942DE",
            Snackbar_BG: "#FFFFFF",
            Body_Background: "#28243D",
            Paper_Card: "#312D4B",
          },
          Custom: {
            Primary:
              "linear-gradient(0deg, rgba(49, 45, 75, 0.88), rgba(49, 45, 75, 0.88)), #9155FD;",
            Secondary:
              "linear-gradient(0deg, rgba(49, 45, 75, 0.88), rgba(49, 45, 75, 0.88)), #8A8D93;",
            Info: "linear-gradient(0deg, rgba(49, 45, 75, 0.88), rgba(49, 45, 75, 0.88)), #2196F3;",
            Success:
              "linear-gradient(0deg, rgba(49, 45, 75, 0.88), rgba(49, 45, 75, 0.88)), #4CAF50;",
            Warning:
              "linear-gradient(0deg, rgba(49, 45, 75, 0.88), rgba(49, 45, 75, 0.88)), #FFB400;",
            Error:
              "linear-gradient(0deg, rgba(49, 45, 75, 0.88), rgba(49, 45, 75, 0.88)), #F44336;",
            Menu_Active: "linear-gradient(270deg, #9155FD 0%, #C6A7FE 100%);",
          },
        },
      },

      boxShadow: {
        Light_1:
          "0px 2px 1px -1px rgba(58, 53, 65, 0.2), 0px 1px 1px rgba(58, 53, 65, 0.14), 0px 1px 3px rgba(58, 53, 65, 0.12)",
        Light_2:
          "0px 3px 1px -2px rgba(58, 53, 65, 0.2), 0px 2px 2px rgba(58, 53, 65, 0.14), 0px 1px 5px rgba(58, 53, 65, 0.12)",
        Light_3:
          "0px 4px 6px -4px rgba(58, 53, 65, 0.1), 0px 6px 10px -4px rgba(58, 53, 65, 0.08), 0px 4px 8px -4px rgba(58, 53, 65, 0.16)",
        Light_4:
          "0px 6px 14px -8px rgba(58, 53, 65, 0.1), 0px 6px 16px -4px rgba(58, 53, 65, 0.08), 0px 6px 16px -4px rgba(58, 53, 65, 0.2)",
        Light_5:
          "0px 3px 5px -1px rgba(58, 53, 65, 0.2), 0px 5px 8px rgba(58, 53, 65, 0.14), 0px 1px 14px rgba(58, 53, 65, 0.12)",
        Light_6:
          "0px 6px 16px -4px rgba(58, 53, 65, 0.10), 0px 2px 12px -4px rgba(58, 53, 65, 0.08), 0px 2px 12px -4px rgba(58, 53, 65, 0.10)",
        Light_7:
          "0px 4px 5px -2px rgba(58, 53, 65, 0.2), 0px 7px 10px 1px rgba(58, 53, 65, 0.14), 0px 2px 16px 1px rgba(58, 53, 65, 0.12);",
        Light_8:
          "0px 5px 5px -3px rgba(58, 53, 65, 0.2), 0px 8px 10px 1px rgba(58, 53, 65, 0.14), 0px 3px 14px 2px rgba(58, 53, 65, 0.12)",
        Light_9:
          "0px 5px 6px -3px rgba(58, 53, 65, 0.2), 0px 9px 12px 1px rgba(58, 53, 65, 0.14), 0px 3px 16px 2px rgba(58, 53, 65, 0.12)",
        Light_10:
          "0px 6px 6px -3px rgba(58, 53, 65, 0.2), 0px 10px 14px 1px rgba(58, 53, 65, 0.14), 0px 4px 18px 3px rgba(58, 53, 65, 0.12)",
        Light_11:
          "0px 6px 7px -4px rgba(58, 53, 65, 0.2), 0px 11px 15px 1px rgba(58, 53, 65, 0.14), 0px 4px 20px 3px rgba(58, 53, 65, 0.12)",
        Light_12:
          " 0px 7px 8px -4px rgba(58, 53, 65, 0.2), 0px 12px 17px 2px rgba(58, 53, 65, 0.14), 0px 5px 22px 4px rgba(58, 53, 65, 0.12)",
        Light_13:
          "0px 7px 8px -4px rgba(58, 53, 65, 0.2), 0px 13px 19px 2px rgba(58, 53, 65, 0.14), 0px 5px 24px 4px rgba(58, 53, 65, 0.12)",
        Light_14:
          "0px 7px 9px -4px rgba(58, 53, 65, 0.2), 0px 14px 21px 2px rgba(58, 53, 65, 0.14), 0px 5px 26px 4px rgba(58, 53, 65, 0.12)",
        Light_15:
          " 0px 8px 9px -5px rgba(58, 53, 65, 0.2), 0px 15px 22px 2px rgba(58, 53, 65, 0.14), 0px 6px 28px 5px rgba(58, 53, 65, 0.12)",
        Light_16:
          "0px 8px 10px -5px rgba(58, 53, 65, 0.2), 0px 16px 24px 2px rgba(58, 53, 65, 0.14), 0px 6px 30px 5px rgba(58, 53, 65, 0.12)",
        Light_17:
          "0px 8px 11px -5px rgba(58, 53, 65, 0.2), 0px 17px 26px 2px rgba(58, 53, 65, 0.14), 0px 6px 32px 5px rgba(58, 53, 65, 0.12)",
        Light_18:
          "0px 9px 11px -5px rgba(58, 53, 65, 0.2), 0px 18px 28px 2px rgba(58, 53, 65, 0.14), 0px 7px 34px 6px rgba(58, 53, 65, 0.12)",
        Light_19:
          "0px 9px 12px -6px rgba(58, 53, 65, 0.2), 0px 19px 29px 2px rgba(58, 53, 65, 0.14), 0px 7px 36px 6px rgba(58, 53, 65, 0.12)",
        Light_20:
          "0px 10px 13px -6px rgba(58, 53, 65, 0.2), 0px 20px 31px 3px rgba(58, 53, 65, 0.14), 0px 8px 38px 7px rgba(58, 53, 65, 0.12)",
        Light_21:
          "0px 10px 13px -6px rgba(58, 53, 65, 0.2), 0px 21px 33px 3px rgba(58, 53, 65, 0.14), 0px 8px 40px 7px rgba(58, 53, 65, 0.12)",
        Light_22:
          "0px 10px 14px -6px rgba(58, 53, 65, 0.2), 0px 22px 35px 3px rgba(58, 53, 65, 0.14), 0px 8px 42px 7px rgba(58, 53, 65, 0.12)",
        Light_23:
          "0px 11px 14px -7px rgba(58, 53, 65, 0.2), 0px 23px 36px 3px rgba(58, 53, 65, 0.14), 0px 9px 44px 8px rgba(58, 53, 65, 0.12)",
        Light_24:
          "0px 11px 15px -7px rgba(58, 53, 65, 0.2), 0px 24px 38px 3px rgba(58, 53, 65, 0.14), 0px 9px 46px 8px rgba(58, 53, 65, 0.12)",
        Dark_1:
          "0px 2px 1px -1px rgba(19, 17, 32, 0.2), 0px 1px 1px rgba(19, 17, 32, 0.14), 0px 1px 3px rgba(19, 17, 32, 0.12)",
        Dark_2:
          "0px 3px 1px -2px rgba(19, 17, 32, 0.2), 0px 2px 2px rgba(19, 17, 32, 0.14), 0px 1px 5px rgba(19, 17, 32, 0.12)",
        Dark_3:
          "0px 4px 4px -4px rgba(19, 17, 32, 0.1), 0px 6px 10px -4px rgba(19, 17, 32, 0.08), 0px 4px 8px -4px rgba(19, 17, 32, 0.16)",
        Dark_4:
          "0px 6px 14px -8px rgba(19, 17, 32, 0.1), 0px 6px 16px -4px rgba(19, 17, 32, 0.08), 0px 6px 16px -4px rgba(19, 17, 32, 0.2);",
        Dark_5:
          "0px 3px 5px -1px rgba(19, 17, 32, 0.2), 0px 5px 8px rgba(19, 17, 32, 0.14), 0px 1px 14px rgba(19, 17, 32, 0.12)",
        Dark_6:
          "0px 6px 16px -4px rgba(19, 17, 32, 0.10), 0px 2px 12px -4px rgba(19, 17, 32, 0.08), 0px 2px 12px -4px rgba(19, 17, 32, 0.10)",
        Dark_7:
          "0px 4px 5px -2px rgba(19, 17, 32, 0.2), 0px 7px 10px 1px rgba(19, 17, 32, 0.14), 0px 2px 16px 1px rgba(19, 17, 32, 0.12)",
        Dark_8:
          "0px 5px 5px -3px rgba(19, 17, 32, 0.2), 0px 8px 10px 1px rgba(19, 17, 32, 0.14), 0px 3px 14px 2px rgba(19, 17, 32, 0.12)",
        Dark_9:
          "0px 5px 6px -3px rgba(19, 17, 32, 0.2), 0px 9px 12px 1px rgba(19, 17, 32, 0.14), 0px 3px 16px 2px rgba(19, 17, 32, 0.12)",
        Dark_10:
          "0px 6px 6px -3px rgba(19, 17, 32, 0.2), 0px 10px 14px 1px rgba(19, 17, 32, 0.14), 0px 4px 18px 3px rgba(19, 17, 32, 0.12)",
        Dark_11:
          "0px 6px 7px -4px rgba(19, 17, 32, 0.2), 0px 11px 15px 1px rgba(19, 17, 32, 0.14), 0px 4px 20px 3px rgba(19, 17, 32, 0.12)",
        Dark_12:
          "0px 7px 8px -4px rgba(19, 17, 32, 0.2), 0px 12px 17px 2px rgba(19, 17, 32, 0.14), 0px 5px 22px 4px rgba(19, 17, 32, 0.12)",
        Dark_13:
          "0px 7px 8px -4px rgba(19, 17, 32, 0.2), 0px 13px 19px 2px rgba(19, 17, 32, 0.14), 0px 5px 24px 4px rgba(19, 17, 32, 0.12)",
        Dark_14:
          "0px 7px 9px -4px rgba(19, 17, 32, 0.2), 0px 14px 21px 2px rgba(19, 17, 32, 0.14), 0px 5px 26px 4px rgba(19, 17, 32, 0.12)",
        Dark_15:
          "0px 8px 9px -5px rgba(19, 17, 32, 0.2), 0px 15px 22px 2px rgba(19, 17, 32, 0.14), 0px 6px 28px 5px rgba(19, 17, 32, 0.12)",
        Dark_16:
          "0px 8px 10px -5px rgba(19, 17, 32, 0.2), 0px 16px 24px 2px rgba(19, 17, 32, 0.14), 0px 6px 30px 5px rgba(19, 17, 32, 0.12)",
        Dark_17:
          "0px 8px 11px -5px rgba(19, 17, 32, 0.2), 0px 17px 26px 2px rgba(19, 17, 32, 0.14), 0px 6px 32px 5px rgba(19, 17, 32, 0.12)",
        Dark_18:
          "0px 9px 11px -5px rgba(19, 17, 32, 0.2), 0px 18px 28px 2px rgba(19, 17, 32, 0.14), 0px 7px 34px 6px rgba(19, 17, 32, 0.12)",
        Dark_19:
          "0px 9px 12px -6px rgba(19, 17, 32, 0.2), 0px 19px 29px 2px rgba(19, 17, 32, 0.14), 0px 7px 36px 6px rgba(19, 17, 32, 0.12)",
        Dark_20:
          "0px 10px 13px -6px rgba(19, 17, 32, 0.2), 0px 20px 31px 3px rgba(19, 17, 32, 0.14), 0px 8px 38px 7px rgba(19, 17, 32, 0.12)",
        Dark_21:
          "0px 10px 13px -6px rgba(19, 17, 32, 0.2), 0px 21px 33px 3px rgba(19, 17, 32, 0.14), 0px 8px 40px 7px rgba(19, 17, 32, 0.12)",
        Dark_22:
          "0px 10px 14px -6px rgba(19, 17, 32, 0.2), 0px 22px 35px 3px rgba(19, 17, 32, 0.14), 0px 8px 42px 7px rgba(19, 17, 32, 0.12)",
        Dark_23:
          "0px 11px 14px -7px rgba(19, 17, 32, 0.2), 0px 23px 36px 3px rgba(19, 17, 32, 0.14), 0px 9px 44px 8px rgba(19, 17, 32, 0.12)",
        Dark_24:
          "0px 11px 15px -7px rgba(19, 17, 32, 0.2), 0px 24px 38px 3px rgba(19, 17, 32, 0.14), 0px 9px 46px 8px rgba(19, 17, 32, 0.12)",
      },
    },
  },
  plugins: [],
};
