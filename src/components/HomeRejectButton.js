import React from "react";
import "./home.css";
import Button from "@mui/material/Button";
export default function HomeNextButton() {
  return (
    <>
      <Button
        variant="h1"
        className="blue_btn"
        // css of this is not working in home.css Need to check
        style={{
          border: "1px solid white",
          margin: "0px 7px",
          padding: "0px 25px",
        }}
      >
        <img
          className="top-bar-btn"
          src="https://img.icons8.com/ios-filled/2x/ffffff/delete-user-male.png"
          alt=""
        ></img>
        Reject
      </Button>
    </>
  );
}
