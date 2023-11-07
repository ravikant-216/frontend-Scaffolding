/* eslint-disable no-unused-vars */
import React from "react";
import { createTheme } from "@mui/material/styles";
import { PALETTE } from "./themeConstants";
import CheckBoxUncheckedIcon from "@/../public/assets/Icons/CheckBoxIconUnChecked.svg";
import CheckBoxCheckedIcon from "@/../public/assets/Icons/CheckBoxIconChecked.svg";
import Icon from "@/components/atoms/Icon";
import { buttonClasses } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypeText {
    highEmphasis?: string;
    mediumEmphasis?: string;
    lowEmphasis?: string;
    white?: string;
  }

  interface Palette {
    structuralColors: {
      blue: string;
      white: string;
    };
  }

  interface PaletteOptions {
    structuralColors: {
      blue: string;
      white: string;
    };
  }

  interface TypographyVariants {
    body3: React.CSSProperties;
    link: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    b1: React.CSSProperties;
    b2: React.CSSProperties;
    b3: React.CSSProperties;
    b4: React.CSSProperties;
    b5: React.CSSProperties;
    c1: React.CSSProperties;
    c2: React.CSSProperties;
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    b1: true;
    b2: true;
    b3: true;
    b4: true;
    b5: true;
    c1: true;
    c2: true;
  }
}

const theme = createTheme({
  components: {
    MuiCheckbox: {
      defaultProps: {
        icon: <Icon src={CheckBoxUncheckedIcon} alt="Uncked Icon" />,
        checkedIcon: <Icon src={CheckBoxCheckedIcon} alt="Checked Icon" />,
        indeterminateIcon: (
          <Icon src={CheckBoxCheckedIcon} alt="Checked Icon" />
        ),
      },
      styleOverrides: {
        root: {
          borderRadius: "4px",
          "&.MuiSvgIcon-root": {
            borderRadius: "10000px",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          [`&.${buttonClasses.sizeSmall}`]: {
            padding: "4px 8px",
            height: "28px",
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: PALETTE.PRIMARY_500,
      "100": PALETTE.PRIMARY_100,
      "200": PALETTE.PRIMARY_200,
      "300": PALETTE.PRIMARY_300,
      "500": PALETTE.PRIMARY_500,
      "700": PALETTE.PRIMARY_700,
    },
    text: {
      white: PALETTE.TEXT_WHITE,
      highEmphasis: PALETTE.TEXT_HIGH_EMPHASIS,
      mediumEmphasis: PALETTE.TEXT_MEDIUM_EMPHASIS,
      lowEmphasis: PALETTE.TEXT_LOW_EMPHASIS,
      primary: PALETTE.TEXT_MEDIUM_EMPHASIS,
    },
    structuralColors: {
      white: PALETTE.STRUCTURAL_WHITE,
      blue: PALETTE.STRUCTURAL_WHITE,
    },
  },

  typography: {
    fontFamily: ["Helvetica"].join(","),
    h1: {
      fontFamily: "Helvetica",
      fontSize: "28px",
      fontWeight: "bold",
      fontStyle: "normal",
      lineHeight: "32px",
    },
    h2: {
      fontFamily: "Helvetica",
      fontSize: "24px",
      fontWeight: "400",
      fontStyle: "normal",
      lineHeight: "28px",
    },
    h3: {
      fontFamily: "Helvetica",
      fontSize: "22px",
      fontWeight: "400",
      fontStyle: "normal",
      lineHeight: "28px",
    },
    h4: {
      fontFamily: "Helvetica",
      fontSize: "22px",
      fontWeight: "500",
      lineHeight: "28px",
    },
    h5: {
      fontFamily: "Helvetica",
      fontSize: "22px",
      fontWeight: "bold",
      lineHeight: "28px",
    },
    b1: {
      fontFamily: "Helvetica",
      fontSize: "20px",
      fontWeight: "bold",
      lineHeight: "28px",
    },
    b2: {
      fontFamily: "Helvetica",
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "24px",
    },
    b3: {
      fontFamily: "Helvetica",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "20px",
    },
    b4: {
      fontFamily: "Helvetica",
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "20px",
    },
    b5: {
      fontFamily: "Helvetica",
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "20px",
    },
    c1: {
      fontFamily: "Helvetica",
      fontSize: "12px",
      fontWeight: "500",
      lineHeight: "16px",
    },
    c2: {
      fontFamily: "Helvetica",
      fontSize: "12px",
      fontWeight: "500",
      lineHeight: "16px",
    },
  },
  spacing: 4,
});

export default theme;
