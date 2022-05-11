import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";
import Announcement from './Announcement'
import Navbar from './Navbar'
import Footer from './Footer'

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;

const Categories = () => {
  return (
      <div>
          <Announcement />
      <Navbar/>
    <Container >
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
    <Footer/>
    </div>
  );
};

export default Categories;