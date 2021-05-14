import React, { useState } from "react";
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';
// Style
import {
  BoxContent , 
  Hamburger,
  MenuContainerDiv,
  MenuLink,
  Nav,
  NavContent,
  LogoLink,
  Menu,
  MenuEntrarButton,

} from './styles';

// Icons 
import {HiMenu} from "react-icons/hi";

export default function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);
  return (
    <BoxContent>
      <div className="limit">
        <NavContent>
                <Col xs={5} sm="auto">
                  <Link href="/">
                    <a>
                    <img src="/images/logo.png" alt="Yoomy" title="Yoomy" className="img-fluid logo" />
                    </a>
                  </Link>
                </Col>
                {/* <Logo href="">
                    Yoomy
                </Logo> */}
                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <span />
                    <span />
                    <span />
                </Hamburger>
                <Menu isOpen={isOpen}>
                    <MenuContainerDiv>
                        {/* <Fundo/> */}
                        <Link href="/restaurantes" passHref>
                            <MenuLink >Restaurantes</MenuLink>
                        </Link>
                        <Link href="/aplicativo" passHref>
                            <MenuLink >Aplicativo</MenuLink>
                        </Link>
                        
                    </MenuContainerDiv>
                    <Link href="/login">
                      <a className="text-decoration-none">
                        <MenuEntrarButton type="button">
                          Entrar
                        </MenuEntrarButton>
                      </a>
                    </Link>
                </Menu>
            </NavContent>
      </div>
    </BoxContent>
  )
}
