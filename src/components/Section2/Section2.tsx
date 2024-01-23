import "./section2.css";
// mui
import { Typography, Button } from "@mui/material";
export default function Section2() {
  return (
    <>
      <article
        id="s2"
        className="bg-DarkViolet text-white flex justify-between h-[14rem] px-[5rem] items-center bg-[url('/bg-pattern-intro-right-desktop.svg')] bg-no-repeat "
      >
        <h1 className="heading text-[3rem] max-w-[30rem]">
          Find our more about how we work
        </h1>
        <Button
          sx={{
            color: "white",
            border: "2px solid white",
            px: "2rem",

            fontFamily: "karla",
          }}
        >
          HOW WE WORK
        </Button>
      </article>
    </>
  );
}
