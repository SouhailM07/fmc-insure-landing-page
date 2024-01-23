import React, { useState } from "react";
import "./navbar.css";
import { AppBar, Toolbar, Stack } from "@mui/material";
import { Navbar_mobile } from "../../components";
export const PanelContext: any = React.createContext("");
// assets
import nav_logo from "/logo.svg";

export default function Navbar() {
  let arrOfLinks: string[] = ["HOW WE WORK", "BLOG", "ACCOUNT"];
  let [openPanel, setOpenPanel] = useState<boolean>(false);
  return (
    <>
      <PanelContext.Provider value={{ openPanel, setOpenPanel }}>
        <AppBar position="sticky" className="!block !bg-white !shadow-none">
          <Toolbar className="justify-between max-w-[90rem] mx-auto text-GrayishBlue font-medium">
            <img src={nav_logo} alt="logo" />
            <div className="flex space-x-[2rem] items-center">
              <Stack direction="row" spacing="2rem" component="ul">
                {arrOfLinks.map((e, i) => {
                  return (
                    <li key={i} className="cursor-pointer">
                      {e}
                    </li>
                  );
                })}
              </Stack>
              <button className="border-2 border-VeryDarkViolet text-VeryDarkViolet uppercase px-[2rem] py-[0.7rem]">
                VIEW PLANS
              </button>
            </div>
          </Toolbar>
          {/* <Navbar_mobile /> */}
        </AppBar>
      </PanelContext.Provider>
    </>
  );
}
