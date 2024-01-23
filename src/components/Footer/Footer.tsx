import "./footer.css";
// mui
import { Stack } from "@mui/material";
// assets
import facebook_logo from "/icon-facebook.svg";
import twitter_logo from "/icon-twitter.svg";
import pinterest_logo from "/icon-pinterest.svg";
import instagram_logo from "/icon-instagram.svg";
import footer_logo from "/logo.svg";

export default function Footer() {
  const socialLinks: string[] = [
    facebook_logo,
    twitter_logo,
    pinterest_logo,
    instagram_logo,
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
      <footer className="mt-[10rem] py-[4rem]">
        <article className="pb-[2rem] max-w-[84rem] flex justify-between mx-auto border-b-2 border-b-GrayishBlue">
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
                  <img src={e} alt="logo" className="cursor-pointer" />
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
