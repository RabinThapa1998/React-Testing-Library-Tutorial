import { Typography, AppBar, Toolbar, Grid, Paper, Box } from "@mui/material";
import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
function Footer() {
  return (
    <Paper sx={{ bgcolor: "common.black" }}>
      <Box py={10}>
        <Typography variant="h6" textAlign={"center"} color="white">
          All rights reserved. Copyright
          <CopyrightIcon fontSize={"small"} sx={{ mx: 0.5 }} />
          2022
        </Typography>
      </Box>
    </Paper>
  );
}

export default Footer;
