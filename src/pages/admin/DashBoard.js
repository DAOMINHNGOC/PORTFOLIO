import Footer from "../../components/admin/Footer";
import Header from "../../components/admin/Header";

const DashBoard = () => {
  return `
  ${Header()}
  <section class="box mx-auto ">
  <div class="title flex align-center ">
  <img src="https://res.cloudinary.com/fashsion-brand/image/upload/v1676793214/portfolio/cz3dbaruoomszgpdcqrz.png">
  </div>
  </section>
  
  ${Footer()}
  `;
};

export default DashBoard;
