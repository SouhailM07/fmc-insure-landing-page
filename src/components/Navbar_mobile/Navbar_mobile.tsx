import "./navbar_mobile.css";
import { Drawer } from "@mui/material";
import { useContext } from "react";
import { PanelContext } from "../Navbar/Navbar";
export default function Navbar_mobile() {
  let arrOfLinks: string[] = [];
  let { openPanel, setOpenPanel }: any = useContext(PanelContext);
  return (
    <>
      <Drawer
        anchor="right"
        open={openPanel}
        onClose={() => setOpenPanel(false)}
      >
        <div className="w-[60vw] md:w-[23rem] h-full font-bold text-center text-[1.3rem]">
          <ul className="flex flex-col h-[60%] justify-evenly">
            {arrOfLinks.map((e, i) => {
              return (
                <li key={i} onClick={() => setOpenPanel(false)}>
                  <a href={"#" + e}>{e}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </Drawer>
    </>
  );
}
