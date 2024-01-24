import "./hero.css";
// mui
import { Button } from "@mui/material";
import img_desktop from "/image-intro-desktop.jpg";
import img1 from "/bg-pattern-intro-left-desktop.svg";
import img2 from "/bg-pattern-intro-right-desktop.svg";
export default function Hero() {
  return (
    <>
      <article className="bg-DarkViolet text-white min-h-[35rem] flex items-center justify-center space-x-[1rem]">
        <div className="absolute w-full flex  justify-between top-0  ">
          <img
            src={img1}
            alt="img"
            className="w-[14rem] h-[30rem]  translate-y-[30rem]"
          />
          <img src={img2} alt="img" className="" />
        </div>
        <section className="w-[34rem] ">
          <hr className="mb-[4rem] w-[9rem]" />
          <h1 className="text-[4.2rem] heading leading-[4.2rem]">
            Humanizing <br /> your insurance.
          </h1>
          <p className="pt-[1.5rem] pb-[2rem]">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <Button
            sx={{
              color: "white",
              px: "2rem",
              border: "2px solid white",
              py: "0.5rem",
              fontWeight: "700",
            }}
          >
            view plans
          </Button>
        </section>
        <section className="overflow-visible border-red-500 border-2 w-[30rem] h-[20rem]">
          <img
            src={img_desktop}
            alt=""
            className="border-2 border-blue-500 absolute w-[30rem]"
          />
        </section>
      </article>
    </>
  );
}
