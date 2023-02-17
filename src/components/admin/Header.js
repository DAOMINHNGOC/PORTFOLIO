import Head from "./Head";
import Nav from "./Nav";

const Header = () => {
  return `
  ${Head()}
  <div class="bg-slate-50 block h-[820px]">
        <div class="w-[1450px] mx-auto">
            <div class=" grid grid-cols-[400px,auto] pt-10 gap-12">
                <!-- ----------------------------------------HEADER -->
                <header class="bg-white">
                    <div class="w-[80px] mx-auto">
                        <img src="" width="80" class="h-[80px] rounded-full" alt="">
                    </div>
                    ${Nav()}
                </header>
                
            
  `;
};

export default Header;
