import "./mycontainer.css";
// mui
import { Container } from "@mui/material";
// components
import { Navbar, Section2 } from "../../components";

export default function MyContainer() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" component="main">
        <Section2 />
      </Container>
    </>
  );
}
