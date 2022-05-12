import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import {Link} from 'react-router-dom';
import logo from './images/logo.png'

const Container = styled.div`
  height: 85px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Home = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Hom = styled.div`
  flex: 2;
  display: flex;
  align-items: right;
  padding-left: 10px;
`;
const Ho = styled.div`
  flex: 2;
  display: flex;
  align-items: right;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  border: none;
  ${mobile({ width: "30px" })}
`;

const Center = styled.div`
  flex: 3;
  text-align: center;
`;

const Nfm = styled.h1`
  font-weight: bold;
  color: brown;
  ${mobile({ fontSize: "21px" })}
`;
const Right = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  margin-right: 0px
  // justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
  font-weight: bold;
  color: brown;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container id="container">
      <Wrapper>
        <Left>
          <Logo><div><img id="ax" src={logo} alt="NFM" /></div></Logo>
        </Left>
        <Home>
        <Link to="/" className="link"><MenuItem>HOME</MenuItem></Link>
        </Home>
        <Hom>
        <Link to="/categories" className="link"><MenuItem>PRODUCT CATEGORIES</MenuItem></Link>
        </Hom>
        <Center>
          <Nfm className="nfm">NATURE'S FRIENDLY MART</Nfm>
        </Center>
        <Ho>
        <Link to="/pickup" className="link wast"><MenuItem>WASTE PICKUP</MenuItem></Link>
        </Ho>
        <Right>
         <Link to="/register" className="link"><MenuItem>SIGN UP</MenuItem></Link>
         <Link to="/login" className="link"><MenuItem>SIGN IN</MenuItem></Link>
          <MenuItem>
            <Badge color="primary">
            <Link to="/categories" className="link"><ShoppingCartOutlined />
            </Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
