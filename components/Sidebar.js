import React,{useState} from 'react';
import styled from 'styled-components';
import Coinbaselogo from '../assets/cb-logo.png'
import Image from "next/image";
// import {navItems}  from '../static/navItems'
import { navItems } from '../static/navItems';


const Sidebar = () => {
    const [activeIcon, setActiveIcon] = useState(navItems[0].title)
  return (
      <Wrapper>
          <LogoContainer>
              <Logo>
                  <Image src={Coinbaselogo} alt='Coinbase logo' />
              </Logo>
          </LogoContainer>
          <NavItemContainer>
              {navItems.map((items, index) => (
                  <NavItem key={index} onClick={() =>  setActiveIcon(items.title)} >
                      <NavIcon style={{color: items.title === activeIcon && '#3773f5'}}>
                          {items.icon}
                      </NavIcon>
                      <NavTitle>{items.title}</NavTitle>

                  </NavItem>
              ))}
          </NavItemContainer>
      </Wrapper>
  )
};

export default Sidebar;


const Wrapper = styled.div`
height: calc(100vh);
border-right: 1px solid #282b2f;
width: calc(22rem - 16px - 16px);
padding: 0 1rem;
`;

const LogoContainer = styled.div`
 margin: 1.5rem 0;
`;

const Logo = styled.div`
width: 44%;
object-fit: contain;
margin-left: 1.5rem;
`;

const NavItemContainer = styled.div`
margin-top: 3rem;

&:hover{
    cursor: pointer;
}
`;

const NavItem = styled.div`
display: flex;
align-items: center;
font-size: 1.3rem;
font-weight: 500rem;
border-radius: 0.5rem;
margin-bottom: 1.5rem;
height: 4rem;

&:hover{
    background-color: #141519;

}
`;

const NavIcon = styled.div`
background-color: #141519;
padding: 0.7rem;
border-radius: 50%;
margin: 0 1rem;
display: grid;
place-items: center;
`;

const NavTitle = styled.div``;




