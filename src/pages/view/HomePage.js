import Footer from "../../components/view/Footer";

import Header from "../../components/view/Header";

const HomePage = () => {
  return `
    ${Header()}
    <div class=" grid grid-cols-[650px,auto]">
    <!-- ARTICLE -->
    <article class=" bg-[#e6dace] h-[700px] relative ">
        <section
            class="box bg-[#f4ece6] w-[430px] absolute ml-[300px] mt-[100px] text-center  box shadow-lg shadow-gray-500 rounded-l">
            <!-- Image -->
            <div class="img ">
                <a href="" class=""><img src="https://res.cloudinary.com/fashsion-brand/image/upload/v1676611676/portfolio/IMG_7574_bw9vir.jpg"
                        class="border rounded-full border-none mx-auto my-10 h-[250px] hover:scale-110 transition"
                        width="250" alt=""></a>
            </div>
            <!-- content -->
            <div>
                <h1 class="font-black uppercase text-[23px] pt-3 pb-10 tracking-wide">Đào Minh Ngọc</h1>
                <span class="tracking-widest">Frontend developer</span>
            </div>
            <!-- footer -->
            <div class="bg-white ">
                <ul class="flex justify-center py-2 mt-5 rounded-l">
                    <li><a class="pl-4 pr-5 text-[20px]" href="https://www.facebook.com/minhngoc22052k3/"><i
                                class="fa-brands fa-facebook"></i></a></li>
                    <li><a class="pr-5 text-[20px]" href=""><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a class=" pr-5 text-[20px]" href=""><i class="fa-brands fa-linkedin-in"></i></a></li>
                    <li><a class="pr-5 text-[20px]" href=""><i class="fa-brands fa-instagram"></i></a></li>
                </ul>
            </div>
        </section>
    </article>
    <!-- ASIDE -->
    <aside class="relative">
        <div class="box w-[500px] mx-auto  my-32 ">
            <h1 class="text-[44px] font-medium font-black">Hello, <br> I am Đào Minh Ngọc.</h1>
            <p class="py-5 text-[20px]">High level experience in web design and development knowledge, producing
                quality
                work</p>
            <ul>
                <li class="decoration-none w-[150px] rounded-xl"><a
                        class="list-none block text-white rounded-xl transition deley-75 bg-blue-500 hover:text-blue-600 hover:bg-slate-300 py-3 w-full text-[19px] font-bold text-center"
                        href="">Contact
                        Me <i class="fa-solid fa-arrow-right"></i></a></li>

            </ul>
        </div>

    </aside>
</div>
    ${Footer()}
  `;
};

export default HomePage;
