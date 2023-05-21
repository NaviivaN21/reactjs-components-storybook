import React from "react";
import {
  LeftElements,
  NavbarContainer,
  NavbarElementContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  RightElements,
} from "./Navbar.styles";

interface NavbarProps {
  leftElements: React.ReactNode[];
  rightElements?: React.ReactNode[];
  style?: React.CSSProperties;
};

export const Navbar = (props: NavbarProps) => {
  const { leftElements, rightElements } = props;

  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftElements>
          <NavbarLinkContainer>
            {leftElements}
          </NavbarLinkContainer>
        </LeftElements>
        <RightElements>
          {rightElements}
        </RightElements>
      </NavbarInnerContainer>
      <NavbarElementContainer></NavbarElementContainer>
    </NavbarContainer>
  )
};

export default Navbar;