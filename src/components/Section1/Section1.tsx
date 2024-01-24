import "./section1.css";
// mui
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
// assets
import c1 from "/icon-snappy-process.svg";
import c2 from "/icon-affordable-prices.svg";
import c3 from "/icon-people-first.svg";

export default function Section1() {
  interface choices {
    img: string;
    title: string;
    txt: string;
  }
  const choices: choices[] = [
    {
      img: c1,
      title: "Snappy Process",
      txt: "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.",
    },
    {
      img: c2,
      title: "Affordable Prices",
      txt: "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
    },
    {
      img: c3,
      title: "People First",
      txt: "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.",
    },
  ];
  return (
    <>
      <article>
        <hr className="w-[9rem] h-1 outline-none bg-gray-400" />
        <h1 className="heading text-[4rem] mt-[2rem] mb-[3rem]">
          We're different
        </h1>
        <ul id="s1">
          {choices.map((e, i) => {
            return (
              <Card key={i} className="!w-[23.2rem] !shadow-none">
                <CardMedia
                  image={e.img}
                  className="!w-[4rem]"
                  component="img"
                />
                <h3 className="py-[1rem] heading text-[1.6rem] mt-[1rem]">
                  {e.title}
                </h3>
                <CardContent sx={{ p: "0rem", fontWeight: "700" }}>
                  {e.txt}
                </CardContent>
              </Card>
            );
          })}
        </ul>
      </article>
    </>
  );
}
