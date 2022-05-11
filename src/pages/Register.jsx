import styled from "styled-components";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://media.istockphoto.com/photos/plastic-free-set-with-eco-cotton-bag-glass-jar-green-leaves-and-top-picture-id1165099864?b=1&k=20&m=1165099864&s=170667a&w=0&h=LWuiPXDVceILW5SnDi7D8b9fcPML7CHxwFFS4alzMxI=")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: forestgreen;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  
  const [name, setName] = useState("");
  
    function handleSubmit() {
      alert(`Congratulations ${name}! You have successfully created an account with Nature's Friendly Mart Start Shopping!.\n\n`);
      return false;
    }

  return (
    <div>
       <Announcement/>
      <Navbar/>
    <Container>
      <Wrapper>
        <Title><h3>CREATE AN ACCOUNT</h3></Title>
        <Form>
          <Input placeholder="First Name" onChange={(e) => setName(e.target.value) } type="text" />
          <Input type="text" placeholder="Last name" />
          <Input placeholder="Username" />
          <Input type="email" placeholder="Email address" />
          <Input type="password" placeholder="Enter a password" />
          <Input type="password" placeholder="Confirm your password" />
          <Agreement>
          <input type="checkbox" />
            <label> By creating an account, I consent to the processing of my personal
            data in accordance with Nature's Friendly Mart's <b>PRIVACY POLICY</b>.</label>
          </Agreement>
          <Link to="/" className="link create" onClick={handleSubmit}><Button type="submit">CREATE</Button></Link>
        </Form>
      </Wrapper>
    </Container>
    <Footer/>
    </div>
  );
};

export default Register;
