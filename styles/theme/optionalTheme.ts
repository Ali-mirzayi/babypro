import { createTheme } from "@mui/material/styles";
import { blueGrey, teal, blue } from "@mui/material/colors";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      paper: blueGrey[50],
      default: teal[50],
    },
    primary: {
      main: teal[500],
    },
    common: {
      white: blueGrey[50],
    },
    grey: {
    },
  },
  typography: {
    fontFamily: "'Markazi Text', serif",
  },
});

const Theme = { lightTheme };

export default Theme;
