import "./mycontainer.css";
// mui
import { Container } from "@mui/material";
// components
import { Navbar, Hero, Section1, Section2, Footer } from "../../components";

export default function MyContainer() {
  return (
    <>
      <Navbar />
      <main className="space-y-[24rem]">
        <Hero />
        <Container maxWidth="lg" component="main" className="space-y-[7rem]">
          <Section1 />
          <Section2 />
        </Container>
      </main>
      <Footer />
    </>
  );
}
