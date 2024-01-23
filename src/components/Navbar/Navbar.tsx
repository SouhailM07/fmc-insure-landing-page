import React, { useState } from "react";
import "./navbar.css";
import { AppBar, Toolbar } from "@mui/material";
import { Navbar_mobile } from "../../components";
export const PanelContext = React.createContext();
export default function Navbar() {
  let arrOfLinks: string[] = [];
  let [openPanel, setOpenPanel] = useState<boolean>(false);
  return (
    <>
      <PanelContext.Provider value={{ openPanel, setOpenPanel }}>
        <AppBar position="sticky">
          <Toolbar>sb</Toolbar>
          <Navbar_mobile />
        </AppBar>
      </PanelContext.Provider>
    </>
  );
}
