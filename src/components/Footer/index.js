import React from "react";
import "./Footer.css";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_inner">
        <div className="footer_info">
          <h4>
            Created by <span> Ed Developer </span> with <span> &#x2764; </span>
          </h4>
        </div>
        <div className="footer_nav">
          <Link to="/help">
            Need help
            <HelpOutlineIcon />
          </Link>
          <Link to="/about-us">
            About us
            <InfoIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
