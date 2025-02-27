'use client'

import { AppBar, Box, IconButton, Link, Toolbar, Typography } from "@mui/material";
import BarChartTwoToneIcon from '@mui/icons-material/BarChartTwoTone';
import React from "react";
import { LightMode } from "@mui/icons-material";

function Header({changeColor}: {changeColor: Function}){
  return (
  <Box>
      <AppBar position="static" sx={{ flexGrow: 1, color: 'common.white'}}>
        <Toolbar>
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{display: { xs: 'none', sm: 'block', "&:hover":{backgroundColor: "#7e7e7e"}}}}
          >
            <Link href="/" sx={{color:"inherit", padding:"10px", textDecoration:"none"}}>Top Ranking Steam Games</Link>
          </Typography>
          <div style={{ display: "flex", flexGrow: 1, justifyContent: "end"}}>
              <Typography component="div" style={{ alignContent: "center", margin:"20px"}}>
                Search Field Placeholder
              </Typography>
              <IconButton href="/currentranking" sx={{color:"inherit", marginY: "auto", padding:"1rem"}} >
                <BarChartTwoToneIcon />
              </IconButton>
              <IconButton
                sx={{padding:"1rem", marginY: "auto"}}
                onClick={() => changeColor()}>
                <LightMode />
              </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;