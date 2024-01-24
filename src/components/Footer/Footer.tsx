import "./footer.css";
// mui
import { Stack } from "@mui/material";
// assets
import facebook_logo from "/icon-facebook.svg";
import twitter_logo from "/icon-twitter.svg";
import pinterest_logo from "/icon-pinterest.svg";
import instagram_logo from "/icon-instagram.svg";
import footer_logo from "/logo.svg";
import footer_img from "/bg-pattern-footer-desktop.svg";

export default function Footer() {
  interface socialLinks {
    img: string;
    label: string;
  }
  const socialLinks: socialLinks[] = [
    { img: facebook_logo, label: "follow me on facebook" },
    { img: twitter_logo, label: "follow me on twitter" },
    { img: pinterest_logo, label: "follow me on pinterest" },
    { img: instagram_logo, label: "follow me on instagram" },
  ];
  interface arrOfLinks_type {
    title: string;
    links: string[];
  }
  const arrOfLinks: arrOfLinks_type[] = [
    {
      title: "OUR COMPANY",
      links: ["HOW WE WORK", "WY INSURE ?", "VIEW PLANS", "REVIEWS"],
    },
    {
      title: "HELP ME",
      links: ["FAQ", "TERMS OF USE", "PRIVACY POLICY", "COOKIES"],
    },
    {
      title: "CONTACT",
      links: ["SALES", "SUPPORT", "LIVE CHAT"],
    },
    {
      title: "OTHERS",
      links: ["CAREERS", "PRESS", "LICENSES"],
    },
  ];
  return (
    <>
      <footer className="mt-[10rem] py-[4rem] bg-[url('/bg-pattern-footer-desktop.svg')] bg-no-repeat bg-gray-100">
        <article className="pb-[2rem] max-w-[84rem] flex justify-between mx-auto border-b-[1px] border-b-GrayishBlue">
          <img src={footer_logo} alt="logo" />
          <Stack
            component="ul"
            direction="row"
            spacing="1.5rem"
            className="items-center"
          >
            {socialLinks.map((e, i) => {
              return (
                <li key={i}>
                  <a href="#" aria-label={e.label}>
                    <img src={e.img} alt="logo" className="cursor-pointer" />
                  </a>
                </li>
              );
            })}
          </Stack>
        </article>
        <article
          id="footer__s2"
          className="max-w-[84rem] mx-auto mt-[4rem] font-bold"
        >
          {arrOfLinks.map((e, i) => {
            return (
              <section key={i}>
                <h6 className="text-GrayishBlue mb-[2rem]">{e.title}</h6>
                <Stack
                  direction="column"
                  component="ul"
                  spacing="1rem"
                  className="text-VeryDarkViolet"
                >
                  {e.links.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </Stack>
              </section>
            );
          })}
        </article>
      </footer>
    </>
  );
}
