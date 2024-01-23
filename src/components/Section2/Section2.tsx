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
        <Typography variant="h3" className="heading">
          Find our more <br /> about how we work
        </Typography>
        <Button
          sx={{
            color: "white",
            border: "2px solid white",
            px: "2rem",
            py: "0.8rem",

            fontFamily: "karla",
          }}
        >
          HOW WE WORK
        </Button>
      </article>
    </>
  );
}
