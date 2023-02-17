import Footer from "../../components/view/Footer";
import Header from "../../components/view/Header";
import { useEffect, useState } from "../../lib";

const PortfolioPage = () => {
  const [projects, setProjects] = useState([]);
  console.log(projects);
  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);
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
          
              ${projects
                .map((project) => {
                  return `
                <div class="rows grid grid-cols-2 gap-10 mb-7">
                    <div class="col image overflow-hidden rounded-md"> 
                        <a href="${project.link}" > 
                        <img src="https://res.cloudinary.com/fashsion-brand/image/upload/v1655976667/image_45_mw2kej.jpg" width="500" class="h-[300px] hover:opacity-50 hover:transition-all   hover:scale-105 rounded-md " alt=""></a>
                    </div>
                    
                    <div class="col bg-white p-6 border rounded-md hover:shadow-xl hover:transition-all">
                        <div class="">
                            <span>${project.date}</span>
                            <h1 class=" font-bold text-[20px] hover:text-[21px] hover:transition-all hover:text-red-500"><a href="">${project.name}</a></h1>
                            <h3 class="font-bold mb-6"><a href="">Role Title</a></h3>
                        </div>
                        <p class="mb-4">${project.description}</p>
                        <a class="bg-blue-700 rounded-lg   hover:bg-blue-900 hover:bg-slate-300 text-white  font-bold px-8 py-3"
                            href="">Demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                `;
                })
                .join("")}

          
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
