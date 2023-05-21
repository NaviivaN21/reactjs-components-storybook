import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 80px;
  background-color: black;
  display: flex;
  flex-direction: column;
`;

export const LeftElements = styled.div`
  flex: 7;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightElements = styled.div`
  flex: 3;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;

export const NavbarElementContainer = styled.div`
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;