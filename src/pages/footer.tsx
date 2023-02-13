import React from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-item">
          <p className="footer-text">Copyright © 2023 권영완</p>
        </div>
        <div
          className="footer-item"
          onClick={(e) => (location.href = "https://github.com/000wan")}
          style={{ cursor: "pointer" }}
        >
          <img className="footer-text" src="/github-mark-white.svg" width="20px" height="20px" />
          <p className="footer-text">000wan</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
