import "./mycontainer.css";
// mui
import { Container } from "@mui/material";
// components
import { Navbar, Section1, Section2 } from "../../components";

export default function MyContainer() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" component="main" className="space-y-[7rem]">
        <Section1 />
        <Section2 />
      </Container>
    </>
  );
}
