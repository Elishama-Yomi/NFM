import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: forestgreen;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>World Earth Day Promo: Free Delivery on all Purchases Above ₦20,000 from the 20th of April - 20th of May, 2022. Place your Orders Now!</Container>;
};

export default Announcement;
