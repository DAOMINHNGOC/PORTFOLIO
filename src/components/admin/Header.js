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
                    <div class="w-[200px] mx-auto">
                        <a href="/"><img src="src/image/logo.png" width="200" class="h-[200px] rounded-full" alt=""></a>
                    </div>
                    ${Nav()}
                </header>
                
            
  `;
};

export default Header;
