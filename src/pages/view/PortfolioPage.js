import Footer from "../../components/view/Footer";
import Header from "../../components/view/Header";

const PortfolioPage = () => {
  return `
  ${Header()}
  <!----------------------------------------------------------------- content -->
  <div class="">
      <!-- Title -->
      <section class="bg-[#e6dace] text-center">
          <h1 class=" font-black text-[32px] pt-20 pb-8">Portfolio</h1>
          <p class="pb-8">Most recent work</p>
      </section>
      <!-- project name 1 -->
      <section class="w-[900px] mx-auto mb-[80px] mt-10">
          <div class="rows grid grid-cols-2 gap-10">
              <div class="col image h-[60px] rounded-xl">
                  <img src="./image/2.jpg" width="500" class="h-[300px] rounded-xl " alt="">
              </div>
              <div class="col bg-white p-6 ">
                  <div class="">
                      <h1 class=" font-bold text-[20px] "><a href="">Project name 01</a></h1>
                      <h3 class="font-bold mb-6"><a href="">Role Title</a></h3>
                  </div>
                  <p class="mb-4">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just
                      click “Edit
                      Text”
                      or double click me to add your own content and make changes to the font. I’m a great place
                      for
                      you to tell a story and let your users know a little more about you.</p>
                  <a class="bg-blue-700 rounded-lg  hover:text-blue-600 hover:bg-slate-300 text-white font-bold px-8 py-3"
                      href="">Demo <i class="fa-solid fa-arrow-right"></i></a>
              </div>

          </div>
      </section>
      <section class="w-[900px] mx-auto mb-[80px] mt-10">
          <div class="bg-violet-600 text-white rounded-xl">
              <div class="py-6 px-6">
                  <h1 class="font-bold text-[20px] mb-2">You have a new Project</h1>
                  <p class="mb-2">Contact me now and get a 30% discount on your new project</p>
                  <button class="bg-white text-blue-800 px-2 py-3 rounded-md ">Contact Me <i
                          class="fa-solid fa-arrow-right"></i></button>
              </div>
          </div>
      </section>
  </div>

    ${Footer()}
  `;
};

export default PortfolioPage;
