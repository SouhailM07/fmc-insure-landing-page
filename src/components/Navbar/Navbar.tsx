import React, { useState } from "react";
import "./navbar.css";
import { AppBar, Toolbar, Stack, Button } from "@mui/material";
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
          <Toolbar className="justify-between max-w-[90rem] mx-auto text-GrayishBlue font-bold">
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
              <Button
                sx={{
                  border: "2px solid",
                  px: "2rem",
                  py: "0.5rem",
                  fontFamily: "karma",
                  fontWeight: "700",
                }}
                className=" !border-VeryDarkViolet !text-VeryDarkViolet  "
              >
                VIEW PLANS
              </Button>
            </div>
          </Toolbar>
          {/* <Navbar_mobile /> */}
        </AppBar>
      </PanelContext.Provider>
    </>
  );
}
