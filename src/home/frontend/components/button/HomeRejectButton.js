import React from "react";
import "../home.css";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
export default function HomeRejectButton() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
{matches ? (
                    <Button
                      variant="outlined"
                      startIcon={<DoDisturbIcon />}
                      color="inherit"
                    >
                      Reject
                    </Button>
                  ) : (
                    <IconButton aria-label="Files" color="inherit">
                      <DoDisturbIcon />
                    </IconButton>
                  )}
    </>
  );
}
