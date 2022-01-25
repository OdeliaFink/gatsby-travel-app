import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
// import PropTypes from "prop-types"
import { FaBars } from "react-icons/fa"

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">EXPLORIX</NavLink>
      <Bars />
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: red;
  height: 80px;
  display: flex;
  justify-content: space-betwen;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`
const Bars = styled(FaBars)`
  display: none;
  color: white;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
  }
`
