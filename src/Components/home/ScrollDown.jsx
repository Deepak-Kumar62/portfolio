import React from "react";

function ScrollDown() {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-btn button__flex">
        <svg
          width="32px"
          height="32px"
          className="home__scroll-mouse"
          viewBox="0 0 247 390"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            clipRule: "evenodd",
            fillRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "1.5",
          }}
        >
          <path
            className="wheel"
            d="M123.359,79.775l0,72.843"
            style={{
                fill: "none",
                strokeWidth: "20px",
                stroke: "var(--title-color)",
            }}
          ></path>
          <path
            id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
            style={{
                fill: "none",
                stroke: "var(--title-color)",
                strokeWidth: "20px",
            }}
          ></path>
        </svg>
        <span className="home__scroll-name">
            Scroll Down <i className="uil uil-arrow-down home__scroll-arrow"></i>
        </span>
      </a>
    </div>
  );
}

export default ScrollDown;
