import Footer from "../../components/view/Footer";
import Header from "../../components/view/Header";

const SkillPage = () => {
  return `
    ${Header()}
    <!----------------------------------------------------------------- content -->
    <div class=" ">
        <!-- Title -->
        <section class=" text-center bg-[#e6dace]">
            <h1 class=" font-black text-[32px] pt-20 pb-8">Skills</h1>
            <p class="pb-8">My technical level</p>
        </section>
        <!-- project name 1 -->
        <section class="w-[850px] mx-auto mb-[80px] mt-20">
            <div class="rows grid grid-cols-2 gap-20">
                <div class="col">
                    <h1 class="font-bold text-[25px]">{ } Frontend developer
                    </h1> More than 4 years
                </div>
                <div class="col bg-white ">
                    <h1 class="font-bold text-[25px]"><i class="fa-solid fa-swatchbook mr-4"></i>Designer</h1>
                    More than 5 years
                </div>
                <div class="col bg-white ">
                    <h1 class="font-bold text-[25px]"><i class="fa-solid fa-database mr-4"></i>Backend developer
                    </h1>
                    More than 2 years
                </div>

            </div>
        </section>

    </div>
    ${Footer()}
  `;
};

export default SkillPage;
