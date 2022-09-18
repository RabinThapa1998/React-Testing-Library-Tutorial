import React, { useContext } from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  useTheme,
  IconButton,
  Stack,
} from "@mui/material";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ColorModeContext } from "../../App";
import { Link } from "react-router-dom";

function Header() {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6">RTL</Typography>
        <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
          {theme.palette.mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
        <Stack
          direction={"row"}
          width="100%"
          justifyContent={"flex-end"}
          gap={5}
        >
          <Link to="/">
            <Typography variant="h6" color="text.primary">
              Home
            </Typography>
          </Link>
          <Link to="about">
            <Typography variant="h6" color="text.primary">
              About
            </Typography>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
