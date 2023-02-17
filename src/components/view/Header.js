import Head from "./Head";
import Nav from "./Nav";

const Header = () => {
  return `
  ${Head()}
  <!-- CONTAINER -->
    <div class="">
        <!-- HEADER -->
        <header class=" w-[1510px]">
            <div class="header flex justify-between px-10 py-12">
                <div class="uppercase">
                    <a class=" text-[25px] tracking-wide font-bold" href="">Đào Minh Ngọc</a>
                    <a class=" text-[18px] tracking-wide" href="">/ Frontend developer</a>
                </div>
                ${Nav()}
            </div>
        </header>
    
  `;
};

export default Header;
