import Footer from "../../components/view/Footer";
import Header from "../../components/view/Header";

const ServicePage = () => {
  return `
    ${Header()}
    <!----------------------------------------------------------------- content -->
    <div class=" ">
        <!-- Title -->
        <section class=" text-center bg-[#e6dace]">
            <h1 class=" font-black text-[32px] pt-20 pb-8">Services</h1>
            <p class="pb-8">What i offer</p>
        </section>
        <!-- project name 1 -->
        <section class="w-[850px] mx-auto mb-[80px] mt-20">
            <div class="rows grid grid-cols-3 gap-6">
                <div class="col bg-slate-50 shadow  pt-32 h-[300px] px-6 hover:shadow-md">
                    <h1 class="font-bold text-[25px]"><i class="fa-solid fa-box"></i> <br> Ui/Ux <br> Designer <br>
                    </h1>
                    <a class="text-blue-500 font-medium" href="">View
                        More <i class="fa-solid fa-arrow-right"></i> </a>
                </div>
                <div class="col bg-slate-50 shadow   pt-32 h-[300px] px-6 hover:shadow-md">
                    <h1 class="font-bold text-[25px]">
                        <> <br> Frontend <br> Developer <br>
                    </h1>
                    <a class="text-blue-500 font-medium" href="">View More <i
                            class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div class="col bg-slate-50 shadow   pt-32 h-[300px] px-6 hover:shadow-md">
                    <h1 class="font-bold text-[25px]"><i class="fa-solid fa-pen"></i> <br> Branding <br> Designer
                        <br>
                    </h1>
                    <a class="text-blue-500 font-medium" href="">View More <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>

            </div>
        </section>

    </div>

    ${Footer()}
  `;
};

export default ServicePage;
