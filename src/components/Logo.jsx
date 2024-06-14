import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const Logo = () => {
  return (
    <Box>
      <Link to="/">
        <Box component="img" style={{height:"200px",width:"250px", borderRadius:"5px"}} src="https://res.cloudinary.com/de4euasql/image/upload/v1713066064/ebank-login-img_lnoldg.png" alt="logo" />
      </Link>
    </Box>
  );
};

export default Logo;
