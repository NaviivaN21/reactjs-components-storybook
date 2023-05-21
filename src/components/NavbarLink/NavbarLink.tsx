import React from 'react';
import { NavbarLinkComponent } from "./NavbarLink.style"

export interface NavbarLinkProps {
  link: string;
  linkName: string;
  customStyle?: React.CSSProperties;
}

export const NavbarLink = (props: NavbarLinkProps) => {
  const { link, linkName } = props;

  return (
    <NavbarLinkComponent to={link}>
      {linkName}
    </NavbarLinkComponent>
  )
};
