import React from "react";

import { Wrap, Nav, Wrapp, Heading } from "./NavBar.styles";

interface Props {
  title: string;
}

const NavBar = ({ title }: Props) => {
  return (
    <Nav>
      <div>
        <Heading>
          {" "}
          <Wrap>Quiz</Wrap> <Wrapp>Zoid</Wrapp>
        </Heading>
      </div>
    </Nav>
  );
};

export default NavBar;
