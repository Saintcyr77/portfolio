import React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { LibraryAdd } from "@mui/icons-material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
const Meat = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xl={6} md={6} lg={6} sm={12}>
        <Box className="w-full p-14 flex flex-col ">
          <h1 className="text-white">Sarthak Bhatt</h1>

          <h3 className="text-white">Unemployed engineer currently</h3>

          <p style={{ color: "#7B899D" }}>
            I build pixel-perfect, engaging, and accessible digital experiences.
          </p>
        </Box>

        <Box className="flex flex-col sm:content-between content-start">
          <Box className="my-10 w-full p-14 flex flex-col  hidden sm:block">
            <div className="flex content-center mb-5">
              <hr className="text-white my-2 mr-3" style={{ width: "60px" }} />
              <span className="text-white cursor-pointer">About</span>
            </div>
            <div className="flex content-center mb-5">
              <hr className="text-white my-2 mr-3" style={{ width: "60px" }} />
              <span className="text-white cursor-pointer">Experiance</span>
            </div>
            <div className="flex content-center">
              <hr className="text-white my-2 mr-3" style={{ width: "60px" }} />
              <span className="text-white cursor-pointer">Project</span>
            </div>
          </Box>
          <Box className="my-10 w-full sm:p-14 px-14  flex gap-6 ">
            <GitHubIcon className="text-white cursor-pointer" />
            <LinkedInIcon className="text-white cursor-pointer" />
            <MenuBookIcon className="text-white cursor-pointer" />
            <InstagramIcon className="text-white cursor-pointer" />
          </Box>
        </Box>
      </Grid>
      <Grid item xl={6} md={6} lg={6} sm={12}></Grid>
    </Grid>
  );
};

export default Meat;
