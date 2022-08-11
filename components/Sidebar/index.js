import Link from "next/link";
import React from "react";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const textStyles = {
    fontSize: "20px",
    textDecoration: "none",
    color: "#000",
  };
  return (
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light border-end">
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100 w-100 ">
        <Link href="/">
          <div className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none">
            <img
              src="/logo.png"
              alt="logo"
              style={{
                width: "100px",
              }}
              className="mr-3"
            />
            <span className="fs-5 text-black d-none d-sm-inline">Cuacane</span>
          </div>
        </Link>
        <ul
          className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start mt-4 w-100"
          id="menu"
        >
          <li className={`nav-item w-100`}>
            <a href="#" className="nav-link align-middle px-0">
              <div
                className={`${styles.navItem} d-flex flex-row align-items-center gap-4 p-3 w-100`}
              >
                <img
                  src="app.svg"
                  alt="logo"
                  style={{
                    width: "20px",
                  }}
                  className="mr-3"
                />
                <span className="ms-1 d-none d-sm-inline" style={textStyles}>
                  Dashboard
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
