import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;



const Title = styled.h3`
  margin-bottom: 30px;
`;



const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <div>
    <Container>
     
      <Left>
        <Logo>NATURE'S FRIENDLY MART</Logo>
        <Desc>
        Sustainable lifestyles make a real difference in our society. <br></br>
        You can reduce your carbon footprint and the amount of toxins released into the environment. <br></br>
        Shop sustainably at Nature's Friendly Mart and let's build a clean, safe and healthy world. <br></br>
        We also handle recyclable waste. Visit our waste pickup page to request a pickup.
         <br></br><br></br>
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 65, Caesar Street, Abuja, FCT, Nigeria
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +234 801 702 1999
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> info@naturesfriendlymart.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
      
    </Container>
    <div><center><br></br><p>Copyright 2022 Nature's Friendly Mart | All Rights Reserved</p></center></div>
    </div>
  );
};

export default Footer;
