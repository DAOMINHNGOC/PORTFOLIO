import Head from "./Head";
import Nav from "./Nav";

const Header = () => {
  return `
  ${Head()}
  <!-- CONTAINER -->
    <div class="">
        <!-- HEADER -->
        <header class=" w-[1510px]">
            <div class="header flex justify-between px-10 py-8 items-center ">
                <div class="uppercase flex items-center">
                    <a class=" text-[25px] tracking-wide font-bold" href="/admin/projects"><img src="https://res.cloudinary.com/fashsion-brand/image/upload/v1676633154/portfolio/logo_u0yyhm.png" width="90" alt=""></a>
                    <a class=" text-[25px] tracking-wide font-bold" href="">Đào Minh Ngọc</a>
                    <p class=" text-[18px] tracking-wide" >/ Frontend developer</p>
                </div>
                ${Nav()}
            </div>
        </header>
    
  `;
};

export default Header;
