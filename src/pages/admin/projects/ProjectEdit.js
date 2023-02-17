import Footer from "../../../components/admin/Footer";
import Header from "../../../components/admin/Header";
import { router, useEffect, useState } from "../../../lib";

const ProjectEdit = ({ id }) => {
  const [projects, setProject] = useState({});
  useEffect(() => {
    fetch("http://localhost:3000/projects/" + id)
      .then((response) => response.json())
      .then((data) => setProject(data));
  }, []);
  useEffect(() => {
    const form = document.querySelector("#form-edit");
    const name = document.querySelector("#name");
    const date = document.querySelector("#date");
    const description_short = document.querySelector(".description_short");
    const description_long = document.querySelector(".description_long");
    const image = document.querySelector("#image");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = {
        name: name.value,
        price: price.value,
        description_short: description_short.value,
        image: image.value,
        description_long: description_long.value,
        date: date.value,
      };
      fetch("http://localhost:3000/projects/" + id, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      }).then(() => router.navigate("/admin/projects"));
    });
  });
  return `
    ${Header()}
    <!-- -----------------------------------------CONTENT -->
                <section class="box">
                    <div class="title flex align-center">
                        <h1 class="font-bold text-[30px]">Add Projects</h1>
                        <form class="ml-6">
                            <input type="text" class="border px-3 py-2 rounded-md outline-none"
                                placeholder="Mời bạn nhập project muốn tìm">
                            <button
                                class="bg-blue-500 px-3 py-2 rounded-md text-white hover:bg-blue-600 deley-100">Search</button>
                        </form>
                    </div>
                    
                    <form id="form-edit">
                        <div>
                            <label>Tên Project</label>
                            <input value="${
                              projects.name
                            }" type="text" id="name" class="w-full py-4 px-3 outline-none rounded-md shadow-md mb-4"
                                placeholder="Tên projects">
                        </div>
                        <div>
                            <label>Date</label>
                            <input value="${
                              projects.date
                            }" type="text" id="date" class="w-full py-4 px-3 outline-none rounded-md shadow-md mb-4"
                                placeholder="Date projects">
                        </div>
                        <div>
                            <label>Image</label>
                            <input value="${
                              projects.image
                            }" type="file" id="image" class="w-full py-4 px-3 outline-none rounded-md shadow-md mb-4"
                                placeholder="Image projects">
                        </div>
                        <label>Mô tả Ngắn</label>
                        <textarea value="${
                          projects.description_short
                        }" class="w-full py-4 px-3 description_short outline-none rounded-md shadow-md mb-4" name="" 
                            cols="30" rows="7" placeholder="Description Short"></textarea>
                            <label>Mô tả dài</label>
                            <textarea value="${
                              projects.description_long
                            }" class="w-full py-4 px-3 description_long outline-none rounded-md shadow-md mb-4" name="" 
                                cols="30" rows="7" placeholder="Description Long"></textarea>

                        <div class="btn">
                            <a href="/admin/projects/add" class="bg-red-500 px-3 py-2 rounded-md text-white hover:bg-red-600 deley-100">Nhập
                                lại</a>
                            <a class="bg-green-500 px-3 py-2 rounded-md text-white hover:bg-green-600 deley-100"
                                href="/admin/projects">Danh sách</a>
                            <button
                                class="bg-blue-500 px-3 py-2 rounded-md text-white hover:bg-blue-600 deley-100">Lưu</button>
                        </div>
                    </form>
                    
                </section>
    ${Footer()}  
  `;
};

export default ProjectEdit;
