'use client'

import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material";
import BarChartTwoToneIcon from '@mui/icons-material/BarChartTwoTone';
import React from "react";
import { LightMode } from "@mui/icons-material";
import scss from "./Header.module.scss";

function Header({changeColor}: {changeColor: Function}){
  return (
  <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Typography
            className={scss.logo}
            variant="h6"
            noWrap
            component="div"
            sx={{display: { xs: 'none', sm: 'block'}, padding:"5px"}}
          >
            <Link href="/">Top Ranking Steam Games</Link>
          </Typography>
          <div style={{ display: "flex", flexGrow: 1, justifyContent: "end"}}>
              <IconButton
                onClick={() => changeColor()}>
                <LightMode sx={{color:"white"}}/>
              </IconButton>
              <div style={{ alignContent: "center", margin:"20px"}}>Search Field Placeholder</div>
              <Button >
                <BarChartTwoToneIcon/>
              </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;