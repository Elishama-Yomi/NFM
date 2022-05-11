import styled from "styled-components";
import Navbar from "../components/Navbar";
import {mobile} from "../responsive";
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
    url("http://don16obqbay2c.cloudfront.net/wp-content/uploads/Hot-Eco-Friendly-Product-Ideas-to-Sell-Online-1621511112.png")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
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
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: forestgreen;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Lin = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  function handleSubmit() {
    alert(`You are successfully logged in. Keep shopping!\n\n`);
    return false;
  }
  return (
    <div>
       <Announcement/>
      <Navbar/>
    <Container>
      <Wrapper>
        <Title><h3>SIGN IN</h3></Title>
        <Form>
          <Input placeholder="Enter your username" />
          <Input type="password" placeholder="Enter your password" />
          <Link to="/" className="link create" onClick={handleSubmit}><Button type="submit">LOGIN</Button></Link>
          <Lin className="link">CREATE A NEW ACCOUNT</Lin>
        </Form>
      </Wrapper>
    </Container>
    <Footer/>
    </div>
  );
};

export default Login;
