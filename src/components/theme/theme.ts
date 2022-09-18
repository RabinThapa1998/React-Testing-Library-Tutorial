import {
  teal,
  green,
  grey,
  purple,
  blue,
  deepOrange,
} from "@mui/material/colors";
import { PaletteMode } from "@mui/material";

export const getDesignTokens = (mode: PaletteMode) => ({
  typography: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
  },

  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: teal,
          divider: teal[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode

          primary: blue,
          divider: blue[700],
          background: {
            default: blue[900],
            paper: "#0B1829",
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});
// fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
